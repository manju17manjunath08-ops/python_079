marks=int(input("enter your marks"))
if marks>=100 or marks<0:
    print("Invalid marks")
elif marks>=90 and marks<=100:
    print("A Grade")
elif marks>=80:
    print("B Grade")
elif marks>=70:
    print("C Grade")

