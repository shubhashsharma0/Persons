function Person(FirstName,LastName,OfficeAddress)
{
this.FirstName=FirstName;
this.LastName=LastName;
this.OfficeAddress=OfficeAddress;
}
var Person1=new Person('Ravi','kumar','Patna');
var Person2=new Person('Harsh','anand','Haryana');
var Person3=new Person('Keshav','nanda','Delhi');
console.log(Person1.FirstName);
console.log(Person1.LastName);
console.log(Person1.OfficeAddress);

console.log(Person2.FirstName);
console.log(Person2.LastName);
console.log(Person2.OfficeAddress);

console.log(Person3.FirstName);
console.log(Person3.LastName);
console.log(Person3.OfficeAddress);
