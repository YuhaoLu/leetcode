class LNode(object):
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None

    def __repr__(self):
        return "{{'val': {}, 'prev': {}, 'next': {}}}" \
            .format(self.val, hex(id(self.prev)), hex(id(self.next)))

    def __str__(self):
        return str(self.val)


class LinkedList(object):
    def __init__(self):
        self.anchor = LNode(None)
        self.num_nodes = 0

    def __len__(self):
        return self.num_nodes

    def __repr__(self):
        s = "anchor: {} {}\n".format(hex(id(self.anchor)), repr(self.anchor))
        node = self.get_head()
        while node is not None:
            s += "node:   {} {}\n".format(hex(id(node)), repr(node))
            node = self.get_next(node)
        return s

    def __str__(self):
        s = ""
        node = self.get_head()
        while node is not None:
            s += "{}\n".format(str(node))
            node = self.get_next(node)
        return s

    def get_head(self):
        return self.anchor.next

    def get_tail(self):
        return self.anchor.prev

    def get_next(self, node):
        if node.next is self.anchor:
            return None
        else:
            return node.next

    def get_prev(self, node):
        if node.prev is self.anchor:
            return None
        else:
            return node.prev

    def append(self, elem):
        node = LNode(elem)

        tail = self.get_tail()
        if tail == None:
            tail = self.anchor

        tail.next = node
        node.prev = tail
        node.next = self.anchor
        self.anchor.prev = node

        self.num_nodes += 1

    def prepend(self, elem):
        node = LNode(elem)

        head = self.get_head()
        if head == None:
            head = self.anchor

        self.anchor.next = node
        node.prev = self.anchor
        node.next = head
        head.prev = node

        self.num_nodes += 1

    def insert_before(self, node, elem):
        node_prev = node.prev
        node_mid = LNode(elem)
        node_prev.next = node_mid
        node_mid.prev = node_prev
        node_mid.next = node
        node.prev = node_mid

        self.num_nodes += 1

    def insert_after(self, node, elem):
        node_next = node.next
        node_mid = LNode(elem)
        node.next = node_mid
        node_mid.prev = node
        node_mid.next = node_next
        node_next.prev = node_mid

        self.num_nodes += 1

    def unlink(self, node):
        self.num_nodes -= 1

        node_prev = node.prev
        node_next = node.next
        if node_prev == node_next == self.anchor:
            node_prev.next = None
            node_next.prev = None
        else:
            node_prev.next = node_next
            node_next.prev = node_prev
        del node

    def unlink_all(self):
        node = self.get_head()
        node_next = None
        while node is not None:
            node_next = self.get_next(node)
            self.unlink(node)
            node = node_next

    def find(self, elem):
        node = self.get_head()
        while node is not None:
            if node.val == elem:
                return node
            node = self.get_next(node)
        return None
    
    def traverse(self, func):
        node = self.get_head()
        while node is not None:
            func(node.val)
            node = self.get_next(node)


def f(x):
    print(x, )

def test_LinkedList():
    # Create Linked List
    linked_li = LinkedList()
    linked_li.append(1)
    linked_li.append(2)
    linked_li.append(3)
    print(linked_li)
    
    print(linked_li.traverse(f))

    # test prepend(), append()
    linked_li.prepend(0)
    linked_li.append(4)
    print(linked_li)

    # test get_head(), get_tail(), get_prev(), get_next()
    node_head = linked_li.get_head()
    node_tail = linked_li.get_tail()
    node_1 = linked_li.get_prev(node_head)
    node_2 = linked_li.get_next(node_head)
    print(node_head)
    print(node_tail)
    print(node_1)
    print(node_2, '\n')
    
    # test insert_before(), insert_after()
    node_a = LNode('a')
    node_b = LNode('b')
    linked_li.insert_before(node_2, node_b)
    linked_li.insert_after(node_2, node_a)
    print(linked_li)

    node_3 = linked_li.find(3)
    print(repr(node_3))
    linked_li.unlink(node_3)
    print(linked_li)
    linked_li.unlink_all()
    print(repr(linked_li))

if __name__ == "__main__":
    test_LinkedList()
