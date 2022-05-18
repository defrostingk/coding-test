T = int(input())
for t in range(1, T+1):
    n, m = list(map(int, input().split()))
    flies = []
    death = []
    for i in range(0, n):
        row = list(map(int, input().split()))
        flies.append(row)
    for y in range(0, n - m + 1):
        for x in range(0, n - m + 1):
            flies_sum = 0
            for j in range(0, m):
                for i in range(0, m):
                    flies_sum += flies[y+j][x+i]
            death.append(flies_sum)
    print('#{0} {1}'.format(t, max(death)))
