income=int(input("enter tax on amount"))
if  (income<30000):
    print("no tax")
elif (income>300000 and income<50000):
    tax=income*0.7
    print(tax)
elif (income>50000 and income<70000):
    tax=income*0.8
    print(tax)
else:print("eneter a positive number")