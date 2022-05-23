T = int(input())
for t in range(1, T+1):
    n = int(input())
    half = n // 2
    farm = []
    for _ in range(n):
        farm.append(input())

    profit = 0
    for idx, row in enumerate(farm):
        profit += int(row[half])
        if idx <= half:
            for i in range(1, idx + 1):
                profit += int(row[half - i])
                profit += int(row[half + i])
        else:
            for i in range(1, n - idx):
                profit += int(row[half - i])
                profit += int(row[half + i])

    print('#{0} {1}'.format(t, profit))
