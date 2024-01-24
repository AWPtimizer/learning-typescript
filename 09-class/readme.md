Initialize a tsconfig.json file first by ->  "tsc --init" command
dist means distributions

We cannot have a return type in a setter ->
i.e.
You don't have to write a return type bcz "A 'set' accessor cannot have a return type annotation"

  set courseCount(courseNumber): void {
    
  }

To gix this remove the return type->
  set courseCount(courseNumber) {

  }


Protected and inheritance ->
We cannot use a private properties and methods in another class which inherits its properties and methods.
We can do the above mentioned thing using "protected". i.e., we can access the protected properties and methods in the class which extends the parent class.