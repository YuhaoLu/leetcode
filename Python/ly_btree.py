class TNode(object):

    def __init__(self, key=None, **kwarg):
        self.key = key
        self.data = kwarg
        
        self.left = None
        self.right = None
        self.parent = None
        
    def __repr__(self):
        return "{{key: {}, parent: {}, left: {}, right: {}, data: {}}}" \
            .format(self.key, self.parent, self.left, self.right,  self.data)

    def __str__(self):
        return str(self.key)

    def locate(self):
        """ 
        Tell if tnode is left child, right child or root 
        """
        if self.parent is None:
            return 'root'
        elif self.parent.left == self:
            return 'left'
        elif self.parent.right == self:
            return 'right'

    def child_stat(self):
        """ 
        Tell if tnode has zero child, one child(left/right) or two child 
        """
        if self.left is None:
            if self.right is None:
                return 'none'
            else:
                return 'right'
        else:
            if self.right is None:
                return 'left'
            else:
                return 'both'
                
    def update(self, key_pair):
        if len(key_pair) == 1:
            self.key = key_pair[0]
        elif len(key_pair) == 2:
            self.key = key_pair[0]
            self.data.update(**key_pair[1])
        else:
            raise Exception("Invalid key_pair {}".format(key_pair))
    
    @classmethod
    def init_key_pair(cls, key_pair):
        """ 
        Use @classmethod for multiple constructor
        Create a TNode with key_pair[key, {'payload': 'Hello'}]
        if key_pair == None, return None
        """
        if key_pair is None:
            tnode = None
        elif len(key_pair) == 1:
            tnode = cls(key_pair[0])
        elif len(key_pair) == 2:
            tnode = cls(key_pair[0], **key_pair[1])
        else:
            raise Exception("Invalid key_pair {}".format(key_pair))
        return tnode


