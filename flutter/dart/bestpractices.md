NUNCA USAR KEYWORDS, A PESAR DE QUE SEAN TIER 1, 2 O 3 Y QUE ESTEN HABILITADAS EN EL SCOPE.

Type Object = any

si dejas var name = "manu", infiere el tipo String

Si no inicializas una variable = null mientras que no hayas prendido null safety.

Si lo prendiste, cada variable debe ser inicializada

Production code ignores the assert() call. During development, on the other hand, assert(condition) throws an exception if condition is false. For details, see Assert.

Podes no asignarle un valor al toque que lo instancias, pero tenes que hacerlo antes de usarlo.
Ejemplo:
```
int lineCount;

if (weLikeToCount) {
  lineCount = countLines();
} else {
  lineCount = 0;
}

print(lineCount);
```

late: When you mark a variable as late but initialize it at its declaration, then the initializer runs the first time the variable is used. This lazy initialization is handy in a couple of cases:

The variable might not be needed, and initializing it is costly.
You’re initializing an instance variable, and its initializer needs access to this.
In the following example, if the temperature variable is never used, then the expensive _readThermometer() function is never called:
```
// This is the program's only call to _readThermometer().
late String temperature = _readThermometer(); // Lazily initialized.
```

La verdad que no lo veo como una buena practica. Bah es una practica extrania. No deberias tener variables que no usas. Puede venir bien en casos que tengas superclases donde pueden haber flows que no se den nunca pero creo que si tenes clases o funciones con SRP, no deberia usarse mucho.

final and const: final is setted only once. const are setted in compile time constant. Consts are implcitly finals because they just are setted when compile. 

Por lo general usas const en constantes tipo cuentas o PI o dias. O por ej:

var foo = const [];
final bar = const [];
const baz = []; // Equivalent to `const []`

TIPS:
	- el const delante del no es obligatorio.
	- Podes cambiar el valor de foo, por ej:

foo = [1,2,3];

pero no de baz

baz = [42]; // Error: Constant variables can't be assigned a value.

existe una especie de backsticks en dart, pero sin `. Por ejemplo: '$s' si s es variable, se mete dentro del string. Si s es una expresion, va '${s}'

Ejemplo:
```
var s = 'string interpolation';

assert('Dart has $s, which is very handy.' ==
    'Dart has string interpolation, ' +
        'which is very handy.');
assert('That deserves all caps. ' +
        '${s.toUpperCase()} is very handy!' ==
    'That deserves all caps. ' +
        'STRING INTERPOLATION is very handy!');
```
 Note: The == operator tests whether two objects are equivalent. Two strings are equivalent if they contain the same sequence of code units.

 You can concatenate strings using adjacent string literals or the + operator:

var s1 = 'String '
    'concatenation'
    " works even over line breaks.";
assert(s1 ==
    'String concatenation works even over '
        'line breaks.');

var s2 = 'The + operator ' + 'works, as well.';
assert(s2 == 'The + operator works, as well.');

Another way to create a multi-line string: use a triple quote with either single or double quotation marks:

var s1 = '''
You can create
multi-line strings like this one.
''';

var s2 = """This is also a
multi-line string.""";

??????? TIENEN ALGO PARA INCLUIR ' Y " EN UN MISMO STRING COMO TIENE JS CON `? ??????

Literal strings are compile-time constants, as long as any interpolated expression is a compile-time constant that evaluates to null or a numeric, string, or boolean value.

// These work in a const string.
const aConstNum = 0;
const aConstBool = true;
const aConstString = 'a constant string';

// These do NOT work in a const string.
var aNum = 0;
var aBool = true;
var aString = 'a string';
const aConstList = [1, 2, 3];

const validConstString = '$aConstNum $aConstBool $aConstString';
// const invalidConstString = '$aNum $aBool $aString $aConstList';

Lists or Arrays:

Son como los array literals de javascript. Por inferencia, dart toma los arrays inferidos como array  de ints.

El spread operator funciona como en js. SI no estas seguro si el objeto a spredear es null o no, pones ...?objeto para prevenir exceptions. Sino va ...list

