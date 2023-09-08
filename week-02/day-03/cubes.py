
def cube():
    cube_nums = list(map(lambda x: x ** 3,result))
    return cube_nums
def numbers():
    num=[]
    l=int(input("enter number of elements"))
    for i in range(l):
        a = int(input("enter elemets"))
        num.append(a)
    return num
result=numbers()
print(result)
cubes=cube()
print(cubes)

    
