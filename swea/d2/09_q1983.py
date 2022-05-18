T = int(input())
grades = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']
for t in range(1, T+1):
    n, k = list(map(int, input().split()))
    grade_range = int(n/10)
    total_scores = []
    for i in range(0, n):
        student_scores = list(map(int, input().split()))
        student_total_score = student_scores[0] * 0.35 + \
            student_scores[1] * 0.45 + student_scores[2] * 0.2
        total_scores.append(student_total_score)
    k_score = total_scores[k-1]
    total_scores.sort(reverse=True)
    ranking = total_scores.index(k_score)
    print('#{0} {1}'.format(t, grades[ranking//grade_range]))