collection if and collection for

```
var nav = [
  'Home',
  'Furniture',
  'Plants',
  if (promoActive) 'Outlet'
];
```
```
var listOfInts = [1, 2, 3];
var listOfStrings = [
  '#0',
  for (var i in listOfInts) '#$i'
];
assert(listOfStrings[1] == '#1');
```
ta buenardo eso eh

Set: A set in Dart is an unordered collection of unique items. 

Map: dictionaries key value.

Note: Dart infers that gifts has the type Map<String, String> and nobleGases has the type Map<int, String>. If you try to add the wrong type of value to either map, the analyzer or runtime raises an error. For more information, read about type inference.


osea q podes tener como keys ints, no como javascript que te lo castea a string

If you look for a key that isn’t in a map, you get a null in return:

Use .length to get the number of key-value pairs in the map:

Maps support spread operators (... and ...?) and collection if and for, just like lists do. For details and examples, see the spread operator proposal and the control flow collections proposal.

Symbols
A Symbol object represents an operator or identifier declared in a Dart program. You might never need to use symbols, but they’re invaluable for APIs that refer to identifiers by name, because minification changes identifier names but not identifier symbols.

To get the symbol for an identifier, use a symbol literal, which is just # followed by the identifier:

#radix
#bar
Symbol literals are compile-time constants.

Dart is a true object-oriented language, so even functions are objects and have a type, Function. This means that functions can be assigned to variables or passed as arguments to other functions. You can also call an instance of a Dart class as if it were a function. For details, see Callable classes.

Theree are callabble clases.

The => expr syntax is a shorthand for { return expr; }. The => notation is sometimes referred to as arrow syntax.

Function parameters: Tienen algo buenisimo que son las named parameters. No importa el orden, importa que los pases bien nombrados. A estos podes ponerle el required delante que te obliga a pasarle un valor.

Tenemos 2 tipos de parametros: posicionales y nombrados

Los posicionales son como los conocemos siempre, primer argumento matcha con el primero, etc.
```
String say(String from, String msg, [String? device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}
Here’s an example of calling this function without the optional parameter:

assert(say('Bob', 'Howdy') == 'Bob says Howdy');
And here’s an example of calling this function with the third parameter:

assert(say('Bob', 'Howdy', 'smoke signal') ==
    'Bob says Howdy with a smoke signal');
```
Los nombres es lo que vimos antes:

```
When calling a function, you can specify named parameters using paramName: value. For example:

enableFlags(bold: true, hidden: false);
When defining a function, use {param1, param2, …} to specify named parameters:

/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool? bold, bool? hidden}) {...}
```

Default parameter values
Your function can use = to define default values for both named and positional parameters. The default values must be compile-time constants. If no default value is provided, the default value is null.

Here’s an example of setting default values for named parameters:
```
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold = false, bool hidden = false}) {...}

// bold will be true; hidden will be false.
enableFlags(bold: true);

```

```
The next example shows how to set default values for positional parameters:

String say(String from, String msg,
    [String device = 'carrier pigeon']) {
  var result = '$from says $msg with a $device';
  return result;
}

assert(say('Bob', 'Howdy') ==
    'Bob says Howdy with a carrier pigeon');
```

Los closures existen como ej javascript:

A closure is a function object that has access to variables in its lexical scope, even when the function is used outside of its original scope.

Operators
Dart supports the operators shown in the following table. You can implement many of these operators as class members.

Description	Operator
unary postfix	expr++    expr--    ()    []    .    ?.
unary prefix	-expr    !expr    ~expr    ++expr    --expr      await expr   
multiplicative	*    /    %  ~/
additive	+    -
shift	<<    >>    >>>
bitwise AND	&
bitwise XOR	^
bitwise OR	|
relational and type test	>=    >    <=    <    as    is    is!
equality	==    !=   
logical AND	&&
logical OR	||
if null	??
conditional	expr1 ? expr2 : expr3
cascade	..    ?..
assignment	=    *=    /=   +=   -=   &=   ^=   etc.
 Warning: Operator precedence is an approximation of the behavior of a Dart parser. For definitive answers, consult the grammar in the Dart language specification.


