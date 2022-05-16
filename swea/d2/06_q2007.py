T = int(input())

for t in range(1, T+1):
    string = input()
    for length in range(1, 11):
        if string[:length] == string[length:length*2]:
            print('#{0} {1}'.format(t, length))
            break
