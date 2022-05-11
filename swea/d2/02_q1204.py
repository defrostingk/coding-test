T = int(input())

for test_case in range(1, T+1):
    t = int(input())
    scores = list(map(int, input().split()))
    modes = [0] * 101

    for score in scores:
        modes[score] += 1

    max_mode = max(modes)

    for score, mode in enumerate(reversed(modes)):
        if max_mode == mode:
            print('#{0} {1}'.format(t, 100 - score))
            break
