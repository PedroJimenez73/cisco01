import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PreguntasService {

  preguntasMaster =
[
    {
        type: 'simple',
        pic: 'assets/pic_1.png',
        question: 'What will the variable "age" be in class B?',
        answers: [
            'public',
            'private',
            'protected',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            '"age" variable is public in class B because B inherit from A class, and this is the reason why can be used in cout output to screen.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_2.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1 0.4',
            'It prints: 2 0.8',
            'It prints: 0 0',
            'It prints: 1 0.8'
        ],
        corrects: ['C'],
        feedback: [
            'The result is 0 0 because the operator is overloaded? and overwrite the class values.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_3.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0 0',
            'It prints: 1 1',
            'It prints: 3 3',
            'Compilation error'
        ],
        corrects: ['C'],
        feedback: [
            'Returns 3 3 because the constructor method was used with the implementation of a single parameter.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_4.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 21',
            'It prints: 012',
            'It prints: 0',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'Returns 21 because the function is invoked which in turn is invoked recursively.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_5.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 4',
            'It prints: 6',
            'It prints: 3',
            'It prints: 0'
        ],
        corrects: ['B'],
        feedback: [
            'Returns 6 because the function is invoked which in turn is invoked recursively.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_6.png',
        question: 'What will be the output of the program?',
        answers: [
            '25',
            '5',
            '0',
            '1'
        ],
        corrects: ['A'],
        feedback: [
            '25 is the result because function returns the parameter multiplied by itself.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_7.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: T',
            'It prints: T0',
            'It prints: Test'
        ],
        corrects: ['D'],
        feedback: [
            'Prints Test because "FUN" declaration has a if structure that print "Test" when "arg" exists.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_8.png',
        question: 'What will the variable "y" be in class B?',
        answers: [
            'public',
            'private',
            'protected',
            'None of these'
        ],
        corrects: ['B'],
        feedback: [
            'Private because "y" is a protected in class "A" and "B" is inherited of "A".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_9.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 7',
            'It prints: 6 ',
            'It prints: 7,1',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'Prints 7 because "x" + "j" + "y" is 7.1 but the variable "i" where is assigned the result has an int data type.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_10.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: -1',
            'It prints: 2'
        ],
        corrects: ['B'],
        feedback: [
            'Prints 1 because  the condition of the if else structure is matched.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_11.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1 0.4',
            'It prints: 2 0.8',
            'It prints: 0 0',
            'Garbage value'
        ],
        corrects: ['B'],
        feedback: [
            'Print twice the default values of the re and im attributes because the + operator overload adds them to themselves.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_12.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 4.9',
            'It prints: 5',
            'It prints: 4'
        ],
        corrects: ['B'],
        feedback: [
            'Returns 4.9 because it is the sum of the two values "a" and "b", which in turn is assigned to the pointer "f".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_13.png',
        question: 'Which statement should be added in the following program to make work it correctly?',
        answers: [
            '#include<stdio.h>',
            '#include<stdlib.h>',
            '#include <iostream> ',
            '#include<conio.h>'
        ],
        corrects: ['C'],
        feedback: [
            'Iostream must be added to program to be able to use the cout object.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_14.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: 10',
            'It prints: 20',
            'It prints: 11',
            'It prints: 30'
        ],
        corrects: ['A'],
        feedback: [
            'It prints 10 because "p" pointer points to the first position of the "tab" vector.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_15.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: -1',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'The program prints 0 because it\'s twice the second link of the "fun" function.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_16.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: BC',
            'It prints: CB',
            'It prints: CC',
            'It prints: BB'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "BC" because program first time calls "Print" method on "ob2" pointer and them again calls "Print" on "ob3" pointer, so it\'s using class B and C in this order.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_17.png',
        question: 'What will the variable "age" be in class B?',
        answers: [
            'public',
            'private',
            'protected',
            'None of these'
        ],
        corrects: ['B'],
        feedback: [
            'Private, because class "B" inherits from class "A".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_18.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'Compilation fails',
            'It prints: 5 5 0',
            'It prints: 7 7 1',
            'It prints: 6 5 1'
        ],
        corrects: ['C'],
        feedback: [
            'Function "myFunctions" increases the variables "x" and "i" by one, which now have the values 6 and 1, and the variable "y" adds the previous two, with which it will have the value 7. In the main method, "x" is increased again by one, with which the concatenation output will be 7 7 1.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_19.png',
        question: 'Which of the structures is incorrect?',
        answers: [
            '1',
            '2',
            '3',
            '2, 3'
        ],
        corrects: ['C'],
        feedback: [
            'Structure "3" isn\'t correct because don\'t use a pointer.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_20.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: WorldHello',
            'It prints: HelloWo',
            'It prints: World',
            'It prints: Hello'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "WorldHello" because in the variable "s3" concats "s1" value whith "rldHello".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_21.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1 0',
            'It prints: 1 1',
            'It prints: 1 2',
            'Compilation error'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "1 2" because they are the values passed as arguments to the "complex" function.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_22.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: 2',
            'It prints: 4'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "2" because function "fun" adds 2 to the argument, and the variable "i" divides the result of the fun function with argument 2 by 2.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_23.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 4John',
            'It prints: 2John',
            'It prints: 23',
            'It prints: 43'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "4John" because the "B" class method overwrites "y" and "z" values.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_24.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 111Alan',
            'It prints: Bob',
            'It prints: Alan',
            'It prints: 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "Alan" because "B" method "Print()" inherits its argument value from class "A" constructor.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_25.png',
        question: 'What is the output of the program given below?',
        answers: [
            '1010',
            '101010',
            '055',
            'None of these Answer'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "055" because they are the three values that returns the object cout every time it\'s used.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_26.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'compilation fails',
            'It prints: 0,0,0',
            'It prints: 1,2,0',
            'None of these'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "0,0,0" because the variables "x" and "y" are int type and the integer union type is used in which "i" is equal to zero.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_27.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 3',
            'It prints: 0',
            'It prints: 1',
            'It prints: 2'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "3" becuase Print method on "A" class returns "z", which is the sum of "x" plus "y" whose values are 1 and 2 by default.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_28.png',
        question: 'Which code, inserted at line 10, generates the output "Hello World"?',
        answers: [
            'cout << fun(" World");',
            'cout << fun(*ps);',
            'cout << fun("Hello");',
            'cout << fun("Hello", " World");'
        ],
        corrects: ['D'],
        feedback: [
            'D option is correct because the "fun" function concats two strings'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_29.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0 5',
            'It prints: 5 1',
            'It prints: 1 5',
            'It prints: 5 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "1 5" becuase "myFunction" adds one unit to "y" variable.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_30.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: BBB',
            'It prints: AAA',
            'It prints: ABC',
            'It prints: ABB'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "AAA" because "obj" is a pointer of "A" class that in its "Print" method, returns the value "A".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_31.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 010',
            'It prints: 110',
            'It prints: 00',
            'It prints: 1'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "110" because the value of "x" in "c1" is 1 and the value of "x" in "c2" is 10 and both values are output by cout object.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_32.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 2',
            'It prints: 21',
            'It prints: 00',
            'It prints: 02'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "2" because the "fun" function argument\'s is linked to third position of vector "t".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_33.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: A no parametersA no parametersB string parameter',
            'It prints: A string parameterA no parametersB string parameterA object A parameter',
            'It prints: A no parametersB string parameter',
            'It prints: A no parametersA no parameters'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "A string parameterA no parametersB string parameterA object A parameter" because object "b2" use as an argument to its constructor the "b1" object, so all the messages are chained.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_34.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hello world',
            'It prints: Hello',
            'Compilation error',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Hello world" because method "print()" output attribute "s" that, in object "b" is asigned from object "a"'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_35.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 0.5',
            'It prints: 1',
            'It prints: ?1'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0" because function "op" has its arguments as int type, so the value of "pf" pointer will be 0'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_36.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Text',
            'Compilation error',
            'Runtime error',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'Program will be a runtime error because in the object "FirstObject" hasn\'t initialized the pointer that the destructor releases.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_37.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: AB ',
            'It prints: AA',
            'It prints: BA',
            'It prints: BB'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "AB" because the pointer "obj" is linked to "ob1" that is an object from "A" class and prints "A" and later it points to the object "ob2" which is from class "B" and prints "B".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_38.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Test 4',
            'It prints: Test 3',
            'Compilation error',
            'It prints: Tes 3'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "Tes 3" because the variable "s" is limited to 3 with the resize method and that same value is concatenated in the output.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_39.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 210',
            'It prints: 110',
            'It prints: 010',
            'Compilation error'
        ],
        corrects: ['D'],
        feedback: [
            'The program will be have a compilation error because "x" is a private member of class "A" and don\'t be invoked in main method.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_40.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: A no parametersA no parametersB string parameter',
            'It prints: A string parameterA no parametersB int parameterA object A parameter',
            'It prints: A no parametersB string parameter',
            'It prints: A no parametersA no parameters'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "A string parameterA no parametersB int parameterA object A parameter" because object "a2" uses the second constructor output of "A" class, object "b1" uses the first constructor output from "A" and the third one of "B" and, finally, object "b2" uses "b1" as an argument.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_41.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: from First',
            'It prints: from Firstfrom First',
            'Compilation error',
            'Runtime error'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "from Firstfrom First" because the for loop iterates twice the vector "t" whose elements are of class "First"'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_42.png',
        question: 'What is the output of the program given below?',
        answers: [
            '1010',
            '100',
            '010',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'Program prints "010" because cout object output 0 the first time it is used inside brackets and in the next line output the "i" global value, so 10'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_43.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 5',
            'It prints: 1?5',
            'It prints: 05',
            'It prints: 0'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "1?5" because the object "c1" assigns 1 int value to "x" attribute and the object "c2" assigns ?5 value to the same attribute.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_44.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'compilation fails',
            'It prints: 10',
            'It prints: 0',
            'It prints: 1'
        ],
        corrects: ['D'],
        feedback: [
            'It prints 1 because "i" receives the smallest of the values of the variables "a", "b" and "c"'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_45.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Bob5',
            'It prints: Bob',
            'It prints: 5',
            'None of these'
        ],
        corrects: ['B'],
        feedback: [
            'It prints only "Bob" because age ins\'t a public attribute.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_46.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: -1',
            'It prints: 2'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "-1" because programs returns the value of the variable "i" in the else statement minus one, and at that time, the value of "i" is 0 because it was decreased by one in the if expression.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_47.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 2',
            'It prints: 0',
            'It prints: 4',
            'It prints: 16'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "4" because the function "fun" increases the value of "i" by two units.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_48.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 10',
            'It prints: 100',
            'It prints: -1'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "100" because the "fun" function returns 100 if its parameter "x" isn\'t greater than 0.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_49.png',
        question: 'What is the output of the program if character 2 is supplied as input?',
        answers: [
            'It prints: float exception. Exception Nr.',
            'It prints: int exception. Exception Nr. 20',
            'It prints: An exception occurred',
            'It prints: float exception. Exception Nr. 5.2'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "float exception. Exception Nr. 5.2" because try block uses case 2 and therefore throw "5.2".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_50.png',
        question: 'What is the output of the program if character 4 is supplied as input?',
        answers: [
            'It prints: float exception. Exception Nr.',
            'It prints: int exception. Exception Nr.',
            'It prints: An exception occurred',
            'It prints: No exception'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "No exception" because none of the cases defined in the switch structure is true.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_51.png',
        question: 'Which code, inserted at first line in main method, generates the output "3.14 10"?',
        answers: [
            'using myNamespace2::y; using myNamespace1::x;',
            'using namespace myNamespace1;',
            'using namespace myNamespace1; using namespace myNamespace2;',
            'using myNamespace1::y; using myNamespace2::x;'
        ],
        corrects: ['D'],
        feedback: [
            'Option D works because to use "myNamespace2" in variable "x" and "myNamespace1" in variable "y".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_52.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: HelloWorld',
            'It prints: Hello',
            'It prints: WorldHello',
            'It prints: World'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "HelloWorld" because the for loop prints each element of the vector "s1".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_53.png',
        question: 'Which code, inserted at comments, generates the output "0102020"?',
        answers: [
            'void setAge(int a) {age = a;}',
            'void setAge() {age = 20;}',
            'void setAge() {age = 10;}',
            'void setAge(int a=20) {age = a;}'
        ],
        corrects: ['D'],
        feedback: [
            'The option "D" works because set the variable "age" with value 20.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_54.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: from First',
            'It prints: from Firstfrom First',
            'It prints: from Firstfrom Second',
            'It prints: from Secondfrom Second'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "from Firstfrom Second" because the program uses the "Print" method first on an object of class "First" and secondly on an object of class "Second".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_55.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: CDEF',
            'It prints: ABCDEF',
            'It prints: BCDEF',
            'None of these'
        ],
        corrects: ['D'],
        feedback: [
            'Programs throws a compilation error.'
        ]
    },
    {
        type: 'multi',
        pic: null,
        question: 'Which of the following can be checked in a switch/case statement?',
        answers: [
            'char',
            'int',
            'enum',
            'double'
        ],
        corrects: ['A','B','C',''],
        feedback: [
            'Options "A","B" and "C" are corrects because switch estructures uses this primitive data types.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_57.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 123',
            'It prints: 000',
            'It prints: 23',
            'It prints: 12'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "23" because concats the values of variables "y" and "z".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_58.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: AB',
            'It prints: AA',
            'It prints: BA',
            'It prints: BB'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "AA" because although the object "obj" points second to an object of class "B" it is an object of class "A".'
        ]
    },
    // {
    //     type: 'simple',
    //     pic: 'assets/pic_59.png',
    //     question: 'What happens when you attempt to compile and run the following code?',
    //     answers: [
    //         'It prints: ?3',
    //         'It prints: 2',
    //         'It prints: 6',
    //         'It prints: 5'
    //     ],
    //     corrects: ['A'],
    //     feedback: [
    //         'It prints "?3" because '
    //     ]
    // },
    {
        type: 'simple',
        pic: 'assets/pic_60.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1',
            'It prints: 4',
            'It prints: 10',
            'It prints: 0'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "4" because the function "fun" assigns to the variable "i" the squared of itself through pointers.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_61.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1',
            'It prints: 2',
            'It prints: 4',
            'It prints: 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "4" because variable "y" is a pointer to "x" therefore the program returns 2 plus 2.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_62.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: 2',
            'It prints: 0.5'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "2" because the program executes the multiplication operations first and then the right-to-left division operations.'
        ]
    },
    {
        type: 'multi',
        pic: 'assets/pic_63.png',
        question: 'Which of the following statements are correct about an array?',
        answers: [
            'The array can store 10 elements.',
            'The expression tab[1] designates the very first element in the array.',
            'The expression tab[9] designates the last element in the array.',
            'It is necessary to initialize the array at the time of declaration.'
        ],
        corrects: ['A','','C',''],
        feedback: [
            '"A" and "B" are both corrects because the array index start at 0.'
        ]
    },
    {
        type: 'multi',
        pic: null,
        question: 'Which of the following is a logical operator?',
        answers: [
            '&',
            '&&',
            '||',
            '!'
        ],
        corrects: ['B','C','D'],
        feedback: [
            '"&&", "||" and "!" are logical operators.'
        ]
    },
    {
        type: 'multi',
        pic: null,
        question: 'How could you pass arguments to functions?',
        answers: [
            'by value',
            'by reference',
            'by pointer ',
            'by void'
        ],
        corrects: ['A','B','C',''],
        feedback: [
            'It\'s possible to pass arguments a function by value, by reference and by pointer.'

        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_66.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 4 5',
            'It prints: 2 3',
            'It prints: 3 2',
            'It prints: 4 3'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "4 5" because the variable "i" increments its value from 0 to the number of iteration\'s loop, therefore 4, and the variable "y" increments the value in the same way but starts in 1.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_67.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 6',
            'It prints: 2',
            'It prints: 3'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "6" because the function "mult" multiply its three arguments, that is 1, 2 and 3.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_68.png',
        question: 'Which code, inserted at class "A", generates the output "ABC"?',
        answers: [
            'void Print(){ cout<<"A";}',
            'virtual void Print(){ cout<<"A";}',
            'virtual void Print(string s){ cout<<s;}',
            'None of these'
        ],
        corrects: ['B'],
        feedback: [
            '"B" option is correct because this code concatenate its value to those of the other two classes.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_69.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hello:1',
            'It prints: Hello:',
            'It prints: 10',
            'Runtime error'
        ],
        corrects: ['D'],
        feedback: [
            'Programs throw a runtime error because the pointer that has to be released isn\'t assigned.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_70.png',
        question: 'What will happen when you attempt to compile and run the following code?',
        answers: [
            'It will print 0',
            'The code will not compile',
            'It will print 5',
            'It will print garbage value'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "5" because the function "getValue" returns 5 and is assigned to the constant "x".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_71.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: A0 B0 A0 B1 A0 C0 A0 C1',
            'It prints: B0 B1 C0 C1',
            'It prints: A0 B0 A0 B0 C0',
            'It prints: B0 B1'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "A0 B0 A0 B0 C0" because object "b1" is of class "B" that inherits from "A" so it prints "A0" and "B0" from its constructor methods by not using parameter. As the object "c1" is of the class "C" that inherits from "B", "A0" and "B0" are printed again and from the constructor of the class "C", "C0" is added.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_72.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: 10',
            'It prints: 2020',
            'It prints: 22',
            'It prints: 00'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "2020" because the for loop prints twice the value of age.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_73.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 4.9',
            'It prints: 5',
            'It prints: 4'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "4.9" because the value is the sum of the arguments passed from the variables "a" and "b" to the "sum" function.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_74.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: HelloWorld',
            'It prints: Hello',
            'It prints: World',
            'It prints: HelWorld'
        ],
        corrects: ['A'],
        feedback: [
            'It prints the string HelloWorld because the operator += concat the two words stored in S1 and S2.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_75.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 2',
            'It prints: 10',
            'It prints: 0 ',
            'It prints: 1'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "2" because each "define" directive adds a unit to the initial value 0.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_76.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 18',
            'It prints: 19',
            'It prints: 20',
            'It prints: 0'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "19" the function "set" receives as an argument a pointer to the structure e with which it adds a unit to the original value of the variable "age".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_77.png',
        question: 'Point out an error in the program.',
        answers: [
            'No error',
            'Error: unknown pointer conversion',
            'cannot convert from \'const int *\' to \'int *const\'',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'The program is error-free because the int type can be declared before or after the const word.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_78.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hello',
            'It prints: world',
            'It prints: worldEnd',
            'It prints: End'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "world" becuase the the switch estructure uses second case because matchs the value of variable "i".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_79.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0 0',
            'It prints: 1 1',
            'It prints: 2 0',
            'It prints: 2 2'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "2 2" the class "complex" incorporates the methods to obtain the value of type double 2 and pass it to the "print" method that prints it twice.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_80.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 202020',
            'It prints: 012',
            'It prints: 0',
            'It prints: 2'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "012" because the for loop prints 3 times the output function "f" which adds the value 0 to the values of each iteration, which are 1, 2 and 3.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_81.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 6',
            'It prints: 9',
            'Compilation error',
            'It prints: 33'
        ],
        corrects: ['C'],
        feedback: [
            'Program has a compilation error because isn\'t possible assign the "test" link to "padd", both objects are instantiated from differents classes.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_82.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 5',
            'It prints: 10',
            'It prints: 1',
            'It prints: 0'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "5" because the pointer "o" is instantiated using the second instruction of the constructor method of class "BaseC".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_83.png',
        question: 'What will happen when you attempt to compile and run the following code?',
        answers: [
            'It will print:"el " ',
            'The code will not compile.',
            'It will print:"Hello "',
            'It will print garbage'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "el " because the loop "while" iterate three times returns each character in the str array pointed to by "s".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_84.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: A A',
            'It prints: B B',
            'It prints: A B',
            'It prints: B'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "A A" because the pointer "bc" even though it points to an object of class "B", its "print" method is that of class "A".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_85.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 5, 10',
            'It prints: 5.2, 10',
            'It prints: 5.20, 10.0',
            'It prints: 5.2, 10.00'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "5, 10" because they are the values of "x" in the first statement that uses "cout" and of "f", which is assigned to "y" in the second statement that uses "cout".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_86.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: ?1,?1',
            'It prints: ?1,3',
            'It prints: ?1,2',
            'Compilation fails'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "?1,2" because the variable "k" uses the first function "op" and the variable "l" uses the second one but both "k" and "l" are integers.'
        ]
    },
    {
        type: 'multi',
        pic: null,
        question: 'Which of the following statements are correct?',
        answers: [
            'A function can be defined inside another function',
            'A function may have any number of return statements each returning different values.',
            'A function can return floating point value',
            'In a function two return statements should never occur.'
        ],
        corrects: ['B','C'],
        feedback: [
            'B and C are corrects.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_88.png',
        question: 'Which code, inserted in class "B", generates the output "5 Bob"?',
        answers: [
            'friend void Print(A ob, B so);',
            'friend void Print(A &ob, B &so);',
            'friend void Print(A *ob, B *so);',
            'None of these'
        ],
        corrects: ['B'],
        feedback: [
            '"friend void Print(A &ob, B &so);" is the correct statement because take the "age" value from "A" class and "name" value from "B" class.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_89.png',
        question: 'What is the output of the program if characters \'t\', \'e\', \'s\' and \'t\' enter are supplied as input?',
        answers: [
            'It prints: test 4',
            'It prints: test',
            'It prints: test 5',
            'It prints: 4'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "test 4" because all the characters are corrects and without white space character they add up to 4.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_90.png',
        question: 'What happens if character 3 is entered as input?',
        answers: [
            'It prints: object exception. Exception Nr. 5',
            'It prints: int exception. Exception Nr.',
            'It prints: An exception occurred',
            'It prints: No exception'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "object exception. Exception Nr. 5" the value "3" matchs "C" case and therefore the excepcion is throw as a object with 5 value in its "i" attribute.'
        ]
    },
    {
        type: 'multi',
        pic: 'assets/pic_91.png',
        question: 'Point out an error in the program.',
        answers: [
            'No error',
            'Cannot modify a const object',
            'Compilation error at line "*ptr = \'a\'',
            'None of these'
        ],
        corrects: ['','B','C',''],
        feedback: [
            'B and C are corrects.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_92.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 20',
            'It prints: 0',
            'It prints address of ptr',
            'It prints: 2'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "20" because the pointer "ptr" points to variable "x".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_93.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0 0',
            'It prints address of ptr',
            'It prints: 1',
            'It prints: 2'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0 0" because the pointer "ptr" points to variable "x".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_94.png',
        question: 'Given the next code, what will happen if we use the operator "new" and the memory cannot be allocated?',
        answers: [
            'It prints: Error allocating memory',
            'It prints: Standard exception',
            'It prints: Unknown exception',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Error allocating memory" precisely for that reason.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_95.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0 10',
            'It prints: 11',
            'Compilation error',
            'None of these '
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0 10" because are the values of attributes "i" and "x" and its data types are compatible.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_96.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: Hello',
            'It prints: HelloWorld',
            'It prints: WorldHello',
            'It prints: WorldHelloWorld'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "HelloWorld" because both variables are added to "s2".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_97.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: 2',
            'It prints: 3'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0" because the loop "for" assigns 0 value to all positions in "t".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_98.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 36',
            'It prints: 14',
            'It prints: 16',
            'Compilation error'
        ],
        corrects: ['D'],
        feedback: [
            'Program throw a compilation error because has a syntactic error in the output operation.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_99.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1',
            'It prints: 0',
            'It prints: ?1',
            'Compilation error'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "0" because it\'s the default value of definition declaration.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_100.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: My exception',
            'It prints: 0',
            'It prints: 1',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "My exception" because the catch block uses standard exception "what()" method.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_101.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: AB',
            'It prints: AA',
            'It prints: BA',
            'It prints: BB'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "AA" because the "print" method in the class "B" is virtual.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_102.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints address of x',
            'It prints: 1',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0" because cout outputs the pointer "ptr" that points to const "x".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_103.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0 ',
            'It prints: 1',
            'It prints: -1',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0" the loop "for" run until "i" is 0.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_104.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1',
            'It prints: 121',
            'It prints: 111',
            'It prints: 2 '
        ],
        corrects: ['B'],
        feedback: [
            'It prints "121" because it concatenates the value of x three times from classes "C", "A" and "B" and its values are 1 from the constructor of "C", 2 from the overload of "A" and 1 from the constructor of "B".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_105.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 5 1.5',
            'It prints: 3.14 10',
            'Compilation error',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "5 1.5" the value of "x" in "myNamespace1" is 5 and the value of "y" in "myNamespace2" is 1.5.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_106.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: 2',
            'It prints: 0.5'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "1" because all operations are executed from left to right as no operator takes precedence over another.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_107.png',
        question: 'What is the output of the program?',
        answers: [
            'Garbage value',
            'It prints: AlanAlan',
            'It prints: Alan',
            'It prints: Al'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "AlanAlan" because the "obj1" uses its "Print()" method and the pointer "obj2" points to the same method.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_108.png',
        question: 'What will the variable "age" be in class B?',
        answers: [
            'public',
            'private',
            'protected',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'It\'s protected because "B" inherits from "A" and is using protected in its declaration.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_109.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 20',
            'It prints: 10',
            'Compilation error at line 8',
            'It prints address of ptr'
        ],
        corrects: ['C'],
        feedback: [
            'The programs has a compilation error at line 8 because the pointer ptr is a constant and can\'t to be reassigned.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_110.png',
        question: 'What is the output of the program given below?',
        answers: [
            '1010',
            '101010',
            '0510',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'It prints 0510 because these are the values of "i" in each of the three contexts where it is assigned a value.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_111.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: from First',
            'It prints: from Firstfrom First',
            'It prints: from Secondfrom Second',
            'It prints: from Second'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "from Secondfrom Second" because the method "Print" is invoked twice from object "t" which its class is "Second".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_112.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 2',
            'It prints: 4',
            'It prints: 0',
            'It prints: 1'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "4" because the function "fun" multiply the pointer "x" on itself that points to the value 2.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_113.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1 1.5',
            'It prints: 2 1.5',
            'It prints: 3 3',
            'It prints: 0 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "3 3" because the addition operator is overloaded to sum the "re" and "im" attributes of the "complex" class.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_114.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 12',
            'It prints: 1',
            'It prints: 0',
            'No output'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "12" the loop for is executed twice and therefore "cout" outputs the values 1 and 2.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_115.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 2',
            'It prints: 1',
            'It prints: 10'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "1" because because the "compare" function returns the result of the comparison between the arguments "10" and "20", which, as it is true, returns the value 1.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_116.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 5, 5, 10.00',
            'It prints: 5.9, 5, 10',
            'It prints: 6, 5, 10',
            'It prints: 6, 5, 10.00'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "5.9, 5, 10" because "x" truncates the value of "f" to 5.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_117.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Alan',
            'It prints: 111',
            'It prints: 011Alan111Bob',
            'It prints: 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "011Alan111Bob" because each "print" function goes through the size of the string that is passed in each instance of each object.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_118.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: BB',
            'It prints: AA',
            'It prints: BC',
            'It prints: AB'
        ],
        corrects: [' C'],
        feedback: [
            'It prints "BC" because in the first invocation of the "print" method the object "obj" points to an object of class "B" and in the second invocation it points to an object of class "C".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_119.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: 2020',
            'It prints: 1020',
            'It prints: 20',
            'It prints: 10'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "2020" because the "Print" method returns the static age attribute which is set to 20.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_120.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 123',
            'It prints: 1',
            'It prints: ?123',
            'Compilation error'
        ],
        corrects: ['D'],
        feedback: [
            'Compilation error because "x" is a private member of class "A" and it can\'t be used in class "B".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_121.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: 3, 2',
            'It prints: 4, 2',
            'It prints: 3, 3',
            'It prints: 9, 2'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "4, 2" because "SQR" multiply the received argument of "y" by itself.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_122.png',
        question: 'What will be the output of the program?',
        answers: [
            '012345',
            '0123',
            '5',
            '6'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "012345" because the loop "for" returns all values of "i" during the iteration five times.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_123.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1020',
            'It prints: 105',
            'It prints: 10',
            'It prints: 20'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "10" the "Print" method from object "a" returns the value of "age" which previously is set to 10 through "setAge" method.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_124.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1 0',
            'It prints: 1 1',
            'It prints: 0 0',
            'Compilation error'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "0 0" because "print" method outputs the values of "re" and "im" separated by white space and both values are 0 by default.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_125.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 34',
            'It prints: 1',
            'It prints: 3'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "1" because the second increment over "i" isn\'t executed since the "goto lab" instruction advances the execution of the program after "lab:".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_126.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: Hello',
            'It prints: World',
            'It prints: HW',
            'It prints: World\0World'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Hello" because the escape sequence "\0" indicates the end of the string to save memory space.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_127.png',
        question: 'If there is one, point out an error in the program',
        answers: [
            'No Error',
            'Use of undeclared identifier \'i\'',
            'Illegal use of \'continue\'',
            'Illegal use of \'break\''
        ],
        corrects: ['B'],
        feedback: [
            'It throws "Use of undeclared identifier \'i\'" becuse "i" isn\'t declared neither in the switch fabric nor before.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_128.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 4John',
            'It prints: 2John',
            'It prints: 23',
            'It prints: 43'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "43" because "Print" method outputs "y" plus "z" from object "b" which its class is "B" so the value is 3 to "y" and "z" is 3 because is linked to "A" class.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_129.png',
        question: 'Which code, inserted at line 10, generate the output "50"?',
        answers: [
            'friend void setAge(Base ob);',
            'friend void setAge(Base *ob);',
            'friend void setAge(Base &ob);',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'Must be "friend void setAge(Base &ob)" because add character 0 to 5.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_130.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Constructorfrom First',
            'It prints: Constructor',
            'It prints: from First',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Constructorfrom First" because the Print methods it is executed twice, the first one in the constructor and the second one in the method of the same name.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_131.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 05',
            'It prints: 012345',
            'It prints: 01245',
            'It prints: 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "01245" because the function "fun" outputs "i" values that are incremented by loop "for" from 0 to 5 but, when "i" is 3, the function breaks execution.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_132.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'Compilation error',
            'It prints: ?1',
            'It prints: 4321',
            'It prints: 1'
        ],
        corrects: ['A'],
        feedback: [
            'Compiler throw unexpected expression "i ? ?".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_133.png',
        question: 'What will happen when you attempt to compile and run the following code?',
        answers: [
            'It will print: Hello World',
            'It will print: Hello',
            'It will print: World',
            'It will print: HW'
        ],
        corrects: ['A'],
        feedback: [
            'It will print "Hello World" because the "fun" function adds its two parameters and when it is invoked the value of "s" and the string "World" are used as arguments.'
        ]
    },
    {
        type: 'multi',
        pic: null,
        question: 'What is not inherited from the base class?',
        answers: [
            'constructor',
            'destructor',
            'operator=()',
            'operator+()'
        ],
        corrects: ['A','B','C',''],
        feedback: [
            '"A", "B" and "C" are corrects because only the overload "+" operator can be inherit.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_135.png',
        question: 'How many times will the program print "HELLO"?',
        answers: [
            '65536',
            '32769',
            '1',
            'Till stack overflows'
        ],
        corrects: ['D'],
        feedback: [
            'The program prints "HELLO" until stack overflows memory occurs.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_136.png',
        question: 'What is the output of the program?',
        answers: [
            'Garbage value',
            'It prints: A',
            'It prints: A 65',
            'Compilation error'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "A" because "Print" method outputs the "c" attribute which by default is "A".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_137.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: JohnSteve',
            'It prints: AlanAlan',
            'It prints: AlanSteve',
            'It prints: JohnAlan'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "JohnSteve" because the first time the "print" method is invoked is done on a pointer of an object of class "First" whose default value is "John" in the "name" attribute and the next time, "name" changes to "Steve "after using the" setName "method.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_138.png',
        question: 'What is the output of the program given below?',
        answers: [
            '0',
            '11',
            '?10',
            '?11'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "?10" because a conversion to the type "int" of the variable "f" occurs.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_139.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: Hoto',
            'It prints: Ht',
            'It prints: toHo',
            'It prints: Howto'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "Howto" because in the first iteration of the "for" loop, when "i" equals 0, "ow" is added to the variable "s" and, in the next iteration, "o" is added.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_140.png',
        question: 'How many times will "HELLO" be printed?',
        answers: [
            '1',
            '2',
            '0',
            '20'
        ],
        corrects: ['C'],
        feedback: [
            'It prints 0 times because if-else structure continue to next iteration or break exit loop and therefore "HELLO" is never printed'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_141.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 4,1',
            'It prints: 4,0.7',
            'It prints: 4,0',
            'It prints: 0,4'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "4,1" becuase "k" has the value of the invocation of the "op" function with arguments 2 and 2, and the value of "f" is truncated by passing it as an argument of type int to the "op" function.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_142.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: -1',
            'It prints: 2'
        ],
        corrects: ['D'],
        feedback: [
            'Code prints 2 because if statement compares i++ width 1, and this expression returns true because i is equal to 1 after increment operator. Therefore, first cout statement is exectuted and i, after increment operator, is equal to 2.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_143.png',
        question: 'Which code, inserted at line 12, generates the output "5b"?',
        answers: [
            'cout << myNamespace1::var << var;',
            'cout << var << var;',
            'cout << myNamespace1::var << myNamespace2::var;',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'Must be "cout << myNamespace1::var << myNamespace2::var;" to concatenate both values.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_144.png',
        question: 'What will be the output of the program?',
        answers: [
            '?10 5',
            '5 ?10',
            'Compilation error',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'The output program will be compilation error because in x declaration statement is used ? operator isolated and this way doesn\'t exists in C++'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_145.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hello:50',
            'It prints: Hello:10',
            'It prints: Hello:5',
            'Compilation error'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "Hello:5" because the pointer "o" is instantiated from the class "BaseC" and is instantiated with the value of 5 and passed as an argument to the "fun" function.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_146.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: from First',
            'It prints: from Firstfrom First',
            'It prints: from Firstfrom Second',
            'It prints: from Secondfrom Second'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "from Firstfrom Second" because the "fun" function is invoked on objects of class "First" and "Second" in that order.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_147.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 20',
            'It prints: 10',
            'It prints: 1020',
            'It prints: 2010'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "20" because the "min" function returns "b" wich its value is the second argument, therefore 20.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_148.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 10aa',
            'It prints: 10a20a',
            'It prints: 1a',
            'Compilation error'
        ],
        corrects: ['D'],
        feedback: [
            'Program throws a compilation error because excess elements in union initializer at "union un u3 = {20, \'a\'}".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_149.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 3',
            'It prints: 2',
            'It prints: 1'
        ],
        corrects: ['C'],
        feedback: [
            'Programs prints 2 because is the highest value that takes i and therefore j take the same because if j is distintc to i, sentence break ends the for loop'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_150.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 3,1',
            'Compilation error',
            'It prints: 3,0',
            'It prints: 0,0'
        ],
        corrects: ['B'],
        feedback: [
            'Programs throws a compilation error at "return x ? y;"'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_151.png',
        question: 'Which code, inserted at line 10, generates the output "2?1"?',
        answers: [
            'class B : private A {',
            'class B : public A {',
            'class B : protected A {',
            'class B {'
        ],
        corrects: ['B'],
        feedback: [
            'Must be "class B : public A {" so in this case, by inheriting class B from class A, object "b" will be able to use attributes "y" and "z".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_152.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: from First',
            'It prints: from Firstfrom First',
            'It prints: from Firstfrom Second',
            'It prints: from Secondfrom Second'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "from Firstfrom First" because the second time the "fun" function is invoked, it receives as an argument a pointer that, even if it is of class "Second", points to an instance of class "First".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_153.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 2',
            'It prints: 5',
            'It prints: 10',
            'It prints: 0'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "2" because the variable "b" receives from the function "f" the division of 20 by 10.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_154.png',
        question: 'If there is one, point out an error in the program',
        answers: [
            'Error in "if" statement',
            'Error in "for" loop',
            'No error',
            'Error in break statement'
        ],
        corrects: ['C'],
        feedback: [
            'The program has no errors and the loop "for" breaks when "i" get the value 5.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_155.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: AB',
            'It prints: AA',
            'It prints: BA',
            'It prints: BB'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "AB" because the pointer "obj" is linked to "ob1" that is an object from "A" class and prints "A" and later it points to the object "ob2" which is from class "B" and prints "B".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_156.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'Error: in prototype declaration unknown struct person',
            'Error: in structure',
            'It prints: Steve 31',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "Steve 31" because the "set" function adds a unit to the age attribute of the pointer it receives as an argument.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_157.png',
        question: 'What happens if you try to compile and run this program?',
        answers: [
            'It prints: Test',
            'Compilation fails',
            'Program terminates abnormally',
            'None of these'
        ],
        corrects: ['B'],
        feedback: [
            'Compilation fails because uses of undeclared identifier "print" because this function is declarated after main method.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_158.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 10',
            'It prints: 2',
            'It prints: 6',
            'It prints: 5'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "10" because the constructor function of class "A" assigns to the attribute "z" the multiplication of "x" by "y", and 2 and 5 are the values passed as arguments in the instance of the object "a".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_159.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: HelloWorld',
            'It prints: Hello',
            'It prints: World',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "HelloWorld" because both variables are added to "s2".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_160.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: How',
            'It prints: Ht',
            'It prints: Hoto',
            'It prints: Howtow'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "Howtow" because in the first iteration of the "for" loop, when "i" equals 0, "ow" is added to the variable "s" and, in the next iteration, "ow" is added.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_161.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1,2',
            'It prints: ?1,1',
            'It prints: 1,1',
            'It prints: 3,3'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "3,3" because the function "op" returns the sum of its two parameters and the variables "k" and "l" receive the result of the function with the arguments of "x" and "y", in this case 1 and 2.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_162.png',
        question: 'What will the variable "y" be in class B?',
        answers: [
            'public',
            'private',
            'protected',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'It\'s protected because "B" class inherits from "A" class.'
        ]
    },
    {
        type: 'multi',
        pic: 'assets/pic_163.png',
        question: 'Which of the following structures are correct?',
        answers: [
            '1',
            '2',
            '3',
            'All of these'
        ],
        corrects: ['A','B','',''],
        feedback: [
            'Structures 1 and 2 are correct unlike structure 3 which has a syntax error in the declaration of "i".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_164.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0Bill',
            'Compilation error',
            'It prints: Bill0',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0Bill" because the two invocations of the "Print" method are made after the use of the "set" function, with which the values of age and name are 0 and Bill.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_165.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 05',
            'It prints: 0',
            'It prints: 5',
            'It prints: 15'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "05" because the object "b" set on its constructor method 5 to "y" and "x" is 0 by default.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_166.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Test',
            'It prints: T',
            'It prints: st',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Test" because is the value which receives the "print" function as an argument.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_167.png',
        question: 'What is the output of the program given below?',
        answers: [
            '1234',
            'compilation fails',
            '0210',
            '1322'
        ],
        corrects: ['C'],
        feedback: [
            'It prints 0210 because they are the positions of the enum "state".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_168.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: 10',
            'It prints: ?1'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "1" because iterating the "for" loop assigns the same number to "i" as the position in the index.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_169.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 3, 10',
            'It prints: 3.99, 10',
            'It prints: 4, 10.0',
            'It prints: 4, 10'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "3, 10" because the value of "d" is truncated when passing it to type int and the string ", " and the value of "y" are concatenated.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_170.png',
        question: 'What is the output of the program if character "1" is supplied as input?',
        answers: [
            'It prints: float exception. Exception Nr. 5.2',
            'It prints: int exception. Exception Nr. 20',
            'It prints: An exception occurred',
            'Compilation Error'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "int exception. Exception Nr. 20" because case 1 is matched.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_171.png',
        question: 'Which of the following is a correct way to define the function fun() in the program below?',
        answers: [
            'void fun(int *p[2]) {}',
            'void fun(int *p[2][2]) {}',
            'void fun(int *p[][2]) {}',
            'void fun(int p[][2]) {}'
        ],
        corrects: ['D'],
        feedback: [
            'Must be "void fun(int p[][2]) {}" because "s" is a bidirectional array.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_172.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: B',
            'It prints: A',
            'It prints: AB',
            'It prints: BA'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "B" because when the print method is invoked the object "obj" points to an object of class "B".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_173.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Bob55',
            'It prints: Bob1',
            'It prints: 10',
            'Compilation error'
        ],
        corrects: ['D'],
        feedback: [
            'The programs throws a compilation error because "age" is a private member of "A".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_174.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: -1',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "0" because it uses the function "fun" whith 0 as an argument.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_175.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 30',
            'It prints: John',
            'It prints: John 31',
            'It prints: John 30John 30'
        ],
        corrects: ['D'],
        feedback: [
            'It prints "John 30John 30" because the "Print" method is invoked twice in "for" loop on "t" object instantiated from "First" class.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_176.png',
        question: 'What will happen when you attempt to compile and run the following code?',
        answers: [
            'It will print: 100',
            'It will print: 101',
            'It will print: 10',
            'It will print: 1'
        ],
        corrects: ['A'],
        feedback: [
            'It will print "100" because "fun" returns the square of the value passed as an argument.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_177.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: 10',
            'It prints: ?1',
            'It prints: 0',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "10" because is the value thar receives the object "o" when its "seti" method is invoked and then it\'s output in "Print".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_178.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Sample text',
            'It prints: Sample',
            'It prints: text',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Sample text" because it\'s the value of "s" when "Print" is invoked on "o" which is instantiated without parameter.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_179.png',
        question: 'What is the output of the program if characters \'h\', \'e\', \'l\', \'l\' , \'o\' and enter are supplied as input?',
        answers: [
            'It prints: hello',
            'It prints: olleh',
            'It prints: h',
            'It prints: o'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "hello", the "f" function doesn\'t change the order in which characters are entered.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_180.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hello',
            'It prints: world',
            'It prints: End',
            'It prints: E '
        ],
        corrects: ['B'],
        feedback: [
            'It prints "world" because case 2 is matched.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_181.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 5 1.5',
            'It prints: 3.14 1.5',
            'It prints: 5 10',
            'It prints: 5'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "5 10" because "myNamespace1" is used on "namespace".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_182.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 30',
            'It prints: John',
            'It prints: John 30',
            'It prints: John 30John 30'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "John 30" because "Print" method is invoked on an object instantiated from "First Class".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_183.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: 2 2',
            'It prints: 1 1',
            'It prints: 1 0',
            'It prints: 0 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "1 0" because because "Print" method is invoked on an object instantiated from "First Class".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_184.png',
        question: 'What happens if characters \'w\', \'o\', \'r\', \'l\' and \'d\' are entered as input?',
        answers: [
            'It prints: Helloworld',
            'It prints: Hello',
            'It prints: world',
            'Compilation error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Helloworld" because "s2" receives the characters from the "getline" method through the "cin" object and is concatenated after "s1".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_185.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Text',
            'It prints: Test',
            'It prints: TextTest',
            'Garbage value'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "Test" because is the value with which the "obj" object is instantiated from the "SampleClass" class.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_186.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 2',
            'It prints: 28',
            'It prints: 8',
            'It prints: 6'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "28" because the first invocation of "mul" uses the argument 1 and the default value of the parameter, which is 2. The second invocation multiplies 2 by 4 and both values are concatenated.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_187.png',
        question: 'Which code, inserted inside "Print" method, generates the output "23"?',
        answers: [
            'cout << y << z;',
            'cout << y << A::z;',
            'cout << A::y << A::z;',
            'cout << B::y << B::z;'
        ],
        corrects: ['C'],
        feedback: [
            'Must be "cout << A::y << A::z;" to use both values that, by default, are 2 and 3.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_188.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 10',
            'It prints: 20',
            'It prints: 5',
            'It prints: 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "5" because "min" function returns lowest value of 5 and 20 and, recursively, 5 is less than 10.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_189.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hoto',
            'It prints: Ho',
            'It prints: to',
            'It prints: Ht'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "Hoto" becuase the "for" loop is iterated two times.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_190.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 202020',
            'It prints: 012',
            'It prints: 024',
            'It prints: 0'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "024" becuase the "for" loop is iterated three times and the function "f" returns the sum of the argument by itself..'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_191.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 42 ',
            'It prints: 44',
            'It prints: 22 ',
            'It prints: 2'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "42" because the method "Print" is invoked on an object that has the values of "x" and "y" by default of the class "B".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_192.png',
        question: 'What is the output of the program if character 3 is supplied as input?',
        answers: [
            'It prints: float exception. Exception Nr. ',
            'It prints: int exception. Exception Nr.',
            'It prints: An exception occurred. ',
            'It prints: float exception. Exception Nr.'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "An exception occurred" becuase case 3 is matched and "a" value is catched by default "..." paramater.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_193.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 4',
            'It prints: 0',
            'It prints: 3',
            'It prints: 2'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "4" because the "print" method is invoked on an object of class A and in it, "z" is the sum of "x" plus "y" whose default values are both 2.'
        ]
    },
    {
        type: 'simple',
        pic: null,
        question: 'Which of the following operations is INCORRECT?',
        answers: [
            'int i=15;',
            'long int k=123',
            'float f=12,2;',
            'double d=12'
        ],
        corrects: ['C'],
        feedback: [
            'The value assigned to f variable is incorrect, float values use the dot character to separate the integer part from the decimal part.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_195.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 1',
            'It prints: 100',
            'It prints: 0',
            'It prints: 10'
        ],
        corrects: ['B'],
        feedback: [
            'It prints 100 because cout output it before next delete\'s sentence.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_196.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hello',
            'It prints: world',
            'It prints: End',
            'It prints: Helloworld'
        ],
        corrects: ['C'],
        feedback: [
            'As the value of i doesn\'t match any of the cases, it returns the default value, that is, End'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_197.png',
        question: 'What is the output of the program?',
        answers: [
            'It prints: 123',
            'It prints: 23',
            'It prints: 3',
            'It prints: 2'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "23" because "PRINT" is executed two times with values of "y" and "z".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_198.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 10',
            'It prints: 2',
            'It prints: 5',
            'It prints: 1'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "10" because it uses the "print" method on an object of class "B" that is instantiated with the values 2 and 5 that therefore set z to 10.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_199.png',
        question: 'Which code, inserted at "main" method, generates the output "AB"',
        answers: [
            'ob2->A::Print();',
            'ob2.B::Print();',
            'ob2->B::Print();',
            'ob2.A::Print();'
        ],
        corrects: ['D'],
        feedback: [
            'Must be "ob2.A::Print();" to be able to use first the "Print" method of class "A".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_200.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 9',
            'It prints: 9.9',
            'Compilation error',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'Print 9 because the expression defined with the ternary operator is not satisfied.'
        ]
    },
    {
        type: 'multi',
        pic: null,
        question: 'Which definitions are correct?',
        answers: [
            'int age;',
            'int double;',
            'char c;',
            'int char;'
        ],
        corrects: ['A','C'],
        feedback: [
            'B an D options are incorrect because a variable can\'t use a reserved word as identifier.'
        ]
    },
    {
        type: 'multi',
        pic: 'assets/pic_202.png',
        question: 'Which code, inserted at line 8, generates the output "100"?',
        answers: [
            'cout << fun(*x);',
            'cout << fun(10);',
            'cout << fun(5);',
            'cout << fun(y);'
        ],
        corrects: ['A','B'],
        feedback: [
            'The cout object will return 100 when we pass the arguments 10 or x pointer to the fun function.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_203.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 0',
            'It prints: 1',
            'It prints: -1',
            'Compilation error'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "1" because the comparison of the "fun" function returns 1.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_204.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hello World6',
            'It prints: Hello',
            'It prints: World',
            'It prints: Hello World5'
        ],
        corrects: ['A'],
        feedback: [
            'The cout object outputs Hello World6 because concatenating the string Hello World whith the result of the expression i + 1.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_205.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Constructorfrom First',
            'It prints: Constructorfrom FirstDestructor',
            'It prints: Constructorfrom FirstDestructorDestructor',
            'Compilation error at line 16'
        ],
        corrects: ['B'],
        feedback: [
            'As the code doesn\'t incorporate line breaks in the messages, it returns the union first of the constructor message, then the Print method message and finally the destructor message.'
        ]
    },
    {
        type: 'multi',
        pic: 'assets/pic_206.png',
        question: 'Which of the following is a user defined data type?',
        answers: [
            'struct person { char name[20]; int age; };',
            'int l=2;',
            'enum color {red,blue, green};',
            'char c;'
        ],
        corrects: ['A','C'],
        feedback: [
            'A and C are the correct answers because B and D are primitive data types.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_207.png',
        question: 'What will happen when you attempt to compile and run the following code?',
        answers: [
            'It will print:"123"',
            'compilation error',
            'It will print:"021"',
            'It will print:"132"'
        ],
        corrects: ['B'],
        feedback: [
            'Program throws compilation error because uses of undeclared identifier "s4".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_208.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: BB',
            'It prints: A',
            'It prints: AB',
            'Compilation error'
        ],
        corrects: ['D'],
        feedback: [
            'Program throws compilation error because don\'t implemented pure virtual method "Print" in "C".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_209.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'compilation fails',
            'It prints: 12300',
            'It prints: 12345',
            'It prints: 00000'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "12300" because the for loop is iterated 5 times, it returns the first 3 characters and completes the next 2 with the value 0.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_210.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: A no parametersA string parameterA no parametersB string parameter',
            'It prints: A no parametersB string parameter',
            'It prints: B string parameter',
            'It prints: B no parameter'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "A no parametersA string parameterA no parametersB string parameter" because it is the order of the messages emitted by the constructor methods of class "A", twice, one with no argument and the other with a string argument, and of class "B", later, that will be emitted again by class " A "without argument and class" B "with string.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_211.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 01',
            'It prints: 1',
            'It prints: 0 ',
            'It prints: 0123'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "0" becuase the fun function returns the 0 position of the pointer.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_212.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: 10',
            'It prints: 20',
            'It prints: 1020',
            'It prints: 2010'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "1020" because the first time the "print" method is invoked the value of "age" has been set to 10 and the second time it has the default value of "Base" class.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_213.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: A A',
            'It prints: B B',
            'It prints: A B',
            'It prints: B A'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "B B" because the print method is called twice by the for loop on a pointer of the "B" class.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_214.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: OK',
            'It prints: ERROR',
            'Compilation error',
            'Runtime error'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "OK" because the overload of the "==" operator allows comparing the attributes "re" and "im" which are the same in objects "c1" and "c2" since they have the default values.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_215.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints:"43210"',
            'It prints:"3210"',
            'It prints: "3210?1"',
            'None of these'
        ],
        corrects: ['A'],
        feedback: [
            'It prints "43210" because "i" is reducing its value in the "while" loop to 0.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_216.png',
        question: 'What will happen when you attempt to compile and run the following code?',
        answers: [
            'Compilation error',
            'It will print: Hello',
            'It will print: world',
            'It will print: 0'
        ],
        corrects: ['A'],
        feedback: [
            'Program thorws a compilation error because uses an invalid token at start of a preprocessor expression.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_217.png',
        question: 'What will be the output of the program?',
        answers: [
            '3',
            '5',
            '4',
            '6'
        ],
        corrects: ['C'],
        feedback: [
            'It prints "4" because the "fun" function returns the "k" value, which is 3, incremented by one.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_218.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: el',
            'It prints: Hello',
            'It prints: H',
            'It prints: o'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "Hello" because the "while" loop prints all characters as long as the pointer has value.'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_219.png',
        question: 'What happens when you attempt to compile and run the following code?',
        answers: [
            'It prints: Hoto',
            'It prints: toHow',
            'It prints: Ht',
            'It prints: to'
        ],
        corrects: ['B'],
        feedback: [
            'It prints "toHow" because the "swap" method swaps the positions of "s1".'
        ]
    },
    {
        type: 'simple',
        pic: 'assets/pic_220.png',
        question: 'What will variable "y" be in class B?',
        answers: [
            'public',
            'private',
            'protected',
            'None of these'
        ],
        corrects: ['C'],
        feedback: [
            'Variable "y" is protected in A class, because B is a class inherited from A, the attribute keeps that qualifier.'
        ]
    }
];

    constructor() { }

    getPreguntas() {
        return this.preguntasMaster;
    }

    // getPreguntasDrag() {
    //     return this.preguntasDrag;
    // }

}