Arithmetic operators
Dart supports the usual arithmetic operators, as shown in the following table.

Operator	Meaning
+	Add
–	Subtract
-expr	Unary minus, also known as negation (reverse the sign of the expression)
*	Multiply
/	Divide
~/	Divide, returning an integer result
%	Get the remainder of an integer division (modulo)

Dart also supports both prefix and postfix increment and decrement operators.

Operator	Meaning
++var	var = var + 1 (expression value is var + 1)
var++	var = var + 1 (expression value is var)
--var	var = var – 1 (expression value is var – 1)
var--	var = var – 1 (expression value is var)


Type test operators
The as, is, and is! operators are handy for checking types at runtime.

Operator	Meaning
as	Typecast (also used to specify library prefixes)
is	True if the object has the specified type
is!	True if the object doesn’t have the specified type
The result of obj is T is true if obj implements the interface specified by T. For example, obj is Object is always true.

Use the as operator to cast an object to a particular type if and only if you are sure that the object is of that type. Example:

```
(employee as Person).firstName = 'Bob';
```

If you aren’t sure that the object is of type T, then use is T to check the type before using the object.

```
if (employee is Person) {
  // Type check
  employee.firstName = 'Bob';
}
```

Assignment operators
As you’ve already seen, you can assign values using the = operator. To assign only if the assigned-to variable is null, use the ??= operator.

// Assign value to a
a = value;
// Assign value to b if b is null; otherwise, b stays the same
b ??= value;



Logical operators
You can invert or combine boolean expressions using the logical operators.

Operator	Meaning
!expr	inverts the following expression (changes false to true, and vice versa)
||	logical OR
&&	logical AND
Here’s an example of using the logical operators:

if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}




Conditional expressions
Dart has two operators that let you concisely evaluate expressions that might otherwise require if-else statements:

condition ? expr1 : expr2
If condition is true, evaluates expr1 (and returns its value); otherwise, evaluates and returns the value of expr2.
expr1 ?? expr2
If expr1 is non-null, returns its value; otherwise, evaluates and returns the value of expr2.
When you need to assign a value based on a boolean expression, consider using ? and :.

var visibility = isPublic ? 'public' : 'private';
If the boolean expression tests for null, consider using ??.

String playerName(String? name) => name ?? 'Guest';
The previous example could have been written at least two other ways, but not as succinctly:

// Slightly longer version uses ?: operator.
String playerName(String? name) => name != null ? name : 'Guest';

// Very long version uses if-else statement.
String playerName(String? name) {
  if (name != null) {
    return name;
  } else {
    return 'Guest';
  }
}


Cascade notation (no diria que es una buena practica, es lo mismo que hacer como siempre y si la persona que lo esta leyendo no lo sabe agrega confusion.)
Cascades (.., ?..) allow you to make a sequence of operations on the same object. In addition to function calls, you can also access fields on that same object. This often saves you the step of creating a temporary variable and allows you to write more fluid code.

Consider the following code:

var paint = Paint()
  ..color = Colors.black
  ..strokeCap = StrokeCap.round
  ..strokeWidth = 5.0;
The constructor, Paint(), returns a Paint object. The code that follows the cascade notation operates on this object, ignoring any values that might be returned.

The previous example is equivalent to this code:

var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;
If the object that the cascade operates on can be null, then use a null-shorting cascade (?..) for the first operation. Starting with ?.. guarantees that none of the cascade operations are attempted on that null object.

querySelector('#confirm') // Get an object.
  ?..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));
 Version note: The ?.. syntax was introduced in 2.12.

?.	Conditional member access	Like ., but the leftmost operand can be null; example: foo?.bar selects property bar from expression foo unless foo is null (in which case the value of foo?.bar is null)

In contrast to Java, all of Dart’s exceptions are unchecked exceptions. Methods don’t declare which exceptions they might throw, and you aren’t required to catch any exceptions.


