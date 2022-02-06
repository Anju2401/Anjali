'''n=int(input("Enter a number:"))
fact=1
for i in range(2,n):
    fact=fact*i
print(fact)'''

import re
s=input("Enter your mobile number:")
b=re.fullmatch('[6-7][0-9]{9}',s)
if b:
    print("mobile number is valid")
else:
    print("mobile number is invalid")






