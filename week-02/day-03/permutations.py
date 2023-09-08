import itertools
val=['0','1','2','3','4','5','6','7','8','9']
perm=itertools.permutations(val,4)
for i in perm:
    print(''.join(list(i)))