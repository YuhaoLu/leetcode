from pprint import pprint

def test_str_format():
    # format()
    print('We are the {} who say "{}!"'.format('knights', 'Ni'))

    print('{1} and {0}'.format('spam', 'eggs'))

    print('This {food} is {adjective}.'.format(food='spam', adjective='absolutely horrible'))

    # If you have a really long format string that you don't want to split up, 
    # it would be nice if you could reference the variables to be formatted by name 
    # instead of by position.
    table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
    print('Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; '
          'Dcab: {0[Dcab]:d}'.format(table))
    print('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table))

    # format columns
    for x in range(1, 11):
        print('{0:2d} {1:3d} {2:4d}'.format(x, x**2, x**3))
    
    for x in range(1, 11):
        # .rjust() 
        # right-justifies a string in a field of a given width by padding it with spaces on the left.
        # if the input string is too long, they don't truncate it, but return it unchanged
        print(repr(x).rjust(2), repr(x**2).rjust(3), end=' ') # Note use of 'end'
        print(repr(x**3).rjust(4))
    
    # zfill()
    print('12'.zfill(5))
    print('-3.14'.zfill(7))


def read_file(fin):
    li_lines = []
    for str_line in fin:
        li_lines.append(str_line[:-1])
        
    return li_lines


def split_line(str_line, str_separators):
    if str_separators != '':
        trantab = str.maketrans(str_separators, ' ' * len(str_separators))
        str_line = str_line.translate(trantab)

    return str_line.strip().split()


def write_file(fout, li_lines):
    for str_line in li_lines:
        str_line = str_line.rstrip() + '\n'
        fout.write(str_line)

def test_rw_files():
    with open('input.txt') as fin:
        li_lines = read_file(fin)
    with open('output.txt', 'w') as fout:
        write_file(fout, li_lines)


if __name__ == "__main__":
    # test_str_format()
    test_rw_files()
    pass