Exceptions
Your Dart code can throw and catch exceptions. Exceptions are errors indicating that something unexpected happened. If the exception isn’t caught, the isolate that raised the exception is suspended, and typically the isolate and its program are terminated.

In contrast to Java, all of Dart’s exceptions are unchecked exceptions. Methods don’t declare which exceptions they might throw, and you aren’t required to catch any exceptions.

Dart provides Exception and Error types, as well as numerous predefined subtypes. You can, of course, define your own exceptions. However, Dart programs can throw any non-null object—not just Exception and Error objects—as an exception.

Throw
Here’s an example of throwing, or raising, an exception:

throw FormatException('Expected at least 1 section');
You can also throw arbitrary objects:

throw 'Out of llamas!';
 Note: Production-quality code usually throws types that implement Error or Exception.


 try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // A specific exception
  buyMoreLlamas();
} on Exception catch (e) {
  // Anything else that is an exception
  print('Unknown exception: $e');
} catch (e) {
  // No specified type, handles all
  print('Something really unknown: $e');
}


rethrow: permite que catchees el error dentro de la funcion y te permite que lo catcheen de afuera.


CLASES:

Some classes provide constant constructors. To create a compile-time constant using a constant constructor, put the const keyword before the constructor name:

var p = const ImmutablePoint(2, 2);
Constructing two identical compile-time constants results in a single, canonical instance:

var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

assert(identical(a, b)); // They are the same instance!

If a constant constructor is outside of a constant context and is invoked without const, it creates a non-constant object:

var a = const ImmutablePoint(1, 1); // Creates a constant
var b = ImmutablePoint(1, 1); // Does NOT create a constant

assert(!identical(a, b)); // NOT the same instance!

Constant context: bascially that, there are constants context where u declare a scoppe as inmutable.

Getting an object’s type
To get an object’s type at runtime, you can use the Object property runtimeType, which returns a Type object.

The pattern of assigning a constructor argument to an instance variable is so common, Dart has syntactic sugar to make it easy:

class Point {
  double x = 0;
  double y = 0;

  // Syntactic sugar for setting x and y
  // before the constructor body runs.
  Point(this.x, this.y);
}

Constructors aren’t inherited
Subclasses don’t inherit constructors from their superclass. A subclass that declares no constructors has only the default (no argument, no name) constructor.

Named constructors
Use a named constructor to implement multiple constructors for a class or to provide extra clarity:

class Point {
  double x = 0;
  double y = 0;

  Point(this.x, this.y);

  // Named constructor
  Point.origin()
      : x = xOrigin,
        y = yOrigin;
}
Remember that constructors are not inherited, which means that a superclass’s named constructor is not inherited by a subclass. If you want a subclass to be created with a named constructor defined in the superclass, you must implement that constructor in the subclass.

Invoking a non-default superclass constructor
By default, a constructor in a subclass calls the superclass’s unnamed, no-argument constructor. The superclass’s constructor is called at the beginning of the constructor body. If an initializer list is also being used, it executes before the superclass is called. In summary, the order of execution is as follows:

initializer list
superclass’s no-arg constructor
main class’s no-arg constructor
If the superclass doesn’t have an unnamed, no-argument constructor, then you must manually call one of the constructors in the superclass. Specify the superclass constructor after a colon (:), just before the constructor body (if any).

In the following example, the constructor for the Employee class calls the named constructor for its superclass, Person. Click Run to execute the code.

Getters and setters
Getters and setters are special methods that provide read and write access to an object’s properties. Recall that each instance variable has an implicit getter, plus a setter if appropriate. You can create additional properties by implementing getters and setters, using the get and set keywords:

