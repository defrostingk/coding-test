import sys

sys.stdin = open("/mnt/repository/coding-test/questions/input.txt", "r")

data_num = int(sys.stdin.readline())
cnt_li = [0] * 10000

for i in range(data_num):
    cnt_li[int(sys.stdin.readline()) - 1] += 1

for i in range(10000):
    if cnt_li[i]:
        for j in range(cnt_li[i]):
            print(i + 1)