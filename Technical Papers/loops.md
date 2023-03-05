# Loops

A `Loop` is a Cycle of Operations, once these cycle of operations are started, these operations won't stop
until certain condition is reached. These cycle of operations keeps performing cycle of operations infinitely,
there's no condition to stop these cycles. It keeps on performing a repetative tasks or incrementing/decrementing
on a data structures. A terminating condition must be set before starting this ``loop``.There are different types 
of loops. Each performs a cycle of operations with differnt flow structres.

## For Loop
The ``For Loop`` is a basic loop used in almost every programming languages. It's body consists of a three statements,
which are 
1. Intilisation statement
2. Conditional statement
3. Incrementing/Decrementing statement.

These three controls the flow of the program in the ``For Loop``.
``` Javascript
   for( Initialisation; Conditions; Incrementing/Decrementing ){
     // Cycle of Operations
   }
   ```
**Intilisation** - It intilise a varibles with a value in inside of the loop.These variables can't be  accessed
outside of the `For Loop`. It's better to intilise them with `let` or `const` keywords.

**Conditions**  - These are the Conditions which stops the flow of the program.  The flow of the program continues 
until the condition is true, if the condition is false, it stops the flow of the program & exists the ``For Loop.``
  
**Incrementing/Decrementing** - It increments/decrements the statements such as initilisation statement. It keeps 
on Increments/decrements until the condition is true.

``` JavaScript
   for( const index = 0; index < 3; index++ ){
      console.log( index ); 
   }
   // Output -
   • 0
   • 1
   • 2
   ```

