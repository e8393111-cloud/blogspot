from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import urllib.request,math,json,io
p=Path(__file__).resolve().parent
if not (p/'NotoSansKR.ttf').exists():
 (p/'NotoSansKR.ttf').write_bytes(urllib.request.urlopen('https://raw.githubusercontent.com/google/fonts/main/ofl/notosanskr/NotoSansKR%5Bwght%5D.ttf',timeout=60).read())
z=13
def tile(lon,lat):
 return ((lon+180)/360*2**z,(1-math.asinh(math.tan(math.radians(lat)))/math.pi)/2*2**z)
cx,cy=tile(127.495,36.486)
x0,y0=int(cx)-1,int(cy)-2
bg=Image.new('RGB',(768,1024))
for dx in range(3):
 for dy in range(4):
  url=f'https://tile.openstreetmap.org/{z}/{x0+dx}/{y0+dy}.png';f=p/f'tile-{z}-{x0+dx}-{y0+dy}.png'
  if not f.exists():
   req=urllib.request.Request(url,headers={'User-Agent':'TravelBlogLocationMap/1.0 source attribution included'})
   f.write_bytes(urllib.request.urlopen(req,timeout=30).read())
  bg.paste(Image.open(f).convert('RGB'),(dx*256,dy*256))
# crop centered 550x630 then upscale actual cartographic map
left=cx*256-x0*256-275;top=cy*256-y0*256-315
bg=bg.crop((int(left),int(top),int(left)+550,int(top)+630)).resize((1100,1260))
im=Image.new('RGB',(1200,1560),'#f7f7f1');im.paste(bg,(50,180));d=ImageDraw.Draw(im)
def f(n):
 a=ImageFont.truetype(str(p/'NotoSansKR.ttf'),n);a.set_variation_by_axes([650]);return a
def text(x,y,s,n=38,c='#244d3c'):d.text((x,y),s,font=f(n),fill=c)
text(55,35,'문의에서 청남대까지',58);text(58,112,'무료 순환버스 · 출발 지역과 도착 위치',32)
points=[('문의문화유산단지',127.4937415,36.5085378),('청남대 정류장',127.490382,36.4622341)]
for i,(label,lon,lat) in enumerate(points):
 x,y=tile(lon,lat);x=50+2*((x-x0)*256-int(left));y=180+2*((y-y0)*256-int(top))
 d.ellipse((x-17,y-17,x+17,y+17),fill='#1c674a',outline='white',width=4)
 bx,by=x+28,y-58
 w=d.textlength(label,font=f(40));d.rounded_rectangle((bx-12,by-6,bx+w+12,by+60),12,fill='white',outline='#1c674a',width=2);text(bx,by,label,40)
 if i==0:text(bx,by+70,'단지 대표 위치',26)
text(55,1450,'위치 안내 지도 · 실제 승차는 현장 안내를 따르세요',29)
text(55,1497,'© OpenStreetMap contributors · ODbL · 2026.10.28',25,'#5e6864')
im.save(p/'06-location-map.png');im.resize((360,468)).save(p/'06-map-mobile.png')
p.joinpath('map-source.json').write_text(json.dumps({'date':'2026-10-28','map':'https://www.openstreetmap.org/copyright','tile_zoom':z,'points':points,'note':'단지 대표점은 실제 승차점 아님. 경로선/시간 추정 없음.'},ensure_ascii=False,indent=2))
print('map complete')
