T = 10
for t in range(1, T+1):
    width = int(input())
    buildings = list(map(int, input().split()))
    house = 0

    for idx in range(2, width-2):
        current_building = buildings[idx]
        near_buildings = [buildings[idx-2], buildings[idx-1],
                          buildings[idx+1], buildings[idx+2]]
        highest = max(near_buildings)
        current_houses = current_building - highest if current_building > highest else 0
        house += current_houses

    print('#{0} {1}'.format(t, house))
