"""Validate recorded observations and publication state; never fetch or invent analytics."""
import json
from datetime import date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent

def main():
    baseline = json.loads((ROOT / 'baseline-2026-09-11.json').read_text())
    queue = json.loads((ROOT / 'recovery-queue.json').read_text())
    json.loads((ROOT / 'post-record.template.json').read_text())
    for row in baseline['monthly']:
        assert row['pageviews'] >= 0
        assert 0 <= row['mobile_home_share_pct'] <= 100
    seen = set()
    for item in queue['items']:
        if item['post_id']:
            assert item['post_id'] not in seen, 'Duplicate post ID'
            seen.add(item['post_id'])
        if item['patch_path']:
            assert (ROOT.parent.parent / item['patch_path']).is_file(), item['patch_path']
        if item['public_updated_at']:
            changed = date.fromisoformat(item['public_updated_at'])
            assert item['status'] == '공개수정확인'
            assert item['review_dates'] == [(changed + timedelta(days=n)).isoformat() for n in (14, 28)]
        else:
            assert item['status'] != '공개수정확인'
            assert item['review_dates'] == [], 'Do not start measurement before publication'
    july, august = (r['pageviews'] for r in baseline['monthly'][-2:])
    loss = sum(i['july_pageviews'] - i['august_pageviews'] for i in queue['items'][:4])
    print(f'OK: {len(queue["items"])} items; July–August decline {july-august:,}; top four loss {loss:,} ({loss/(july-august):.1%})')
    print('Public edits recorded:', sum(i['public_updated_at'] is not None for i in queue['items']))

if __name__ == '__main__':
    main()
