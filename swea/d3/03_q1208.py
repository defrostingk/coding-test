for t in range(1, 11):
    dump = int(input())
    boxes = list(map(int, input().split()))
    sum_boxes = sum(boxes)
    answer = -1

    for _ in range(dump):
        max_boxes = 0
        max_idx = -1
        min_boxes = 101
        min_idx = -1
        for idx in range(0, 100):
            if max_boxes < boxes[idx]:
                max_boxes = boxes[idx]
                max_idx = idx
            if min_boxes > boxes[idx]:
                min_boxes = boxes[idx]
                min_idx = idx
        if sum_boxes % 100:
            if max_boxes - min_boxes == 1:
                answer = 1
                break
        else:
            if max_boxes - min_boxes == 0:
                answer = 0
                break
        boxes[max_idx] -= 1
        boxes[min_idx] += 1

    answer = max(boxes)-min(boxes) if answer == -1 else answer

    print('#{0} {1}'.format(t, answer))
