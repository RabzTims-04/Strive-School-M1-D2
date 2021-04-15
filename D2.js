/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/*
In JavaScript 'data type' refers to what the type of our variable is, for example whether our variable is a number, a text, any operator etc.   
There are many different Data types. But the data types which are used most are:
1. Numbers: These include whole numbers, exponential numbers as well as decimal numbers. Example: 1, 1.6, 1.2345, 0.0098, 5e6 etc
In JavaScript we write it as:
                             let x = 5
                             let y = 5e6
                             let z = 0.0098

2. Strings: It is just a series of characters which can form a text or a sentence. Exmaple: Hello World, My name is Rabia, Today is Day 2 of our lecture.
In JavaScript we write it as:
                             let name1 = "Hello World"
                             let name2 = "My name is Rabia"
                             let name3 = "Today is Day 2 of our lecture"
Note that for strings we write everything within Quotation marks. In order for it to understand it as a string, we need to either write it in "" , '' or `` . Otherwise it will not consider it as string type.

3. Boolean: This data type only takes two values, either TRUE or FALSE.
Example in JavaScript:
                            let num1 = 7 (number type)
                            let num2 = 9 (number type)
                            if we execute this (num1 === num2), it will return value as FALSE(Boolean type).
                            Similarly
                            if we execute (num1 < num2 ), it will return value TRUE(Boolean type).

4. Undefined: When you don't define your variable but just declare it then out variable is empty. Which means it is of type Undefined.
Example in JavaScript:      let data1  (undefined type)
                            let data2  (undefined type)
                            let data3 = undefined (undefined type)
We can later define it the variable type and then it won't be unefined anymore. Example
                             data1 = 2
                             data2 = "Number"
                             data3 = "Now I am defined"
Now data1 is of type number and data2 and data3 are of type String.

5. Null: It is the non existence of the entire variable. You can set your varaible to null which means it is empty. For example:
                            let y = null
                            console.log(y) (It will give you a value of null)
                            
You can also check the typeof the variable with typeof() method.
typeof() of string is string, number is number, boolean is boolean, undefined is undefined and null is object.
 */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/*A varaible in JavaScript is like a box/container where we can store our values. Values can be of any type depending on the types discussed above. Variables can be named as we like but they should be meaningful and have certain restrictions. For example we can't name our variables as numbers only or with special characters like $, & etc
To declare a variable we need keywords like 'let' or 'const'. When declaring our variable with const, we cannot reassign that variable with any other value later in our code. But with let, we can reassign and change the value of our variable any time.
Example in JavaScript:
                      let variable1 = 123
                      ('let' is the keyword to assign 'variable1' which is our variable in which value '123' is stored and 'datatype' is number ) Here 
                      const variable2 = "This is a constant variable"
                      ('const' is the keyword to assign 'variable2' which is our variable in which value 'This is a constant variable' is stored and datatype is string)

                      now if I say:
                      variable1 = 345
                      my new value of variable1 is 345 and not 123.
                      but we cannot say:
                      variable2 = 345
                      This will give us an Error
We can also use multiple names to assign a variable by using camelCase method. Example:
                       let myFirstVariable = 123
Notice we tried writing my first variable, but as we cannot use spaces in between variable, so we use camelCase method.
Some other Examples in declaring variables:
                       let myNewVariableIs = "Hello" + " " + "World" (Output: Hello World)
                       let addNumbers = 4 + 3 (Output: 7)
                        
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

   let x = 12
   let y = 20
   let sum
   sum = x + y
   console.log(sum) 

   OR

   let sum = 12 + 20
   console.log(sum)


/* EXERCISE 4
Create a variable named x containing the number 12.
*/

 let x = 12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe"

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/


   let x = 12
   let subtraction = 12 - x 
   console.log(subtraction)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

   let name1 = "john"
   let name2 = "John" 
   console.log(name1 === name2) (Output = false)
   console.log(name1 === name2.toLowerCase()) (Output = true)
   

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/


let x = 8

if(x===1){
    console.log("One");
}
else if(x===2){
    console.log("Two");
    }
else if (x===3) {
    console.log("Three");    
} 
else if (x===4) {
    console.log("Four");    
}
else if (x===5) {
    console.log("Five");    
}
else if (x===6) {
    console.log("Six");    
}
else if (x===7) {
    console.log("Seven");    
}
else if (x===8) {
    console.log("Eight");    
}
else if (x===9) {
    console.log("Nine");    
}
else{
    console.log("Number is greater or equal to Ten");
}


/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

   let value1 = 7
   let value2 = 9

   let output = (value1 < value2) ? "This is true" : "This is false";
   console.log(output)
       
/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/