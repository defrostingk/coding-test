rcp = list(map(int, input().split()))
scissors = 1
rock = 2
paper = 3
if rcp[0] == scissors:
    if rcp[1] == rock:
        winner = 'B'
    else:
        winner = 'A'
elif rcp[0] == rock:
    if rcp[1] == scissors:
        winner = 'A'
    else:
        winner = 'B'
elif rcp[0] == paper:
    if rcp[1] == scissors:
        winner = 'B'
    else:
        winner = 'A'

print(winner)
