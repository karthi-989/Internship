L = []
while True:
    try:
        num = input("Enter a number: ")
        if num == 'done':
            break
        n = int(num)
        L.append(n)
        largest = max(L)
        smallest = min(L)
    except:
        print("Invalid input")
        continue

print("Maximum is", largest)
print("Minimum is", smallest)
