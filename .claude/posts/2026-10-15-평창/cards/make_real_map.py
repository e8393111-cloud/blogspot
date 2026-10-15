from PIL import Image,ImageDraw,ImageFont
import json,math
W,H=1080,1440
im=Image.new('RGB',(W,H),'#f7f8f4'); d=ImageDraw.Draw(im)
import os
font=os.environ.get('MAP_KOREAN_FONT','NotoSansKR.ttf')
def f(s):
 z=ImageFont.truetype(font,s);z.set_variation_by_axes([550]);return z
def txt(p,s,size=28,col='#233e37'):d.text(p,s,font=f(size),fill=col)
# North-up local equirectangular metric projection, same scale in X and Y.
lon0,lat0=128.5949,37.7288
scale=.94
cx,cy=540,790
def xy(c):return (cx+(c[0]-lon0)*111320*math.cos(math.radians(lat0))*scale,cy-(c[1]-lat0)*111320*scale)
features=json.load(open('osm-area.geojson'))['features']
# Real OSM outlines, waterways and transport. Background has no invented terrain.
for feat in features:
 p=feat['properties']; pts=[xy(c) for c in feat['geometry']['coordinates']]
 if p.get('amenity')=='place_of_worship':d.polygon(pts,fill='#e7e6da',outline='#ceccbd')
 if p.get('amenity')=='parking':d.polygon(pts,fill='#e0e4e7',outline='#bac5ca')
 if p.get('landuse')=='residential':d.polygon(pts,fill='#eeeee7')
for feat in features:
 p=feat['properties'];pts=[xy(c) for c in feat['geometry']['coordinates']]
 if p.get('waterway'):d.line(pts,fill='#b5d9e4',width=16,joint='curve')
 if p.get('building'):d.polygon(pts,fill='#d3d0c5',outline='#bcb7ab')
for feat in features:
 p=feat['properties'];pts=[xy(c) for c in feat['geometry']['coordinates']]
 if p.get('highway'):
  walk=p['highway'] in ('footway','path','steps'); w=4 if walk else 14
  d.line(pts,fill='#c4c8bf' if walk else '#c8c9bf',width=w+3,joint='curve')
  d.line(pts,fill='#e9e8db' if walk else '#ffffff',width=w,joint='curve')
route=next(x for x in features if x['properties']['osm_id']=='656982050')['geometry']['coordinates']
# stop at nearest actual route vertex to gate (no fabricated route extension)
gate=(128.5971158,37.7253243)
i=min(range(len(route)),key=lambda i:(route[i][0]-gate[0])**2+(route[i][1]-gate[1])**2)
route=route[:i+1] if route[0][1]>route[-1][1] else route[i:]
d.line([xy(c) for c in route],fill='white',width=19,joint='curve');d.line([xy(c) for c in route],fill='#e87642',width=11,joint='curve')
# Labels with restrained callout leaders.
def label(c,title,sub,x,y,num,color='#244e46'):
 px,py=xy(c);d.line([(px,py),(x+15,y+22)],fill=color,width=2)
 d.ellipse((px-8,py-8,px+8,py+8),fill=color,outline='white',width=2)
 w=max(d.textbbox((0,0),title,font=f(30))[2]+72,d.textbbox((0,0),sub,font=f(22))[2]+30)
 d.rounded_rectangle((x,y,x+w,y+91),radius=12,fill='white',outline='#d6ded5',width=2)
 d.ellipse((x+12,y+13,x+45,y+46),fill=color);txt((x+20,y+12),num,21,'white')
 txt((x+56,y+9),title,30);txt((x+15,y+54),sub,22,'#5f716b')
label((128.5920483,37.7315658),'월정사 경내','적광전 · 팔각구층석탑',65,308,'4')
label((128.5946863,37.7314067),'금강교','주차장과 숲길 연결',650,402,'2')
label((128.5953146,37.7303895),'월정사 주차장','산책 출발 · 복귀 지점',740,572,'1')
label(gate,'일주문','여기서 같은 숲길로 복귀',740,1090,'3')
txt((240,815),'전나무숲길',34,'#b95a31');txt((240,864),'강조선 구간 왕복',23,'#9c725b')
txt((405,977),'오대산로',23,'#78847e')
# mask map outside panel, finish editorial header and footer
for box in [(0,0,1080,230),(0,1240,1080,1440)]:d.rectangle(box,fill='#f7f8f4')
txt((64,38),'WOLJEONGSA  /  WALKING MAP',21,'#677c73')
txt((60,82),'월정사, 어디로 걸을까?',50)
txt((64,161),'주차장 → 금강교 → 일주문 → 같은 길로 돌아오기',26)
d.line((64,219,1016,219),fill='#d1dbd1',width=2)
# north indicator and metric scale
x,y=956,280;d.polygon([(x,y),(x-9,y+28),(x,y+23),(x+9,y+28)],fill='#34584c');txt((x-8,y-30),'N',22)
# 100m = 94px
x,y=78,1190;d.line((x,y,x+94,y),fill='#566a61',width=4);d.line((x,y-7,x,y+7),fill='#566a61',width=3);d.line((x+94,y-7,x+94,y+7),fill='#566a61',width=3);txt((x,y+10),'100 m',19)
d.line((64,1245,1016,1245),fill='#d1dbd1',width=2)
txt((64,1266),'숲길 편도 약 1km · 왕복 약 2km',31)
txt((64,1311),'공식 관광안내 기준 · 주차장 연결길과 경내 이동은 별도',23,'#667970')
txt((64,1358),'실제 OSM 좌표로 제작 · 현장 안내를 우선하세요',20,'#667970')
txt((64,1394),'© OpenStreetMap contributors · openstreetmap.org/copyright',18,'#667970')
im.save('woljeongsa-real-map.png')
