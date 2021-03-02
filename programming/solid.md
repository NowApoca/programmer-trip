SOURCES: https://medium.com/doku-insight/solid-principles-with-example-7bd77972787b
https://stackify.com/interface-segregation-principle/

SOLID Principle is just acronym of five principles.
1 ) S — Single Responsibility Principle
2 ) O — Open/Closed Principle
3 ) L — Liskov’s Substitution Principle
4 ) I — Interface Segregation Principle
5 ) D — Dependency Inversion Principle


1. Single Responsability Principle:
	A CLASS SHOULD HAVE A SINGLE RESPONSABILITY. The same applies for routines. Because of that you cannot pass a flag as an argument to a routine, because it will do two things.

2. Open/Closed principle
	Adding a new feature to a class/entity/whatever should not break existing code. Let's see the following example: 

	```
	public class Student {
    private String type;
   
    public void introduce() {
        if ("highSchool".equals(type)) {
            System.out.println("I am an high school student");
        } else if ("underGraduate".equals(type)) {
            System.out.println("I am a under graduate student");
        } else {
            System.out.println("I am a common student");
        }
    }
	}
	```

If you add a new student, it will break because that new student will be not catched. Insted, we could use inheritation as the following code: 

```
public class Student {
    public void introduce() {
        System.out.println("I am a common student");
    }
}
...
public class HighSchoolStudent extends Student {
    @Override
    public void introduce() {
        System.out.println("I am an high school student");
    }
}
...
public class UnderGraduateStudent extends Student {
    @Override
    public void introduce() {
        System.out.println("I am a under graduate student");
    }
}
```

Here we can add a new clase and it will be not break. Here we have a problem of Data structure vs classes, because you must add a new Class and add a new case in a polimorphic structure, but it is a cake for another discusion.


