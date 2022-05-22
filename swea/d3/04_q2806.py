T = int(input())


def isAvailable(x):
    for i in range(x):
        if rows[x] == rows[i]:
            return False
        if abs(rows[x] - rows[i]) == x - i:
            return False
    return True


def dfs(idx):
    global cnt
    global rows
    if idx >= n:
        cnt += 1
        return

    for i in range(n):
        rows[idx] = i
        if isAvailable(idx):
            dfs(idx+1)
        rows[idx] = 0


for t in range(1, T+1):
    n = int(input())
    rows = [-1]*n
    cnt = 0

    dfs(0)

    print('#{0} {1}'.format(t, cnt))
