num = int(input("enter a number:"))
for i in range(1,21):
    print(num,"X",i,"=",num * i)
    num = "i"
for i in range(1,21):
    print(i)
    
total = 0
for i in range(1,11):
    total += i
    print("Sum =", total)
    num = 0
    for i in range(1,51):
        if i % 2 == 0:
            print(i,end=" ")
            
