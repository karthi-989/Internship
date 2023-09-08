l=int(input('enter a number'))
r=0
while l!=0:
    k=l%10
    r=r*10+k
    l//=10
print(r)

