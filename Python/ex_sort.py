from operator import itemgetter, attrgetter

def test_sort():
    li = [9, 2, 4, 7, 3, 6, 1, 5, 8]
    print(sorted(li))
    print(li)

    li.sort()
    print(li)

    # Key functions
    words = "This is a test string from Andrew".split()
    words_sorted = sorted(words, key=str.lower)
    print(words_sorted)

    student_tuples = [
        ('john', 'A', 15),
        ('jane', 'B', 12),
        ('dave', 'B', 10),
    ]
    students_sorted = sorted(student_tuples, key=lambda student: student[2])
    print(students_sorted)
    
    class Student:
        def __init__(self, name, grade, age):
            self.name = name
            self.grade = grade
            self.age = age
        def __repr__(self):
            return repr((self.name, self.grade, self.age))

    student_objects = [
        Student('john', 'A', 15),
        Student('jane', 'B', 12),
        Student('dave', 'B', 10),
    ]
    student_obj_sorted = sorted(student_objects, key=lambda student: student.age)
    print(student_obj_sorted)

    # Operator Module funcs: itemgetter(), attrgetter()
    print(sorted(student_tuples, key=itemgetter(2)))
    print(sorted(student_objects, key=attrgetter('age')))

    # Descending
    print(sorted(student_tuples, key=itemgetter(2), reverse=True))
    print(sorted(student_objects, key=attrgetter('age'), reverse=True))


if __name__ == "__main__":
    test_sort()
