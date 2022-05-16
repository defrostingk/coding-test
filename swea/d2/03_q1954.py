T = int(input())

for t in range(1, T+1):
    size = int(input())
    matrix = [[0]*size for i in range(size)]
    x = 0
    y = 0
    number = 1
    depth = 0
    while number <= size * size:
        while x < size - depth:
            matrix[y][x] = number
            x += 1
            number += 1
            if number > size * size:
                break
        y += 1
        x -= 1
        while y < size - depth:
            matrix[y][x] = number
            y += 1
            number += 1
            if number > size * size:
                break
        x -= 1
        y -= 1
        while x >= 0 + depth:
            matrix[y][x] = number
            x -= 1
            number += 1
            if number > size * size:
                break
        x += 1
        y -= 1
        depth += 1
        while y >= 0 + depth:
            matrix[y][x] = number
            y -= 1
            number += 1
            if number > size * size:
                break
        y += 1
        x += 1

    print('#{0}'.format(t))
    for row in range(0, size):
        for column in range(0, size):
            print(matrix[row][column], end=' ')
        print()
