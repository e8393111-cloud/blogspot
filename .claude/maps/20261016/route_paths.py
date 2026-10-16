import xml.etree.ElementTree as E,math,json,heapq
for key,start,end in [('hamyang',(127.721893,35.52372669),(127.719395,35.524321)),('mungyeong',(128.076379,36.76314),(128.0752194,36.7684296))]:
 r=E.parse(key+'.osm').getroot();ns={n.get('id'):(float(n.get('lon')),float(n.get('lat'))) for n in r.findall('node')};g={}
 def dist(a,b):return math.hypot((a[0]-b[0])*90000,(a[1]-b[1])*111320)
 for w in r.findall('way'):
  t={z.get('k'):z.get('v') for z in w.findall('tag')}
  if t.get('highway') not in ['footway','pedestrian','path','steps']:continue
  ids=[n.get('ref') for n in w.findall('nd')]
  for a,b in zip(ids,ids[1:]):
   g.setdefault(a,[]).append((b,dist(ns[a],ns[b])));g.setdefault(b,[]).append((a,dist(ns[a],ns[b])))
 a=min(g,key=lambda n:dist(ns[n],start));b=min(g,key=lambda n:dist(ns[n],end));print(key,ns[a],ns[b],dist(ns[a],start),dist(ns[b],end))
 q=[(0,a)];ds={a:0};prev={}
 while q:
  cost,n=heapq.heappop(q)
  if n==b:break
  if cost!=ds[n]:continue
  for to,w in g[n]:
   nd=cost+w
   if nd<ds.get(to,1e20):ds[to]=nd;prev[to]=n;heapq.heappush(q,(nd,to))
 path=[b]
 while path[-1]!=a:path.append(prev[path[-1]])
 path.reverse();json.dump([ns[n] for n in path],open(key+'-route.json','w'));print('nodes',len(path))
