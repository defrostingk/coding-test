T = int(input())

for t in range(1, T+1):
    days = int(input())
    prices = list(map(int, input().split()))
    profit = 0
    max_price = prices[-1]
    for day in range(days - 2, -1, -1):
        if max_price < prices[day]:
            max_price = prices[day]
        else:
            profit += max_price - prices[day]

    print('#{0} {1}'.format(t, profit))
