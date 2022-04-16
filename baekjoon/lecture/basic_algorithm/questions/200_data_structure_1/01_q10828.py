from sys import stdin

stdin =  open("/mnt/repository/coding-test/baekjoon/lecture/basic_algorithm/questions/input.txt", "r");
next(stdin)

stack = []
for line in stdin:
    command = line.split()

    if command[0] == 'push':
        stack.append(command[1])

    elif command[0] == 'pop':
        if stack:
            print(stack.pop())
        else:
            print(-1)
    
    elif command[0] == 'size':
        print(len(stack))
    
    elif command[0] == 'empty':
        if stack:
            print(0)
        else:
            print(1)
    
    elif command[0] == 'top':
        if stack:
            print(stack[-1])
        else:
            print(-1)