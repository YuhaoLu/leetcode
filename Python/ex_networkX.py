import networkx as nx
import matplotlib.pyplot as plt

def test_graph():
    G = nx.Graph()
    G.add_edge(0, 1)
    G.add_edge(1, 2)
    G.add_edge(0, 4)
    G.add_edges_from([(0, 1), (1, 2), (2, 0)])

    nx.draw_networkx(G)

def test_directional_graph():
    DiG = nx.DiGraph()
    DiG.add_edge(1, 2)
    DiG.add_edge(1, 3)

    nx.draw_networkx(DiG)

def test_weighted_graph():
    G = nx.Graph()
    G.add_node(0, pos=(1, 1))
    G.add_node(1, pos=(1, 2))
    G.add_node(2, pos=(2, 4))
    G.add_node(4, pos=(3, 4))

    G.add_edge(0, 1, weight=10, relation='friends')
    G.add_edge(1, 2, weight=20, relation='enemy')
    G.add_edge(0, 2, weight=50, relation='friends')
    G.add_edge(0, 4, weight=100, relation='enemy')

    pos = nx.get_node_attributes(G, 'pos')
    weight = nx.get_edge_attributes(G, 'weight')
    relation = nx.get_edge_attributes(G, 'relation')

    dict_lookup_color = {'enemy': 'red', 'friends': 'blue'}
    edge_color = [dict_lookup_color[x] for x in relation.values()]

    nx.draw_networkx(G, pos, edge_color=edge_color)
    nx.draw_networkx_edge_labels(G, pos, edge_labels=weight)

def graph_bfs():
    # level = {s: 0}
    # parent = {s: None}
    # i = 1
    # frontier=[s]
    pass


def test_practice_problem():
    DiG = nx.DiGraph()
    DiG.add_node(0, city='Mountain View')
    DiG.add_node(1, city='San Francisco')
    DiG.add_node(2, city='London')
    DiG.add_node(3, city='Shanghai')
    DiG.add_node(4, city='Berlin')
    DiG.add_node(5, city='Sao Paolo')
    DiG.add_node(6, city='Bangalore')

    DiG.add_edge(0, 1, weight=51)     # MV <-> SF
    DiG.add_edge(1, 0, weight=51)     # SF <-> MV
    DiG.add_edge(0, 3, weight=9950)   # MV <-> Shanghai
    DiG.add_edge(3, 0, weight=9950)   # Shanghai <-> MV
    DiG.add_edge(0, 5, weight=10375)  # MV <-> Sao Paolo
    DiG.add_edge(5, 0, weight=10375)  # Sao Paolo <-> MV
    DiG.add_edge(1, 3, weight=9900)   # SF <-> Shanghai
    DiG.add_edge(3, 1, weight=9900)   # Shanghai <-> SF
    DiG.add_edge(1, 4, weight=9130)   # SF <-> Berlin
    DiG.add_edge(4, 1, weight=9130)   # Berlin <-> SF
    DiG.add_edge(2, 3, weight=9217)   # London <-> Shanghai
    DiG.add_edge(3, 2, weight=9217)   # Shanghai <-> London
    DiG.add_edge(2, 4, weight=932)    # London <-> Berlin
    DiG.add_edge(4, 2, weight=932)    # Berlin <-> London
    DiG.add_edge(2, 5, weight=9471)   # London <-> Sao Paolo
    DiG.add_edge(5, 2, weight=9471)   # Sao Paolo <-> London

    pos = nx.shell_layout(DiG)
    city = nx.get_node_attributes(DiG, 'city')
    weight = nx.get_edge_attributes(DiG, 'weight')

    nx.draw_networkx(DiG, pos)
    nx.draw_networkx_labels(DiG, pos, labels=city)
    nx.draw_networkx_edge_labels(DiG, pos, edge_labels=weight)

    print(list(nx.dfs_edges(DiG, source=0)))
    print(list(nx.bfs_edges(DiG, source=0)))

    print(DiG.adj)
    # DiG {    dict of dict of dicts
    #   node: adjacent_list{ neighbor_node: edge_attribute, ...}
    #    0: {1: {'weight': 51}, 3: {'weight': 9950}, 5: {'weight': 10375}}, 
    #    1: {0: {'weight': 51}, 3: {'weight': 9900}, 4: {'weight': 9130}}, 
    #    2: {3: {'weight': 9217}, 4: {'weight': 932}, 5: {'weight': 9471}}, 
    #    3: {0: {'weight': 9950}, 1: {'weight': 9900}, 2: {'weight': 9217}}, 
    #    4: {1: {'weight': 9130}, 2: {'weight': 932}}, 
    #    5: {0: {'weight': 10375}, 2: {'weight': 9471}}, 
    #    6: {}
    # }

if __name__ == "__main__":
    plt.figure()
    # test_graph()
    # test_directional_graph()
    # test_weighted_graph()
    test_practice_problem()
    plt.show()
    
