def bubble_sort(li):
    n = len(li)
    for i in range(n):
        for j in range(1, n - i):
            if li[j-1] > li[j]:
                li[j-1], li[j] = li[j], li[j-1]
    return li

def merge(li_left, li_right):
    l, r = 0, 0
    li_res = []
    while l < len(li_left) and r < len(li_right):
        if li_left[l] < li_right[r]:
            li_res.append(li_left[l])
            l += 1
        else:
            li_res.append(li_right[r])
            r += 1
    li_res += li_left[l:]
    li_res += li_right[r:]
    return li_res

def merge_sort(li):
    if len(li) < 2:
        return li
    else:
        index = int(len(li) / 2)
        li_left = merge_sort(li[:index])
        li_right = merge_sort(li[index:])
        return merge(li_left, li_right)

def quick_sort(li):
    start = 0
    end = len(li) - 1
    return qsort(li, start, end)

# [ 3,  0,  4,  2,  1,  7,  5,  8 ]
# start                        end
# pivot
#   i   j
def qsort(li, start, end):
    # if len(list) == 1 return itself
    if start >= end:
        return li

    # pick the first element as pivot
    # move all values larger than it in front, and all values lower than it behind
    # i marks the index where all values in front of it is less than or equal to pivot
    # j traverse the list and move values less than pivot in front
    i = start
    for j in range(start + 1, end + 1):
        if li[j] < li[start]:
            i += 1
            li[j], li[i] = li[i], li[j] 
    li[start], li[i] = li[i], li[start]  # swap pivot and the last element less than pivot

    # recusively pick pivots and sort the subarray until the whole list is sorted
    qsort(li, start, i - 1)
    qsort(li, i + 1, end)

    return li

if __name__ == "__main__":
    li = [1, 3, 4, 2, 5, 7, 8, 0]
    # li2 = bubble_sort(li)
    # li2 = merge_sort(li)
    li2 = quick_sort(li)
    print(li)
    print(li2)
