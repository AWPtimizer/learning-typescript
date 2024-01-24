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