3. LISKOV SUBSTITUTION PRINCIPLE

	Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program. Basically Parent class should extendable by subclass without blowing up the software.

	As an example, if it looks like a duck, quacks like one, but needs batteries, you probably have the wrong abstraction. Perhaps the robotic duck breaks when u want to wash it.

	```
	A basic coffee machine
The BasicCoffeeMachine can only brew filter coffee. So, the brewCoffee method checks if the provided CoffeeSelection value is equal to FILTER_COFFEE before it calls the private brewFilterCoffee method to create and return a CoffeeDrink object.

public class BasicCoffeeMachine { 

    private Map configMap; 
    private Map groundCoffee; 
    private BrewingUnit brewingUnit;

    public BasicCoffeeMachine(Map coffee) { 
        this.groundCoffee = coffee; 
        this.brewingUnit = new BrewingUnit(); 

        this.configMap = new HashMap(); 
        this.configMap.put(CoffeeSelection.FILTER_COFFEE, 
            new Configuration(30, 480)); 
    } 

    public CoffeeDrink brewCoffee(CoffeeSelection selection) 
        throws CoffeeException {

        switch (selection) { 
            case FILTER_COFFEE: 
                return brewFilterCoffee(); 
            default: 
                throw new CoffeeException(
                    "CoffeeSelection [" + selection + "] not supported!"); 
        } 
    } 

    private CoffeeDrink brewFilterCoffee() { 
        Configuration config = configMap.get(CoffeeSelection.FILTER_COFFEE); 

        // get the coffee 
        GroundCoffee groundCoffee = this.groundCoffee.get(
            CoffeeSelection.FILTER_COFFEE); 

        // brew a filter coffee 
        return this.brewingUnit.brew(CoffeeSelection.FILTER_COFFEE, 
            groundCoffee, config.getQuantityWater()); 
    } 

    public void addCoffee(CoffeeSelection sel, GroundCoffee newCoffee) 
        throws CoffeeException {

        GroundCoffee existingCoffee = this.groundCoffee.get(sel); 
        if (existingCoffee != null) { 
            if (existingCoffee.getName().equals(newCoffee.getName())) { 
                existingCoffee.setQuantity(
                    existingCoffee.getQuantity() + newCoffee.getQuantity()); 
            } else { 
                throw new CoffeeException(
                    "Only one kind of coffee supported for each CoffeeSelection."); 
            } 
        } else { 
            this.groundCoffee.put(sel, newCoffee); 
        } 
    } 
}
The addCoffee method expects a CoffeeSelection enum value and a GroundCoffee object. It uses the CoffeeSelection as the key of the internal groundCoffee Map.

These are the most important parts of the BasicCoffeeMachine class. Let’s take a look at the PremiumCoffeeMachine.

A premium coffee machine
The premium coffee machine has an integrated grinder, and the internal implementation of the brewCoffee method is a little more complex. But you don’t see that from the outside. The method signature is identical to the one of the BasicCoffeeMachine class.

public class PremiumCoffeeMachine { 

    private Map<CoffeeSelection, Configuration> configMap; 
    private Map<CoffeeSelection, CoffeeBean> beans; private Grinder grinder; 
    private BrewingUnit brewingUnit; 

    public PremiumCoffeeMachine(Map<CoffeeSelection, CoffeeBean> beans) { 
        this.beans = beans; 
        this.grinder = new Grinder(); 
        this.brewingUnit = new BrewingUnit(); 

        this.configMap = new HashMap<>(); 
        this.configMap.put(CoffeeSelection.FILTER_COFFEE, 
            new Configuration(30, 480)); 
        this.configMap.put(CoffeeSelection.ESPRESSO, 
            new Configuration(8, 28)); 
    } 

    @Override 
    public CoffeeDrink brewCoffee(CoffeeSelection selection) 
        throws CoffeeException { 

        switch(selection) { 
            case ESPRESSO: 
                return brewEspresso(); 
            case FILTER_COFFEE: 
                return brewFilterCoffee(); 
            default: 
                throw new CoffeeException(
                    "CoffeeSelection [" + selection + "] not supported!"); 
        } 
    } 

    private CoffeeDrink brewEspresso() { 
        Configuration config = configMap.get(CoffeeSelection.ESPRESSO); 

        // grind the coffee beans 
        GroundCoffee groundCoffee = this.grinder.grind( 
        this.beans.get(CoffeeSelection.ESPRESSO), 
            config.getQuantityCoffee()); 

        // brew an espresso 
        return this.brewingUnit.brew(CoffeeSelection.ESPRESSO, 
            groundCoffee, config.getQuantityWater()); 
    } 

    private CoffeeDrink brewFilterCoffee() { 
        Configuration config = configMap.get(CoffeeSelection.FILTER_COFFEE); 

        // grind the coffee beans 
        GroundCoffee groundCoffee = this.grinder.grind( 
            this.beans.get(CoffeeSelection.FILTER_COFFEE), 
                config.getQuantityCoffee()); 

        // brew a filter coffee 
        return this.brewingUnit.brew(CoffeeSelection.FILTER_COFFEE, 
            groundCoffee, config.getQuantityWater()); 
    } 

    public void addCoffee(CoffeeSelection sel, CoffeeBean newBeans) 
        throws CoffeeException { 

        CoffeeBean existingBeans = this.beans.get(sel); 
        if (existingBeans != null) { 
            if (existingBeans.getName().equals(newBeans.getName())) { 
                existingBeans.setQuantity(
                    existingBeans.getQuantity() + newBeans.getQuantity()); 
            } else { 
                throw new CoffeeException(
                    "Only one kind of coffee supported for each CoffeeSelection."); 
            } 
        } else { 
            this.beans.put(sel, newBeans); 
        } 
    } 
}

But that’s not the case for the addCoffee method. It expects an object of type CoffeeBean instead of an object of type GroundCoffee. If you add a shared superclass or an interface that gets implemented by the BasicCoffeeMachine and the PremiumCoffeeMachine class, you will need to decide how to handle this difference.
You can either create another abstraction, e.g., Coffee, as the superclass of CoffeeBean and GroundCoffee and use it as the type of the method parameter. That would unify the structure of both addCoffee methods, but require additional validation in both methods. The addCoffee method of the BasicCoffeeMachine class would need to check that the caller provided an instance of GroundCoffee, and the addCoffee implementation of the PremiumCoffeeMachine would require an instance of CoffeeBean. This would obviously break the Liskov Substitution Principle because the validation would fail if you provide a BasicCoffeeMachine object instead of a PremiumCoffeeMachine and vice versa.

The better approach is to exclude the addCoffee method from the interface or superclass because you can’t interchangeably implement it. The brewCoffee method, on the other hand, could be part of a shared interface or a superclass, as long as the superclass or interface only guarantees that you can use it to brew filter coffee. The input parameter validation of both implementations accept the CoffeeSelection value FILTER_COFFEE. The addCoffee method of the PremiumCoffeeMachine class also accepts the enum value ESPRESSO. But as I explained at the beginning of this article, the different subclasses may implement less restrictive validation rules.

	```
