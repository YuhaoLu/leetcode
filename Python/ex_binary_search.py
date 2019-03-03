# binary search the val in an increasing order sorted list
def binary_search(li_data, val):
    low = 0
    high = len(li_data) - 1
    while low <= high:
        mid = int((low + high) / 2)
        if(li_data[mid] == val):
            return mid
        elif(li_data[mid] < val):
            low = mid + 1
        else:
            high = mid - 1
    return -1

def test_binary_search():
    li_data = [1,3,4,5,7,11,13,22,37]
    index = binary_search(li_data, 22)
    print(index)

if __name__ == "__main__":
    test_binary_search()
