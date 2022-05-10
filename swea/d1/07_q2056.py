T = int(input())
for test_case in range(1, T + 1):
    date = input()
    month = int(date[4:6])
    day = int(date[6:])
    invalid = 0

    thirty = [4, 6, 7, 11]

    if month < 1 or month > 12:
        invalid = 1
    elif month in thirty:
        if day < 1 or day > 30:
            invalid = 1
    elif month == 2:
        if day < 1 or day > 28:
            invalid = 1
    else:
        if day < 1 or day > 31:
            invalid = 1

    if invalid:
        print('#{0} -1'.format(test_case))
    else:
        print('#{0} {1}/{2}/{3}'.format(test_case,
              date[:4], date[4:6], date[6:]))
