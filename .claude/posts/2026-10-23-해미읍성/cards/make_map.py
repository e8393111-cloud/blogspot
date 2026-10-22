from PIL import Image,ImageDraw,ImageFont
import xml.etree.ElementTree as E, math
r=E.parse('haemi.osm').getroot();ns={n.get('id'):(float(n.get('lon')),float(n.get('lat'))) for n in r.findall('node')}
im=Image.new('RGB',(1200,1300),'#f6f4ec');d=ImageDraw.Draw(im)
def xy(p):return (600+(p[0]-126.547)*89000*1.6,800-(p[1]-36.7127)*111320*1.6)
def font(n):
 f=ImageFont.truetype('NotoSansKR.ttf',n);f.set_variation_by_axes([650]);return f
def tx(p,s,n=32,c='#233e34'):d.text(p,s,font=font(n),fill=c)
for w in r.findall('way'):
 t={x.get('k'):x.get('v') for x in w.findall('tag')};p=[xy(ns[x.get('ref')]) for x in w.findall('nd') if x.get('ref') in ns]
 if len(p)<2:continue
 if t.get('landuse') or t.get('leisure')=='park':d.polygon(p,fill='#e2ead6')
 if t.get('building'):d.polygon(p,fill='#d9d5c9')
 if t.get('highway'):d.line(p,fill='#c6c6ba',width=12);d.line(p,fill='white',width=8)
 if t.get('barrier')=='city_wall' or t.get('historic')=='citywalls':d.line(p,fill='#8c9676',width=9)
pts=[((126.5442,36.71264),'1 해미정류소',(-110,40)),((126.547366,36.7114769),'2 진남문',(-80,45)),((126.548266,36.7121579),'3 회화나무',(40,-40)),((126.5492,36.7132),'4 동헌',(30,-20))]
for p,s,(dx,dy) in pts:
 x,y=xy(p);d.ellipse((x-12,y-12,x+12,y+12),fill='#215840',outline='white',width=3);box=d.textbbox((0,0),s,font=font(46));xx=x+dx;yy=y+dy;d.rectangle((xx-10,yy-4,xx+box[2]+10,yy+65),fill='white');tx((xx,yy),s,46)
d.rectangle((0,0,1200,210),fill='#f6f4ec');tx((55,35),'해미읍성 · 짧게 걷는 순서',54);tx((55,112),'정류소 → 진남문 → 회화나무 → 동헌(선택)',32);tx((55,160),'번호는 방문 순서 · 길찾기 경로선이 아닌 위치 안내',27)
d.rectangle((0,1140,1200,1300),fill='#f6f4ec');tx((55,1155),'진남문으로 되돌아와요 · 현장 보행 안내를 따라 이동',31);tx((55,1210),'© OpenStreetMap contributors · ODbL · 2026.10.19',25);tx((55,1250),'openstreetmap.org/copyright  |  북 ↑',24)
im.save('travel-repo/.claude/posts/2026-10-23-해미읍성/cards/haemi-map.png')
