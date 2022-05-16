table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

T = int(input())
for t in range(1, T+1):
    encoded = str(input())
    string = []
    buffer = ''
    decoded = ''
    for code in encoded:
        string.append(code)
        if len(string) == 4:
            tmpList = []
            for alpha in string:
                tmpList.append(format(table.find(alpha), 'b'))
            for tmp in tmpList:
                tmp_length = len(tmp)
                for padding in range(0, 6 - tmp_length):
                    tmp = '0' + tmp
                buffer += tmp
            string = []
            decoding = ''
            for bit in buffer:
                decoding += bit
                if len(decoding) == 8:
                    decoded += chr(int(decoding, 2))
                    decoding = ''
            buffer = ''
    print('#{0} {1}'.format(t, decoded))