class BiTree(object):

    def __init__(self, li_key_pair=None):
        """ 
        BiTree can be initialized with a list of key_pair[key, {'payload': 'Hello'}]
        """
        self.root = None
        self.size = 0

        if li_key_pair is not None:
            li_tnode = [TNode.init_key_pair(key_pair) for key_pair in li_key_pair ]

            for index in range(1, len(li_tnode) + 1):
                tnode = li_tnode[index-1]  # index - tnode
                if index == 1:
                    self.root = tnode
                if tnode is not None:
                    index_parent = index // 2
                    index_left = index * 2
                    index_right = index * 2 + 1
                    if 1 <= index_parent:
                        tnode.parent = li_tnode[index_parent - 1]
                    if index_left <= len(li_tnode):
                        tnode.left = li_tnode[index_left - 1]
                    if index_right <= len(li_tnode):
                        tnode.right = li_tnode[index_right - 1]
                    self.size += 1
                
    def __repr__(self):
        return 'self.root = {}\n'.format(self.root) \
                + 'self.size = {}\n\n'.format(self.size) \
                + str(self) + '\n' * 2 \
                + '\n'.join([repr(node) for node in self.gen_traverse()])

    def __str__(self):
        """
        ASCII Art
        """
        # reference: MIT Introduction to Algorithm
        # https: // ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/readings/binary-search-trees/
        if self.root is None:
            return '<empty tree>'

        def recurse(node):
            #                               pos                          ...1...
            #           |--------------------|                          /       \
            #             left_pos                      right_pos            ....46...
            #           |-----|                       |-----|               /         \
            #                 |---------  middle  ----------|              9.       ...48..
            # ------------------------------------------------------      /  \     /       \
            # 1st line: |'\s*'|            label            |'\s*' |     5    30  46       78
            # 2nd line: |'\s*'| /          '\s*'          \ |'\s*' |     /\  / \  /\      /  \
            #   ...     |           |                 |            |        18 38        76   78
            # nth line: | left_line |      '\s*'      | right_line |        /\ /\       /  \ / \
            #   ...     |           |                 |            |                   69       81
            # ------------------------------------------------------                  /  \     / \
            #           |left_width |                 |right_width |                 62  75   78 89
            #           |---------------   width   ----------------|                 /\  /\   /\ /\
            #                                                                           69        94
            #                                                                           /\        /\
            """ Recusive Call """
            if node is None:
                return [], 0, 0

            left_lines, left_pos, left_width = recurse(node.left)
            right_lines, right_pos, right_width = recurse(node.right)

            """ Add a new line to left_lines, right_lines """
            #           left_lines                 right_lines
            #     [                           [
            #       '    <space>    ',          '     <space>    ',
            #       '    <space>    ',          '     <space>    ',
            #              ...       ,                  ...       ,
            #  +++  '    <space>    '      +++  '     <space>    '
            #     ]                           ]
            #        |- left_width -|            |- right_width -|
            while len(left_lines) < len(right_lines):
                left_lines.append(' ' * left_width)
            while len(right_lines) < len(left_lines):
                right_lines.append(' ' * right_width)

            label = str(node.key)
            middle = max(right_pos + left_width - left_pos + 1, len(label), 2)

            """ Padding the label(the string of node.val) with '.'s """
            # If node is the parent's left child, add one more '.' to the right,
            # so taht the node is closer the parent side
            if (middle - len(label)) % 2 == 1 and node.parent is not None and \
               node is node.parent.left and len(label) < middle:
                label += '.'

            #        |-- middle --|
            # label [...node_val...]
            label = label.center(middle, '.')

            # label [ ..node_val.. ]
            if label[0] == '.':
                label = ' ' + label[1:]
            if label[-1] == '.':
                label = label[:-1] + ' '

            """ Caculate return results: lines, pos & width """
            pos = left_pos + middle // 2
            width = left_pos + middle + right_width - right_pos
            lines = [' ' * left_pos + label + ' ' * (right_width - right_pos),                         # 1st line
                     ' ' * left_pos + '/' + ' ' * (middle-2) + '\\' + ' ' * (right_width - right_pos)  # 2nd line
                     ] + \
                    [left_line + ' ' * (width - left_width - right_width) + right_line                 # nth line
                     for left_line, right_line in zip(left_lines, right_lines)
                     ]

            return lines, pos, width

        return '\n'.join(recurse(self.root)[0])
    
    def __len__(self):
        return self.size  
        
    def _preorder(self, tnode):
        if tnode:
            yield tnode
            yield from self._preorder(tnode.left)
            yield from self._preorder(tnode.right)

    def _inorder(self, tnode):
        if tnode:
            yield from self._inorder(tnode.left)
            yield tnode
            yield from self._inorder(tnode.right)

    def _postorder(self, tnode):
        if tnode:
            yield from self._postorder(tnode.left)
            yield from self._postorder(tnode.right)
            yield tnode
    
    def gen_traverse(self, mode='preorder'):
        """
        Generate a TNode object in pre-order / in-order / post-order
        """
        if mode == 'preorder':
            yield from self._preorder(self.root)
        elif mode == 'inorder':
            yield from self._inorder(self.root)
        elif mode == 'postorder':
            yield from self._postorder(self.root)

    def find(self, key):
        """
        Return TNode that has a specfic key
        """
        for tnode in self.gen_traverse():
            if tnode.key == key:
                return tnode
        return None    

    def __getitem__(self, i):
        """
        bitree[i] 
        - returns node at index i
        - if it doen't exist, return None
        """
        if i < 1:
            return None
        elif i == 1:
            return self.root

        # Caculate the path from root to node[i]
        # left - 0, right - 1
        path = list(bin(i)[3:])

        # Go to node[i]'s parent
        tnode = self.root
        if tnode is None:
            return None
        for trace in path[:-1]:
            if trace == '0':
                tnode = tnode.left
            elif trace == '1':
                tnode = tnode.right
            if tnode is None:
                return None

        if path[-1] == '0':
            return tnode.left
        elif path[-1] == '1':
            return tnode.right

    def __setitem__(self, i, key_pair):
        """
        bitree[i] = [key, {'payload': 'Hello'}] or None

        bitree[i] exist 
        - update bitree[i]'s key and data
        - if key_pair is None, delete bitree[i] if possible

        bitree[i] doesn't exist
        - create bitree[i] and insert it after its parent
        """
        tnode = self[i]
        if tnode is not None:  # node[i] exist
            if key_pair is not None:
                tnode.update(key_pair)
            else:
                del self[i]
        else:                  # node[i] doesn't exist
            if key_pair is not None:
                tnode_new = TNode.init_key_pair(key_pair)
                tnode_parent = self[i // 2]
                if tnode_parent is not None:  # node[i]'s parent exist
                    tnode_new.parent = tnode_parent
                    if i % 2 == 0:  # node[i] is its parent's left child
                        tnode_parent.left = tnode_new
                    else:           # node[i] is its parent's right child
                        tnode_parent.right = tnode_new
                else:                        # node[i]'s parent doesn't exist
                    raise Exception("node[{}]'s ancestor doesn't exist".format(i))
                self.size += 1

    def __delitem__(self, i):
        """
        del bitree[i]
        """
        tnode = self[i]
        if tnode is not None:
            child_stat = tnode.child_stat()
            if child_stat == 'none':
                tnode_replace = None
            elif child_stat == 'left':
                tnode_replace = tnode.left
            elif child_stat == 'right':
                tnode_replace = tnode.right
            elif child_stat == 'both':
                raise "node[{}] cannot be deleted because it has both child"

            locate = tnode.locate()
            if locate == 'root':
                self.root = tnode_replace
            elif locate == 'left':
                tnode.parent.left = tnode_replace
            elif locate == 'right':
                tnode.parent.right = tnode_replace
            if tnode_replace is not None:
                tnode_replace.parent = tnode.parent
            self.size -= 1


def decor_name(func):
    def wrapper(*args, **kwarg):
        print()
        title = "  {}  ".format(func.__name__)
        print(title.center(64, '#'))
        func(*args, **kwarg)
    return wrapper


def bprint(*data):
    print()
    print(*data)
    print()
    print('-' * 64)


def test_bitree():

    btree = BiTree([[1, {'payload': 'D'}],
                    [2, {'payload': 'B'}],
                    [3, {'payload': 'E'}],
                    [4, {'payload': 'A'}],
                    [5, {'payload': 'C'}],
                    None,
                    [7, {'payload': 'F'}]
                    ])

    @decor_name
    def test_init():
        bprint(btree)
        bprint(repr(btree))
        bprint("btree size:", len(btree))
    # test_init()

    @decor_name
    def test_getitem():
        bprint(repr(btree[1]))
        bprint(repr(btree[2]))
        bprint(repr(btree[5]))
        bprint(repr(btree[6]))
        bprint(repr(btree[7]))
        bprint(repr(btree[20]))
    # test_getitem()

    @decor_name
    def test_setitem():
        btree[1] = [11, {'payload': 'DD'}]
        bprint(repr(btree))
        btree[4] = [44, {'payload': 'haha'}]
        bprint(repr(btree))
        btree[9] = [99, {'payload': 'hello'}]
        bprint(repr(btree))
        btree[7] = None
        bprint(repr(btree))
    # test_setitem()

    @decor_name
    def test_delitem():
        bprint(repr(btree))
        del btree[5]
        bprint(repr(btree))
        del btree[2]
        bprint(repr(btree))
        del btree[4]
        del btree[7]
        del btree[2]
        del btree[1]
        bprint(repr(btree))
    test_delitem()

    @decor_name
    def test_find():
        bprint(repr(btree.find(1)))
        bprint(repr(btree.find(6)))
        bprint(repr(btree.find(7)))
    # test_find()


if __name__ == "__main__":
    test_bitree()
