def fibo(i):
    if i <= 1:  
       return i 
    else:  
       return(fibo(i-1) +(i-2))
nterms=int(input("enter a number"))
print("Fibonacci sequence:")  
for i in range(nterms):
    print(fibo(i),end=",")  