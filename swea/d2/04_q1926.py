n = int(input())

for num in range(1, n + 1):
    num_str = str(num)
    if '3' in num_str or '6' in num_str or '9' in num_str:
        for digit in range(len(num_str)):
            if num_str[digit] == '3' or num_str[digit] == '6' or num_str[digit] == '9':
                print('-', end='')
    else:
        print(num_str, end='')
    print(' ', end='')
