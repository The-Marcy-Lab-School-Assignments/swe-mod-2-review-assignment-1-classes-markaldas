# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. A `Car` class and an `Engine` class have a **composition** relationship because a `Car` contains an `Engine`.
2. A `Dog` class and an `Animal` class is **inheritance** because a Dog is a type of Animal.
3. A `Classroom` class and a `Student` class, is a **composition** relationship because a classroom has many students.
4. A `Rectangle` class and a `Shape` class have a **inheritance** relationship because a rectangle is a type of shape. 
5. A `Computer` class and a `CPU` class have a **composition** relationship because a computer contains a cpu, and a CPU is not a type of computer. 
6. A `Manager` class and an `Employee` class have a **inheritance** type of relationship because a manager is a type of employee.

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

In my own words **polymorphism** means using the same named methods from different classes that will execute different outputs, based on how you execute it. For example In for the `MediaItem` class we have other classes like `Song` and `Podcast` that extend the `MediaItem` class, they all have a `play()` method but all of them override each other so when you create a new instance of a class and call the method `play()` on that class then you call the method of that instance only even though all the classes have the same instance name. This is useful because like we did in the `test()` function we can add all the new instances of the different classes in an array, and then use methods on that array, like `the forEach()` method to call all the `play()` methods which will execute each instance that is using a `play()` method. This is easier and faster than naming the methods different names and then calling each of them individually. 

---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) The difference between an instance property and a static property is that a instance property is not shared between all new instances that are created. An instance property has unique values but the same properties of the class properties. In a static property, it belong to the class itself, not to the new instances, so you can not access static properties using the new instance name you have to access static properties using the class name that it belongs too.

b) You would want to use a **instance property** if you want to have unique values placed into the properties every time a new instance is created. For example if you want a `constructor` to take in `(email, name)` this would take in a email and name from the new instance created every time. For a **static property** you would want to use this whenever you want the property to be shared among all instances created. For example, if you want password attempts to be 5 across all instances and just be apart of the class, then you would use the static method for that, and every new instance created would have 5 password attempts. 