T = int(input())


def dfs(depth):
    global max_price

    if depth >= exchange:
        max_price.add(int(''.join(numbers)))
        return

    for i in range(length):
        for j in range(i+1, length):
            if (numbers[i] == numbers[j]):
                dfs(depth+1)
            else:
                numbers[i], numbers[j] = numbers[j], numbers[i]
                dfs(depth+1)
                numbers[i], numbers[j] = numbers[j], numbers[i]


for t in range(1, T+1):
    numbers, exchange = input().split()
    numbers = list(numbers)
    length = len(numbers)
    exchange = length if int(exchange) > length else int(exchange)
    max_price = set()

    dfs(0)

    print('#{0} {1}'.format(t, max(max_price)))
