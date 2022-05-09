from sys import stdin

stdin = open('/mnt/repository/coding-test/swea/input.txt', 'r')

input = []
next(stdin)
for line in stdin:
    input.append(list(map(int, line.split())))


def getOddSum(idx, num_list):
    sum = 0
    for num in num_list:
        if num % 2:
            sum += num
    print('#{0} {1}'.format(idx + 1, sum))


for idx, num_list in enumerate(input):
    getOddSum(idx, num_list)
