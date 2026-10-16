from PIL import Image,ImageDraw,ImageFont
import math,xml.etree.ElementTree as E,json,os
FONT=os.environ.get('MAP_FONT','NotoSansKR.ttf')
def render(key,lon,lat,scale,title,sub):
 W,H=1200,1400;im=Image.new('RGB',(W,H),'#f3f2eb');d=ImageDraw.Draw(im)
 def f(n):
  z=ImageFont.truetype(FONT,n);z.set_variation_by_axes([600]);return z
 def text(p,s,n=34,c='#253e39'):d.text(p,s,font=f(n),fill=c,stroke_width=1)
 def xy(p):return (600+(p[0]-lon)*111320*math.cos(math.radians(lat))*scale,750-(p[1]-lat)*111320*scale)
 r=E.parse(key+'.osm').getroot();nodes={n.get('id'):(float(n.get('lon')),float(n.get('lat'))) for n in r.findall('node')};ways=[]
 for w in r.findall('way'):
  t={z.get('k'):z.get('v') for z in w.findall('tag')};ps=[nodes[n.get('ref')] for n in w.findall('nd') if n.get('ref') in nodes];ways.append((t,ps))
 for t,ps in ways:
  if len(ps)<3:continue
  p=[xy(a) for a in ps];col=None
  if t.get('landuse') in ['forest','grass','meadow'] or t.get('leisure') in ['park','garden']:col='#dbe7cf'
  if t.get('natural')=='wood':col='#dbe7cf'
  if t.get('amenity')=='parking':col='#e0e2dc'
  if t.get('natural')=='water' or t.get('water'):col='#bedde4'
  if col:d.polygon(p,fill=col)
 for t,ps in ways:
  if len(ps)<2:continue
  p=[xy(a) for a in ps]
  if t.get('waterway'):d.line(p,fill='#bedde4',width=18,joint='curve')
  if t.get('building'):d.polygon(p,fill='#d4d4ca',outline='#c1c3b9')
  if t.get('highway'):
   walk=t['highway'] in ['footway','path','steps','pedestrian'];w=6 if walk else 15
   d.line(p,fill='#c5c9bc',width=w+4,joint='curve');d.line(p,fill='#fffdf7',width=w,joint='curve')
 route=[xy(a) for a in json.load(open(key+'-route.json'))]
 d.line(route,fill='white',width=23,joint='curve');d.line(route,fill='#168570',width=14,joint='curve')
 for idx in [len(route)//3,2*len(route)//3]:
  x,y=route[idx];xx,yy=route[idx+1];ang=math.atan2(yy-y,xx-x);d.polygon([(x+16*math.cos(ang),y+16*math.sin(ang)),(x+13*math.cos(ang+2.5),y+13*math.sin(ang+2.5)),(x+13*math.cos(ang-2.5),y+13*math.sin(ang-2.5))],fill='white')
 d.rectangle((0,0,W,195),fill='#fafbf8');text((55,36),title,58);text((58,118),sub,32)
 d.rectangle((0,1195,W,H),fill='#fafbf8')
 text((60,1210),'초록선: 주요 보행로 · 같은 길로 복귀',36)
 text((60,1255),'시설 진입은 현장 표지 이용 · 전체 무장애 코스 아님',25)
 text((60,1300),'지도: © OpenStreetMap contributors · ODbL',25,'#68756f')
 text((60,1340),'openstreetmap.org/copyright  |  자료 확인 2026.10.16',24,'#68756f')
 text((1080,215),'북',30);d.line((1110,310,1110,270),fill='#253e39',width=5);d.polygon([(1110,250),(1100,272),(1120,272)],fill='#253e39')
 def pin(p,num,label,dx,dy):
  x,y=xy(p);d.ellipse((x-26,y-26,x+26,y+26),fill='#195b4c',outline='white',width=4);d.text((x,y-3),str(num),font=f(30),fill='white',anchor='mm')
  bx,by=x+dx,y+dy;tw=d.textbbox((0,0),label,font=f(36))[2];d.line((x,y,bx if dx>0 else bx+tw+28,by+29),fill='#195b4c',width=3)
  d.rounded_rectangle((bx,by,bx+tw+28,by+62),radius=10,fill='white',outline='#a9bdb0',width=2);text((bx+14,by+6),label,36)
 if key=='mungyeong':
  pin((128.076379,36.76314),1,'옛길박물관',70,25)
  pin((128.0752194,36.7684296),2,'1관문 주흘관',70,-60)
  text((80,1060),'↓ 공원 입구 쪽',32)
  text((700,440),'여기서 되돌아오기',32)
  text((150,700),'산책 방향 ↑',34)
 else:
  pin((127.721893,35.52372669),1,'상림관광안내소',-330,85)
  pin((127.719395,35.524321),2,'함화루 주변',-260,-110)
  text((100,290),'상림 숲',42)
  text((90,1100),'위천',34,'#518899')
 im.save(key+'-map.png');im.resize((360,420)).save(key+'-mobile.png')
 json.dump([{'tags':t,'coordinates':p} for t,p in ways],open(key+'-map-data.json','w'),ensure_ascii=False)
render('mungyeong',128.0757,36.7657,1.25,'문경새재 · 1관문 산책','옛길박물관 → 주흘관 → 되돌아오기')
render('hamyang',127.7205,35.5240,2.6,'함양 상림 · 짧은 산책','관광안내소 → 함화루 주변 → 같은 입구')
