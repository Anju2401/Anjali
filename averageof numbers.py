'''a=[]
x=int(input("Entered the number of elements to be inserted:"))
for i in range(x):
    y=int(input("Enter element:"))
    a.append(y)
avg=sum(a)/x
print("Average elements of the list is:",avg)'''

'''import re
string="anjali"
a=re.findall('a',string)
for i in a:
    result=a.count(i)
print("In above string 'A's are reapted times is:",result)'''

import re
string="employee"
a=re.findall('e',string)
result={i:a.count(i) for i in a}
print("In above string E's are reapted times is:",result)