def test_grep():
    x = cor_grep('hello')
    # Sent values are returned by '(yield)'
    x.send('aaa')
    x.send('bbb')
    x.send('ccc')
    x.send('hello human') 
    x.send('Hello World')


def coroutine(func):
    # All coroutines must be "primed" by first calling .next() or send(None)
    def start(*args, **kwargs):
        cr = func(*args, **kwargs)
        cr.next()
        return cr
    return start

@coroutine
def cor_grep(pattern):
    # looking for 'pattern'
    while True:
        line = (yield)
        if pattern in line:
            print(line)

if __name__ == "__main__":
    test_grep()
