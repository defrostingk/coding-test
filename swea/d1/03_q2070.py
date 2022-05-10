from sys import stdin

stdin = open('/mnt/repository/coding-test/swea/input.txt', 'r')

# T = int(input())
# for test_case in range(1, T + 1):
#     nums = list(map(int, input().split()))
#     if nums[0] > nums[1]:
#         equality = '>'
#     elif nums[0] < nums[1]:
#         equality = '<'
#     else:
#         equality = '='
#     print('#{0} {1}'.format(test_case, equality))

next(stdin)
for idx, line in enumerate(stdin):
    nums = list(map(int, line.split()))
    if nums[0] > nums[1]:
        equality = '>'
    elif nums[0] < nums[1]:
        equality = '<'
    else:
        equality = '='
    print('#{0} {1}'.format(idx+1, equality))
