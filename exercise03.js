// Example object and print statements

// Create your JavaScript objects
let person = {
   firstName: "Snow",
   lastName: "White",
   isFiction: true,
   age: 18,
   address: {
      streetAddress: "7 Fairytale Lane",
      city: "Fairytale Forest"
   },
   phoneNumbers:[
      {
         type: "home",
         number: "01 123-4567"
      },
      {
         type: "office",
         number: "01 555-4567"
      },
      {
         type: "mobile",
         number: "028 456-7890"
      }
   ],
   spouse: null
} 

// print different properties of your objects
console.log("First name of person: " + person.firstName);
for (i in person.phoneNumbers) {
    console.log("Phone number: " + person.phoneNumbers[i].number);
}
let student = [
    {
   name: "William",
   id: "4444444",
   username: "jlia950",
   majors: "infosys" ,
   degrees: "infomation systems",
   courses: [{
      title: "Infosys 221",
      catagory: "Infosystems",
      catagory_number: 221,
      short_desc: "Programming for business",
      when_offered: "1st sem"
   }]
    },
    {
   name: "komal",
   id: "4444444",
   username: "jlia950",
   majors: "infosys" ,
   degrees: "infomation systems",
   courses: [{
      title: "Infosys 221",
      catagory: "Infosystems",
      catagory_number: 221,
      short_desc: "Programming for business",
      when_offered: "1st sem"
   }]
}
]
   
console.log("First name of person: " + student.name);
for (i in student.courses) {
    console.log("Courses: " + student.courses[i].title);
}
