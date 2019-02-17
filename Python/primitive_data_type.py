from pprint import pprint

def test_list():
    li = ['1', '2', '3']
    print(li)
    
    li.append('4')
    print(li)
    
    li.extend(['5', '6'])
    print(li)

    li.insert(0, '0')
    print(li)

    li.remove('6')
    print(li)

    print(li.pop())       # list.pop([i])
    print(li)

    print(li.pop(0))
    print(li)

    print(li.index('3'))  # list.index(x[, start[, end]])

    print(li.index('3', 2, -1))

    print(li.count('2'))
    
    li.reverse()
    print(li)

    li.sort()
    print(li)
    
    li2 = [-1, 1, 66.25, 333, 333, 1234.5]
    del li2[0]
    print(li2)

    del li2[2:4]
    print(li2)

def test_deque():

    from collections import deque

    queue = deque(["Eric", "John", "Michael"])
    print(queue)

    queue.append("Terry")
    print(queue)

    print(queue.popleft())
    print(queue)

def test_list_comprehensions():
    li = [(x, y) 
          for x in [1, 2, 3] 
            for y in [3, 1, 4] 
                if x != y
         ]
    print(li)

    matrix = [
               [1, 2, 3, 4],
               [5, 6, 7, 8],
               [9, 10, 11, 12],
             ]
    transposed = [ 
      [row[i] 
       for row in matrix
      ] 
      for i in range(4)
    ]
    print(transposed)

def test_set():
    basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
    print(basket)

    print('orange' in basket)
    print('crabgrass' in basket)

    set_a = set('abracadabra')
    set_b = set('alacazam')
    print('a:', set_a)
    print('b:', set_b)
    print(set_a - set_b)
    print(set_a | set_b)
    print(set_a & set_b)
    print(set_a ^ set_b)

    # set comprehensions
    set_c = {x for x in 'abracadabra' if x not in 'abc'}
    print(set_c)

def test_dict():
    tel = {'jack': 4098, 'sape': 4139}
    tel['guido'] = 4127
    print(tel)
    
    del tel['sape']
    print(tel)

    print(list(tel))
    print(sorted(tel))

    print('guido' in tel)
    print('jack' not in tel)

    # dict comprehensions
    dict2 = {x: x**2 for x in (2, 4, 6)}
    print(dict2)

def test_looping():
    # loop through dict
    knights = {'gallahad': 'the pure', 'robin': 'the brave'}
    print(knights)
    for k, v in knights.items():
        print(k + ": " + v)

    # When looping through a sequence, the position index and corresponding value
    # can be retrieved at the same time using the enumerate() function.
    for i, v in enumerate(['tic', 'tac', 'toe']):
        print(i, v)

    # To loop over two or more sequences at the same time,
    # the entries can be paired with the zip() function.
    questions = ['name', 'quest', 'favorite color']
    answers = ['lancelot', 'the holy grail', 'blue']

    for q, a in zip(questions, answers):
        print('What is your {0}?  It is {1}.'.format(q, a))

    # To loop over a sequence in reverse, first specify the sequence in a forward direction
    # and then call the reversed() function.
    for i in reversed(range(1, 10, 2)):
        print(i)

    # To loop over a sequence in sorted order
    basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
    for f in sorted(set(basket)):
        print(f)
        
if __name__ == "__main__":
    # test_list()
    # test_deque()
    # test_list_comprehensions()
    # test_set()
    # test_dict()
    test_looping()
    pass
