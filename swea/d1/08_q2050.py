alphabets = input()

for i in range(0, len(alphabets)):
    print(ord(alphabets[i]) - 64, end=' ')
