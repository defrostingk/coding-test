T = int(input())
for t in range(1, T+1):
    puzzle = [list(map(int, input().split())) for _ in range(0, 9)]
    exist = 0

    for y in range(0, 9):
        if exist == 1:
            break
        check = [0]*10
        for x in range(0, 9):
            if check[puzzle[y][x]] == 1:
                exist = 1
                break
            else:
                check[puzzle[y][x]] = 1

    if exist == 0:
        for x in range(0, 9):
            if exist == 1:
                break
            check = [0]*10
            for y in range(0, 9):
                if check[puzzle[y][x]] == 1:
                    exist = 1
                    break
                else:
                    check[puzzle[y][x]] = 1

    if exist == 0:
        for y in range(0, 9, 3):
            for x in range(0, 9, 3):
                if exist == 1:
                    break
                check = [0]*10
                for j in range(0, 3):
                    for i in range(0, 3):
                        if check[puzzle[y+j][x+i]] == 1:
                            exist = 1
                            break
                        else:
                            check[puzzle[y+j][x+i]] = 1

    correct = 1 - exist
    print('#{0} {1}'.format(t, correct))
