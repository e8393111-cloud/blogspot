from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import math, urllib.request, xml.etree.ElementTree as ET, json
p=Path(__file__).resolve().parent
if not (p/'NotoSansKR.ttf').exists():
    (p/'NotoSansKR.ttf').write_bytes(urllib.request.urlopen('https://raw.githubusercontent.com/google/fonts/main/ofl/notosanskr/NotoSansKR%5Bwght%5D.ttf').read())
r=ET.parse(p/'map-source.osm').getroot()
nodes={n.attrib['id']:(float(n.attrib['lon']),float(n.attrib['lat'])) for n in r.findall('node')}
way=next(w for w in r.findall('way') if w.attrib['id']=='978579159')
coords=[nodes[n.attrib['ref']] for n in way.findall('nd')]
z=16
def tile(lon,lat): return ((lon+180)/360*2**z,(1-math.asinh(math.tan(math.radians(lat)))/math.pi)/2*2**z)
cx,cy=tile(127.1588,36.18195)
x0,y0=int(cx)-1,int(cy)-1
bg=Image.new('RGB',(768,768))
for dx in range(3):
    for dy in range(3):
        fn=p/f'tile-{z}-{x0+dx}-{y0+dy}.png'
        if not fn.exists():
            req=urllib.request.Request(f'https://tile.openstreetmap.org/{z}/{x0+dx}/{y0+dy}.png',headers={'User-Agent':'TravelBlogMap/1.0 attribution included'})
            fn.write_bytes(urllib.request.urlopen(req,timeout=30).read())
        bg.paste(Image.open(fn),(dx*256,dy*256))
left=int((cx-x0)*256-220);top=int((cy-y0)*256-200)
bg=bg.crop((left,top,left+440,top+400)).resize((1100,1000))
im=Image.new('RGB',(1200,1440),'#f7f9f7');im.paste(bg,(50,215));d=ImageDraw.Draw(im)
def font(n):
    f=ImageFont.truetype(str(p/'NotoSansKR.ttf'),n);f.set_variation_by_axes([650]);return f
def text(x,y,s,n=38,c='#173746'):d.text((x,y),s,font=font(n),fill=c)
def xy(pt):
    x,y=tile(*pt);return (50+((x-x0)*256-left)*2.5,215+((y-y0)*256-top)*2.5)
text(55,35,'탑정호 출렁다리 왕복',58)
text(55,120,'남문 또는 북문 출발 → 같은 문으로 복귀',35)
pts=[xy(c) for c in coords]
d.line(pts,fill='white',width=19);d.line(pts,fill='#2F6F8F',width=11)
for label,point,offset in [('남문',pts[0],(25,15)),('북문',pts[-1],(-155,-85))]:
    x,y=point;d.ellipse((x-17,y-17,x+17,y+17),fill='#2F6F8F',outline='white',width=5)
    bx,by=x+offset[0],y+offset[1];d.rounded_rectangle((bx-12,by-5,bx+122,by+68),10,fill='white',outline='#2F6F8F',width=2);text(bx,by,label,46)
text(780,695,'다리 편도 600m',36)
text(780,750,'왕복 1.2km',36)
text(1040,230,'N ↑',33)
text(55,1245,'다리 구간만 표시 · 주차장 연결 거리는 별도',32)
text(55,1300,'노선: OSM way 978579159 · 길이: 논산시 공식 안내',26)
text(55,1350,'© OpenStreetMap contributors / ODbL · 2026.10.30',25)
im.save(p/'06-map.png');im.resize((360,432)).save(p/'06-map-mobile.png')
(p/'map-source.json').write_text(json.dumps({'source':'https://api.openstreetmap.org/api/0.6/map?bbox=127.15,36.175,127.18,36.195','license':'https://www.openstreetmap.org/copyright','date':'2026-10-30','bridge_way':978579159,'coordinates':coords,'note':'다리 실제 선형, 양 끝 남북문 구분을 논산시 주차장지도와 대조. 주차장핀 및 미검증 접근길 생략.600m는 공식 안내, 왕복 산술계산.'},ensure_ascii=False,indent=2))
