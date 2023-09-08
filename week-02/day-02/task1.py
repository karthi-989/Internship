l=int(input("enter a number"))
o=len(str(l))
sum=0
temp=l
while temp>0:
    d=temp%10
    sum+=d**o
    temp//=10
if (l==sum):
    print(l," is armstrongnumber")
else:
    print(l,"is not an armstrongnumber ")


