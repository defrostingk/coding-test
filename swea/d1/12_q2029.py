test_cases = int(input())

for t in range(1, test_cases + 1):
    nums = list(map(int, input().split()))
    print('#{0} {1} {2}'.format(t, nums[0]//nums[1], nums[0] % nums[1]))