class Rectangle {
  double left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // Define two calculated properties: right and bottom.
  double get right => left + width;
  set right(double value) => left = value - width;
  double get bottom => top + height;
  set bottom(double value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
With getters and setters, you can start with instance variables, later wrapping them with methods, all without changing client code.


Abstract methods
Instance, getter, and setter methods can be abstract, defining an interface but leaving its implementation up to other classes. Abstract methods can only exist in abstract classes.

To make a method abstract, use a semicolon (;) instead of a method body:

abstract class Doer {
  // Define instance variables and methods...

  void doSomething(); // Define an abstract method.
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // Provide an implementation, so the method is not abstract here...
  }
}

Abstract classes
Use the abstract modifier to define an abstract class—a class that can’t be instantiated. Abstract classes are useful for defining interfaces, often with some implementation. If you want your abstract class to appear to be instantiable, define a factory constructor.

Abstract classes often have abstract methods. Here’s an example of declaring an abstract class that has an abstract method:

// This class is declared abstract and thus
// can't be instantiated.
abstract class AbstractContainer {
  // Define constructors, fields, methods...

  void updateChildren(); // Abstract method.
}
Implicit interfaces
Every class implicitly defines an interface containing all the instance members of the class and of any interfaces it implements. If you want to create a class A that supports class B’s API without inheriting B’s implementation, class A should implement the B interface.

A class implements one or more interfaces by declaring them in an implements clause and then providing the APIs required by the interfaces. For example:

// A person. The implicit interface contains greet().
class Person {
  // In the interface, but visible only in this library.
  final _name;

  // Not in the interface, since this is a constructor.
  Person(this._name);

  // In the interface.
  String greet(String who) => 'Hello, $who. I am $_name.';
}

// An implementation of the Person interface.
class Impostor implements Person {
  get _name => '';

  String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}
Here’s an example of specifying that a class implements multiple interfaces:

class Point implements Comparable, Location {...}
Extending a class
Use extends to create a subclass, and super to refer to the superclass:

class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}

class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}

Overriding members
Subclasses can override instance methods (including operators), getters, and setters. You can use the @override annotation to indicate that you are intentionally overriding a member:

class SmartTelevision extends Television {
  @override
  void turnOn() {...}
  // ···
}


noSuchMethod()
To detect or react whenever code attempts to use a non-existent method or instance variable, you can override noSuchMethod():

class A {
  // Unless you override noSuchMethod, using a
  // non-existent member results in a NoSuchMethodError.
  @override
  void noSuchMethod(Invocation invocation) {
    print('You tried to use a non-existent member: ' +
        '${invocation.memberName}');
  }
}
You can’t invoke an unimplemented method unless one of the following is true:

The receiver has the static type dynamic.

The receiver has a static type that defines the unimplemented method (abstract is OK), and the dynamic type of the receiver has an implemention of noSuchMethod() that’s different from the one in class Object.

Enumerated types
Enumerated types, often called enumerations or enums, are a special kind of class used to represent a fixed number of constant values.

Using enums
Declare an enumerated type using the enum keyword:

enum Color { red, green, blue }
You can use trailing commas when declaring an enumerated type.

Each value in an enum has an index getter, which returns the zero-based position of the value in the enum declaration. For example, the first value has index 0, and the second value has index 1.

assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);
To get a list of all of the values in the enum, use the enum’s values constant.

List<Color> colors = Color.values;
assert(colors[2] == Color.blue);
You can use enums in switch statements, and you’ll get a warning if you don’t handle all of the enum’s values:

var aColor = Color.blue;

switch (aColor) {
  case Color.red:
    print('Red as roses!');
    break;
  case Color.green:
    print('Green as grass!');
    break;
  default: // Without this, you see a WARNING.
    print(aColor); // 'Color.blue'
}
Enumerated types have the following limits:

You can’t subclass, mix in, or implement an enum.
You can’t explicitly instantiate an enum.
For more information, see the Dart language specification.

Adding features to a class: mixins
Mixins are a way of reusing a class’s code in multiple class hierarchies.

To use a mixin, use the with keyword followed by one or more mixin names. The following example shows two classes that use mixins:

class Musician extends Performer with Musical {
  // ···
}

class Maestro extends Person
    with Musical, Aggressive, Demented {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}
To implement a mixin, create a class that extends Object and declares no constructors. Unless you want your mixin to be usable as a regular class, use the mixin keyword instead of class. For example:

mixin Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}