Basically, it asks you to implement a superclass called CoffeMachine that implements functions that are shared, as brewCoffee. Childs will implement the superclass, so you will have to interact with those childs.

Source: https://stackify.com/solid-design-liskov-substitution-principle/
	

4. Interface segregation.

	Basically if two classes extends from the same class, we should not share methods that are not related from each other.
	Many client-specific interfaces are better than one general-purpose interface. Here, the idea is split the ‘big’ interface to the smaller interface until client of the interface will only know about the methods that are related to them.

	As an example, see the following code:
	```
From Basic Coffe machine
	public CoffeeDrink brewEspresso() throws CoffeeException {
    		throw new CoffeeException("This machine only brews filter coffee.");
	}

From Expresso 

	public CoffeeDrink brewFilterCoffee() throws CoffeeException {
		throw new CoffeeException("This machine only brews espresso.");
	}

public interface CoffeeMachine {

    void addGroundCoffee(GroundCoffee newCoffee) throws CoffeeException;
}

public interface FilterCoffeeMachine extends CoffeeMachine {

    CoffeeDrink brewFilterCoffee() throws CoffeeException;
}

public interface EspressoCoffeeMachine extends CoffeeMachine {

    CoffeeDrink brewEspresso() throws CoffeeException;
}
	```

5. Dependecy Inversion Principle

	High-level modules should not depend on low level modules, rather both should depend on abstraction. Abstraction should not depend on details; rather detail should depend on abstraction.
	Look an on porpouse bad implementation that violates DIP:

	```
	public class Main {
    public static void main(String[] args) {
        MySqlConnection connection = new MySqlConnection();
        StudentRepository studentRepository = new StudentRepository(connection);
        studentRepository.save();
        studentRepository.delete();

        TeacherRepository teacherRepository = new TeacherRepository(connection);
        teacherRepository.save();
        teacherRepository.update();
    }
}
...
public class StudentRepository {
    private MySqlConnection connection;
    public StudentRepository(MySqlConnection connection){
        this.connection = connection;
    }
    public void save() {
        connection.insert();
    }
    public void delete() {
        connection.delete();
    }
}
...
public class TeacherRepository {
    private MySqlConnection connection;
    public TeacherRepository(MySqlConnection connection){
        this.connection = connection;
    }
    public void save() {
        connection.insert();
    }
    public void update() {
        connection.update();
    }
}
	```
The violation is in repository class because that classes are depend on MySqlConnection.java to finish their method (insert, update, delete). Now, what happend if we need to change MySqlConnection.java to PsqlConnection.java ? We need modify all of classes that depend on MySqlConnection.java, it’s will be very dangerous because we need to modify a lot of class.
To solve this case, we can create an abstraction class that will implement in MySqlConnection.java and use that abstraction in our repository class.

```

public class Main {
    public static void main(String[] args) {
//        Connection connection = new MySqlConnection();
        Connection connection = new PsqlConnection( );

        StudentRepository studentRepository = new StudentRepository(connection);
        studentRepository.save();
        studentRepository.delete();

        TeacherRepository teacherRepository = new TeacherRepository(connection);
        teacherRepository.save();
        teacherRepository.update();
    }
}
...
public interface Connection {
    void insert();
    void update();
    void delete();
}
...
public class MySqlConnection implements Connection {
    public void insert() { }
    public void update() { }
    public void delete() { }
}
...

public class StudentRepository {
    private Connection connection;
    public StudentRepository(Connection connection) {
        this.connection = connection;
    }
    public void save() {
        this.connection.insert();
    }
    public void delete() {
        this.connection.delete();
    }
}
```


Basically we should avoid show the implementation of the high classes to the children. They should see interfaces and abstractions, with that scheme is easier for changing a database.
