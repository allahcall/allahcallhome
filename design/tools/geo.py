import math
def pt(r,a,c=(0,0)): return (c[0]+r*math.cos(a), c[1]+r*math.sin(a))
def f(p): return f"{p[0]:.2f} {p[1]:.2f}"
def star(n,k,r,rot=-math.pi/2,c=(0,0)):
    # star polygon {n/k}; returns path (may be multiple components)
    import math as m
    g=m.gcd(n,k); out=[]
    for s in range(g):
        idx=s; pts=[]
        for _ in range(n//g):
            pts.append(pt(r,rot+2*m.pi*idx/n,c)); idx=(idx+k)%n
        out.append("M"+" L".join(f(p) for p in pts)+"Z")
    return "".join(out)
def poly(n,r,rot=-math.pi/2,c=(0,0)):
    return "M"+" L".join(f(pt(r,rot+2*math.pi*i/n,c)) for i in range(n))+"Z"
# Rosette, 200 radius, centered at 0
R=[]
R.append(f'<circle r="200"/><circle r="186"/>')
R.append(f'<path d="{star(16,6,186)}"/>')
R.append(f'<path d="{star(16,4,186, rot=-math.pi/2+math.pi/16)}"/>')
R.append(f'<circle r="96"/>')
R.append(f'<path d="{star(8,3,96)}"/>')
R.append(f'<path d="{poly(8,40, rot=-math.pi/2+math.pi/8)}"/>')
R.append(f'<circle r="14"/>')
# radial spokes from r=96 to 186 at 16 positions
sp="".join(f"M{f(pt(96,-math.pi/2+2*math.pi*i/16))} L{f(pt(186,-math.pi/2+2*math.pi*i/16))}" for i in range(16))
R.append(f'<path d="{sp}" opacity=".5"/>')
open('rosette.svgfrag','w').write("\n".join(R))
# Tile: 8/3 star in 100 tile with connecting lines to edges -> continuous lattice
s=star(8,3,50,rot=-math.pi/2+math.pi/8,c=(50,50))
# connect star outer points to tile edge midpoints / corners
conn=""
for i in range(8):
    a=-math.pi/2+math.pi/8+2*math.pi*i/8
    p=pt(50,a,(50,50))
    conn+=f"M{f(p)} L{f(pt(50/ math.cos(math.pi/8)*1.0,a,(50,50)))}"
tile=f'<path d="{s}"/><path d="{poly(8,22,rot=-math.pi/2+math.pi/8,c=(50,50))}"/>'
open('tile.svgfrag','w').write(tile)
print(len("\n".join(R)), len(tile))
