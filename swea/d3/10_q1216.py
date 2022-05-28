for _ in range(10):
    t = int(input())
    board = []
    for _ in range(100):
        board.append(input())

    max_length = 0
    for length in range(1, 101):
        for y in range(0, 101 - length):
            for x in range(0, 101 - length):
                palindrome = board[y][x:x+length]
                if palindrome == palindrome[::-1]:
                    max_length = len(palindrome)

        for x in range(0, 101 - length):
            for y in range(0, 101 - length):
                palindrome = ''
                for j in range(length):
                    palindrome += board[y+j][x]
                if palindrome == palindrome[::-1]:
                    max_length = len(palindrome)

    print('#{0} {1}'.format(t, max_length))
