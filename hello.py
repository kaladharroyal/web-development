#1.a
print("hello world")

#1.b
a = 10
b = "sai"
c = True
l = [1,2,3,4,5,6]
print(f"{a} {b} {c} {l}")

#1.c
def add(*nums):
    total = 0
    for n in nums:
        total += n
    return total

print(add(1, 2))          # 3
print(add(10, 20, 30))    # 60
print(add())              # 0


# 2.a
base = 10
height = 20
area = 0.5*base*height
print(f"The area is {area}")


# 2.b
def fun():
    print("this is function.")
fun()

#2.c
for i in range(1,11):
    print(i)

# 3.a


# 3.b

s1 = "Guru"
s2 = "sai"
print(s1+s2)

# 3.c



# 5.a
s = 10
p = 20

if s>p:
    print("S is greater than p.B")
for i in range(1,11):
    print(i) 
    







