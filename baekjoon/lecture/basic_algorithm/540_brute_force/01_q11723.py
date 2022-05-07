import sys

sys.stdin = open("/mnt/repository/coding-test/baekjoon/lecture/basic_algorithm/questions/input.txt", "r")

def command_processor() :
    m = int(sys.stdin.readline().strip())
    s = 0b0

    for _ in range(m):
        command = sys.stdin.readline().strip()

        try:
            op, x = command.split()
            x = int(x) - 1
            if op == 'add':
                s = s | (0b1<<x)
            elif op == 'remove':
                s = s & ~(0b1<<x)
            elif op == 'check':
                if (s & (0b1<<x)):
                    print(1)
                else:
                    print(0)
            elif op == 'toggle':
                s = s ^ (0b1<<x)
        except:
            if command == 'all':
                s = 0b11111111111111111111
            elif command == 'empty':
                s = 0b0

command_processor()