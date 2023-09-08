l=int(input("enter numbers"))
k=[]
for i in range(l):
    h=int(input("enter elements"))
    k+=[h]
print(k)
e=[]
o=[]
for i in k:
    if (i%2==0):
        i=k.index(i)
        e+=[i]
    else:
        m=k.index(i)
        o+=[m]
print(e)
print(o)

        

    
    