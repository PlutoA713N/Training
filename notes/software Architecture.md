# Software Architecture
"Architecture is the fundamental organization of a system embodied in its components, their relationships to each other, and to the environment, and the principles guiding its design and evolution." [IEEE 1471]. 
By looking at 3 particular "ilities" (readability, reusability, and refactorability), we can form a hierarchy of architectural attributes that can give us a framework for thinking about our system's code and architecture.
and shows how we can form better code by thinking through these concepts hierarchically. 

## ReadAbility
In a code, we'll see the following parts when we consider reading others codes. Its the simplest way of assesing Code Quality and fixing it.


+ Formatting
+ Varible Names
+ Function names
+ Number of Function Arguments
+ Function length
+ Nested loops in a Function

1. Use prettier to make code formats understandable, in order to save time & money.
2. Use meaningful variable & function names, which clearly explains what it does.
3. In functions, take the arguments upto 3, if we consider more than 3, its hard to refactor the code latter.
4. A Function should perform ONE & Only ONE task at a time, avoid doing lot of things at a Time.
5. Use 2 nested loops in a function, Avoid using more than 2, cuz it leads to poor performance of a "For Loop" in order to understand the code

## Reusability
The modules in the code can be reused anywhere externally , without any modifications to it. The modules must perform one task at a time, it doesnt depend on any internal code, this makes code reusable ,more efficent and less prone errors.

## Refactorability

Reusable modules are all connected together as a whole system to run a software. But here if there any change in one module, it must not
effect the state of the other modules, these modules must work together as a whole without any side effects. What is
Side effect? A function changing the state of the global variables is called side effect.Some of the modules depends 
on these global varibles in order to function. we cant completely work without side effects, a program must produce 
some output. The things must be done in order to make code refactorable.

+ Isolated side effects
+ tests
+ static types

1. Static types can be minimised by using a statically typed alternative fo4 JavaScript.
2. Side effects also introduces coupling between modules, it makes one of the module to be completely depended on
   another module.it makes hard to test. it makes our system unpredictable, we are not aware how one module will
   change the whole system state. In order to reduce side effects is, one space to update the state of the global
   variables in our application.
3. Few tests are conducted to make it more refactorable.
 
