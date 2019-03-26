from ly_btree import TNode, BiTree
from ly_btree import decor_name, bprint

class BSTNode(TNode):

    def find(self, key):
        tnode = self
        while tnode is not None:
            if key == tnode.key:
                return tnode
            elif key < tnode.key:
                tnode = tnode.left
            else:
                tnode = tnode.right
        return None

    def find_min(self):
        tnode = self
        while tnode.left is not None:
            tnode = tnode.left
        return tnode

    def next_larger(self):
        # node has right child
        #     ...
        #     {5}
        #    /   \
        #   2    10
        #       /  \
        #     (7)  12
        if self.right is not None:
            return self.right.find_min()

        # node has no right child
        # go to the leftmost parent, and return its right parent
        #      ...
        #     (10)
        #     /
        #    4
        #     \
        #     {8}
        #     /
        #    6
        tnode = self
        while tnode.locate() == 'right':
            tnode = tnode.parent
        return tnode.parent

    def swap_val(self, other):
        self.key, other.key = other.key, self.key
        self.val, other.val = other.val, self.val


class BST(BiTree):

    def __init__(self, li_key_pair=None, TNodeType=BSTNode):
        self.root = None
        self.size = 0
        self.TNodeType = TNodeType

        if li_key_pair is not None:
            for key_pair in li_key_pair:
                self.set(key_pair)

    def find(self, key):
        return self.root.find(key)

    def set(self, key_pair):
        if self.root is None:
            self.root = self.TNodeType.init_key_pair(key_pair)
            self.size += 1
        else:
            key = key_pair[0]
            tnode_new = BSTNode.init_key_pair(key_pair)
            tnode = self.root
            while True:
                if key == tnode.key:
                    tnode.val = key_pair[1]
                    break
                elif key < tnode.key:
                    # Go left
                    if tnode.left is None:
                        tnode.left = tnode_new
                        tnode_new.parent = tnode
                        self.size += 1
                        break
                    tnode = tnode.left
                else:
                    # Go right
                    if tnode.right is None:
                        tnode.right = tnode_new
                        tnode_new.parent = tnode
                        self.size += 1
                        break
                    tnode = tnode.right
        
    def detach(self, tnode):
        if tnode is not None and tnode.child_stat() == 'both':
            tnode_replace = tnode.next_larger()
            tnode.swap_val(tnode_replace)
            self.detach(tnode_replace)
        else:
            super().detach(tnode)

    def remove(self, key):
        tnode = self.find(key)
        self.detach(tnode)

    def find_min(self):
        if self.root is None:
            return None
        return self.root.find_min()

    def pop_min(self):
        tnode = self.find_min()
        self.detach(tnode)
    
    def gen_traverse(self, mode='inorder'):
        yield from super().gen_traverse(mode)

    def check_ri(self):
        """
        Check if representation invariant always holds
        """
        if self.size < 2:
            return True
        else:
            li_vals = [ tnode.key for tnode in self.gen_traverse() ]
            return all(li_vals[i] < li_vals[i+1] for i in range(len(li_vals)-1))


def test_BST():
    bst = BST([ [5, 'D'],
                [1, 'B'],
                [3, 'E'],
                [2, 'A'],
                [8, 'C'],
                [6, 'U'],
                [4, 'F']
               ])
    print(repr(bst))

    @decor_name
    def test_find():
        bprint(repr(bst.find(3)))
        bprint(repr(bst.find(8)))
        bprint(repr(bst.find(7)))
        bprint(repr(bst.find(11)))
    test_find()

    @decor_name
    def test_set():
        bst.set([10, 'hello'])
        bprint(repr(bst))
        bst.set([3, 'change val'])
        bprint(repr(bst))
        bst.set([-1, 'anyone'])
        bprint(repr(bst))
        bst.set([6, 'home'])
        bprint(repr(bst))
    test_set()
        
    @decor_name
    def test_remove():
        bst.remove(1)
        bprint(repr(bst))
        bst.remove(6)
        bprint(repr(bst))
        bst.remove(5)
        bprint(repr(bst))
    test_remove()

    @decor_name
    def test_min():
        bprint(repr(bst))
        bprint(repr(bst.find_min()))
        bst.pop_min()
        bprint(repr(bst))
    test_min()    


if __name__ == "__main__":
    test_BST()
