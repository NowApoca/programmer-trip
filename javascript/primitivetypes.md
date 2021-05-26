In js we have primitive types and objects. In primitive objects, we dont have properties, we just the value. So what happens when we do string.length? Javascript converts the string to String(string), so now the string is an object with properties.

When we end with the operation, as the object is not referenced the garbage collector god makes his work. The same happens when we try to assign a property to the string primitive, it just creates an object, assign the property and later then the reference delete the reference.

SYMBOL: 

const people = {};
people[Symbol('bob')] = { name: 'Bob Smith' };
people[Symbol('bob')] = { name: 'Bob Jones' }

10

Symbol is used to create a totally unique, one-of-a-kind identifier. It's use is precisely for the example you list.

Even if you call Symbol with the same string, the instances will be different. This allows different libraries (which may be used at the same time) to define keys which may be used at the same time.

For example, imagine two libraries using a common name to define something on window or global (or for illustration, the fake global door):
