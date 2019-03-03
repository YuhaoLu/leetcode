class BinHeap(object):
    def __init__(self, mode='min', li=None):
        if mode.lower() not in ['min', 'max']:
            raise ValueError("Not a valid mode: {}".format(mode))
        self.mode = mode

        self.li_heap = []
        if li is not None:
            self.li_heap = li

    def __repr__(self):
        return ""
    
    def __str__(self):
        return ""

    def peek(self):
        if len(self.li_heap) == 0:
            return None
        else:
            return self.li_heap[0]
    
    def extract(self):
        pass

    def insert(self, val):
        index = len(self.li_heap)

        self.li_heap.append(val)

        # percolate_up(heap[index])
        while (index - 1):
            pass
    

    def heapify(self, index):
        """ Also know as percolate_down()
            Correct a single violation of the heap property in a subtree at its root

            Assume that the subtrees rooted at left(i) and right(i) are heaps.
            If element heap[i] violates the heap property, 
            correct violation by "trickling" element heap[i] down the tree,
            making the subtree rooted at index i a heap.
        """
        l = index * 2 + 1
        r = index * 2 + 2
        heap_size = len(self.li_heap)
        # if left(i) or right(i) are larger than 
        
        pass
    def percolate_up(self, index):
        pass
        
    def change_key(self, index, val):
        pass

def heap_sort():
    pass

def test_heap():
    min_heap = BinHeap()
    max_heap = BinHeap('max')
    print(min_heap)

if __name__ == "__main__":
    # test_heap()
    pass
