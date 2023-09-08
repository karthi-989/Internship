myDict = {'karthik': 10, 'ravindra': 9,
		'charn': 15, 'pavan': 2, 'kyarthi': 32}

myKeys = list(myDict.keys())
myKeys.sort()
sorted_dict = {i: myDict[i] for i in myKeys}

print(sorted_dict)
