import sys

sys.stdin = open("/mnt/repository/coding-test/baekjoon/lecture/basic-algorithm/questions/input.txt", "r")

input = sys.stdin.readline().split(" ")
e = int(input[0])
s = int(input[1])
m = int(input[2])

year = 1

while ((year-e) % 15 != 0) | ((year-s) % 28 != 0) | ((year-m) % 19 != 0) :
    year += 1

print(year)