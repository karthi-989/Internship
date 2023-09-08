l=int(input("enter a number"))
e=[]
o=[]
for i in range(1,l+1):
    if (i%2==0):
        e.append(i)
    else:
        o.append(i)
print(e)
print(o)