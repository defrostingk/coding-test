from sys import stdin

stdin = open('/mnt/repository/coding-test/swea/input.txt', 'r')

next(stdin)

for idx, line in enumerate(stdin):
    nums = list(map(int, line.split()))
    average = 0
    for num in nums:
        average += float(num)
    average /= len(nums)
    average = int(round(average))

    print('#{0} {1}'.format(idx+1, average))
