/* NOTE: Template literals are enclosed by backtick (`) characters instead of double or single quotes, allowing for the following:
1) multi-line strings
2) string interpolation
*/

const first = 'rafa'
const last = 'raja'
const greet = 'good morning'
// const name = first + ' ' + last
const name = `${first} wished ${greet} to ${last}`
console.log(name);

let message = 'hi my name is suma.\n my father name is abu taher.\n my mother name is jakia begum\n';
console.log(message);

message = `My name is suma.
My father name is abu taher.
My mother name is jakia begum.`

console.log(message);

const numbers = [1, 2, 3]
const student = {name: 'suma', father: 'abut taher'}

const result = `my name is ${student.name}. I'm my father's ${numbers[2]} no. child`

console.log(result);