To recap here are the optimal expressions.

Checking if a variable is declared:

try {
  value
  // value is declared
} catch (err) {
  if (err instanceof ReferenceError) {
    // value is undeclared
  } else {
    // some other error occurred
  }
}
Checking for the absence of an uninherited property in an object when the object definitely doesn’t have a shadowing hasOwnProperty property:

!obj.hasOwnProperty(key)
Checking for the existence of an uninherited property in an object when the object definitely doesn’t have a shadowing hasOwnProperty property:

obj.hasOwnProperty(key)
Checking for the absence of an uninherited property in an object when the object may have a shadowing hasOwnProperty property:

!Object.prototype.hasOwnProperty.call(obj, key)
Checking for the existence of an uninherited property in an object when the object may have a shadowing hasOwnProperty property:

Object.prototype.hasOwnProperty.call(obj, key)
Checking for the absence of an inherited or uninherited property in an object:

!(key in obj)
Checking for the existence of an inherited or uninherited property in an object:

key in obj
Checking for the absence of a value when the value may be an undeclared variable:

typeof value === 'undefined' || value === null
Checking for the existence of a value when the value may be an undeclared variable (derived using De Morgan’s Law):

typeof value !== 'undefined' && value !== null
Checking for the absence of a value when the value is definitely declared:

value == null
Checking for the existence of a value when the value is definitely declared:

value != null
Checking for the absence of a value when the value is definitely declared and you want to avoid loose equality:

value === null || value === void 0
Checking for the existence of a value when the value is definitely declared and you want to avoid loose equality (derived using De Morgan’s Law):

value !== null && value !== void 0
Feel free to use combinations of these to fit your needs. For example, here’s how you would check if an object has an uninherited property which has an absent value such as undefined or null when the object definitely doesn’t have a shadowing hasOwnProperty property:

obj.hasOwnProperty(key) && obj[key] == null


SOURCE: https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html esta realmente bueno el tema de chequear propiedades en objetos.
