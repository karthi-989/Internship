import itertools

l = ['a', 'b', 'c', 'd', 'e']

for i in range(len(l)):
    com_set = itertools.combinations(l, i + 1)
    for j in com_set:
        print(j)
