
import heapq

def test_heapq():
    heap_min = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    heapq.heapify(heap_min)
    print(heap_min)

    print(heap_min[0])

    print("\n# heappop")
    elem_min = heapq.heappop(heap_min)
    print(elem_min)
    print(heap_min)

    print("\n# heappush")
    heapq.heappush(heap_min, 1)
    print(heap_min)

    print("\n# heapreplace")
    elem_min = heapq.heapreplace(heap_min, 0)
    print(elem_min)
    print(heap_min)

    print("\n# heappushpop")
    elem_min = heapq.heappushpop(heap_min, -1)
    print(elem_min)
    print(heap_min)

if __name__ == "__main__":
    test_heapq()
