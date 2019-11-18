// class
class name {
  constructor(data) {
    this.brand = data;
  }
  salary() {
    return this.brand + " Got a 1 Lakhs Salary";
  }
}

myfirstName = new name("Govardhan Aaleswara");
const salary = myfirstName.salary();

console.log(salary);

// class with extend

class FirstName {
  constructor(name) {
    this.first = name;
  }
  my() {
    return this.first;
  }
}
class SecondName extends FirstName {
  constructor(name, name1) {
    super(name);
    this.second = name1;
  }
  my1() {
    return this.my() + " " + this.second;
  }
}
myFullName = new SecondName("Govardhan", "Aaleswara");
const names = myFullName.my1();
console.log(names);

// normal function

hello = function() {
  return "Hello Normal Function";
};

// arrow function
hello1 = () => {
  return "Hello Arrow Function";
};

hello2 = () => "Hello Arrow Default Function ";
hello3 = r => "hello" + r;
hello4 = r => "hello" + r;

console.log(hello1());
console.log(hello());
console.log(hello2());
console.log(hello3(" Govardhan"));
console.log(hello4(" Aaleswara"));
