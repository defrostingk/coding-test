T = int(input())


def dfs(start, cnt):
    global visited
    global max_cnt

    max_cnt = max(max_cnt, cnt)

    for node in adj_list[start]:
        if visited[node] == 0:
            visited[node] = 1
            dfs(node, cnt+1)
            visited[node] = 0


for t in range(1, T+1):
    n, m = list(map(int, input().split()))
    edges = []
    for _ in range(m):
        edges.append(list(map(int, input().split())))

    adj_list = [[] for i in range(n + 1)]

    for start, end in edges:
        adj_list[start].append(end)
        adj_list[end].append(start)

    visited = [0] * (n+1)
    max_cnt = 1

    for i in range(1, n+1):
        dfs(i, 0)

    print('#{0} {1}'.format(t, max_cnt))
