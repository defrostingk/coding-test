T = 10
for _ in range(T):
    t = int(input())
    array = [list(map(int, input().split())) for row in range(100)]
    max_sum = 0

    for y in range(100):
        max_sum = max(max_sum, sum(array[y]))

    for x in range(100):
        col_sum = 0
        for y in range(100):
            col_sum += array[y][x]
        max_sum = max(max_sum, col_sum)

    diagonal_left_to_right = 0
    diagonal_right_to_left = 0
    for i in range(100):
        diagonal_left_to_right += array[i][i]
        diagonal_right_to_left += array[99 - i][i]

    max_sum = max(max_sum, diagonal_left_to_right, diagonal_right_to_left)

    print('#{0} {1}'.format(t, max_sum))
