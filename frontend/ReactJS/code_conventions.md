# Always use the same coding conventions for all your NodeJS projects.

## Variable Names

- I prefer using camelCase for frontend javascript, because frontend frameworks as react or jquery uses camelCase for their attributes,etc.

Example: dateOfBirth

- All names start with a letter.

fullPrice = price + (price * tax);

- React classes or function's components must use PascalCase. Example: <TheClass /> 

- Avoid call elements as <TheClass ></TheClass>. Instead use <TheClass /> 

## Spaces Around Operators

 - Always put spaces around operators ( = + - * / ), and after commas:

Examples:

```
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];
```

## Code Indentation

- Always use 2 spaces for indentation of code blocks:

Functions:

```
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

- Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.

## Statement Rules

- Function length cannot be longer than 20 lines.

General rules for simple statements:

- Always end a simple statement with a semicolon.

Examples:

```
var values = ["Volvo", "Saab", "Fiat"];

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

General rules for complex (compound) statements:

- Put the opening bracket at the end of the first line.
- Use one space before the opening bracket.
- Put the closing bracket on a new line, without leading spaces.
- Do not end a complex statement with a semicolon.

Functions:

```
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

Loops:

```
for (i = 0; i < 5; i++) {
  x += i;
}
```

Conditionals:

```
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## Object Rules

General rules for object definitions:

- Place the opening bracket on the same line as the object name.
- Use colon plus one space between each property and its value.
- Use quotes around string values, not around numeric values.
- Do not add a comma after the last property-value pair.
- Place the closing bracket on a new line, without leading spaces.
- Always end an object definition with a semicolon.

Example

```
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

- Short objects can be written compressed, on one line, using spaces only between properties, like this:

```
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

## General Rules

- Line lengths cannot be longer than 80 lines


- If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma. You should indent the second part.

Example

```
document.getElementById("demo").innerHTML =
  "Hello Dolly.";
```
## File Extensions

- HTML files should have a .html extension (.htm is allowed).

- CSS files should have a .css extension.

- JavaScript files should have a .js extension.

- Use Lower Case File Names

Most web servers (Apache, Unix) are case sensitive about file names:

Example:

```
london.jpg cannot be accessed as London.jpg.
```

Other web servers (Microsoft, IIS) are not case sensitive:

```
london.jpg can be accessed as London.jpg or london.jpg.
```

- If you use a mix of upper and lower case, you have to be extremely consistent.

If you move from a case insensitive, to a case sensitive server, even small errors can break your web site.

To avoid these problems, always use lower case file names (if possible).

## Performance

- Coding conventions are not used by computers. Most rules have little impact on the execution of programs.

- Indentation and extra spaces are not significant in small scripts.

- For code in development, readability should be preferred. Larger production scripts should be minified.