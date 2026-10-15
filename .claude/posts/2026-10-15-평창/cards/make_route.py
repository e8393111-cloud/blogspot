from PIL import Image,ImageDraw,ImageFont
I=Image.new('RGB',(1080,1350),'#F7F8F3');d=ImageDraw.Draw(I)
import sys
font=sys.argv[1] # NotoSansKR variable font, weight axis
def f(n):
 ft=ImageFont.truetype(font,n);ft.set_variation_by_axes([550]);return ft
def text(x,y,s,n=38,c='#263C32',anchor=None):d.text((x,y),s,font=f(n),fill=c,anchor=anchor)
green='#37674D';gray='#748279'
text(76,62,'월정사 전나무숲길',55)
text(76,143,'주차장부터 걷는 순서',43)
text(76,212,'지점 연결을 보여주는 동선도 · 축척·방위 생략',29,gray)
d.line((76,275,1004,275),fill='#CED7CC',width=2)
# Path connections: diagram, not geographical placement
x=275
d.line((x,375,x,1035),fill=green,width=10)
d.line((x,548,760,548,760,670),fill=gray,width=6)
# forest trees beside the trail
for yy in [655,735,815,895]:
 for xx in [152,398]:
  d.line((xx,yy,xx,yy+48),fill='#71927B',width=4)
  d.polygon([(xx,yy-20),(xx-19,yy+20),(xx+19,yy+20)],fill='#B8CDB8')
for yy in [360,548,1045]:d.ellipse((x-15,yy-15,x+15,yy+15),fill=green)
text(322,328,'월정사 주차장',41)
text(322,386,'화장실 이용 후 출발',32,gray)
text(322,485,'금강교',43)
text(495,580,'선택: 경내 관람',31,gray)
d.ellipse((745,655,775,685),fill=gray)
text(615,704,'월정사 경내',39)
text(615,762,'적광전 앞',32)
text(615,808,'팔각구층석탑',34)
# path labels left/below, no unverified positions
text(76,1112,'금강교 ↔ 일주문',39)
text(76,1172,'편도 약 1km · 같은 숲길 왕복 약 2km',35,green)
text(322,992,'일주문',43)
text(455,935,'전나무숲길',32,green)
text(76,1237,'주차장 연결길·경내 관람 거리는 별도',30,gray)
text(76,1292,'자료: 평창군·한국관광공사 | 일상마녀 편집',25,gray)
I.save(sys.argv[2] if len(sys.argv)>2 else 'woljeongsa-route.png')
