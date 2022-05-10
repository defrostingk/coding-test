num = int(input())
for i in range(1, num+1):
    if not(num % i):
        print(i, end=' ')
