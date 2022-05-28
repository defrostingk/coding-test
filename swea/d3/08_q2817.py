T = int(input())

def dfs(start, part_sum):
    global cnt
    global visited
    if part_sum == k:
        cnt += 1
        return
    for i in range(start, n):
        if visited[i] == 0:
            visited[i] = 1
            dfs(i, part_sum + sequence[i])
            visited[i] = 0
    
for t in range(1, T+1):
    n, k = list(map(int,input().split()))
    sequence = list(map(int,input().split()))
    cnt = 0
    visited = [0]*n
    dfs(0, 0)

    print('#{0} {1}'.format(t, cnt))