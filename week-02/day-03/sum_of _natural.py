def natural(x):
    if x<=1:
        return x
    return x + natural (x-1)
result=natural(int(input("enter a number")))
print(result)