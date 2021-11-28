function Person(FirstName,LastName,OfficeAddress)
{
this.FirstName=FirstName;
this.LastName=LastName;
this.OfficeAddress=OfficeAddress;
}

var Person1=new Person('Ravi','kumar','Patna');
var Person2=new Person('Harsh','anand','Haryana');
var Person3=new Person('Keshav','nanda','Delhi');
console.log("Person 1 Details");
console.log("FirstName: "+Person1.FirstName);
console.log("LastName: "+Person1.LastName);
console.log("OfficeAddress: "+Person1.OfficeAddress);
console.log("\nPerson 2 Details");
console.log("FirstName: "+Person2.FirstName);
console.log("LastName: "+Person2.LastName);
console.log("OfficeAddress: "+Person2.OfficeAddress);
console.log("\nPerson 3 Details");
console.log("FirstName: "+Person3.FirstName);
console.log("LastName: "+Person3.LastName);
console.log("OfficeAddress: "+Person3.OfficeAddress);
