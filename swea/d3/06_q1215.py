T = 10
for t in range(1, T+1):
    length = int(input())
    board = []
    for _ in range(8):
        board.append(input())

    if length == 1:
        print('#{0} {1}'.format(t, 64))
        break

    cnt = 0
    for j in range(0, 8):
        for i in range(0, 8 - length + 1):
            found = 1
            for k in range(length//2):
                if board[j][i + k] != board[j][i + length - 1 - k]:
                    found = 0
            if found == 1:
                cnt += 1

    for j in range(0, 8 - length + 1):
        for i in range(0, 8):
            found = 1
            for k in range(length//2):
                if board[j + k][i] != board[j + length - 1 - k][i]:
                    found = 0
            if found == 1:
                cnt += 1

    print('#{0} {1}'.format(t, cnt))
