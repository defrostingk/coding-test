T = int(input())

for t in range(1, T+1):
    n = int(input())
    pascal = []
    print('#{0}'.format(t))
    for i in range(0, n):
        row = []
        if i == 0:
            row = [1]
        elif i == 1:
            row = [1, 1]
        else:
            row = [1]
            for j in range(0, i - 1):
                row.append(pascal[i-1][j] + pascal[i-1][j+1])
            row.append(1)
        pascal.append(row)
        for k in row:
            print(k, end=' ')
        print()
