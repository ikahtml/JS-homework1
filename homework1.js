// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
  };
  console.log(user.studentstatus);

  // შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;

let cars = ['bmw', 'mercedes-benz', 'audi',  'porsche'];
for (let x of cars){
    console.log(x)
}
  
// შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
 for ( let x = 0; x < numbers.length; x++){
   if (numbers[x]>5)
   console.log(numbers[x])
 }
 

//  თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
//  თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
//  თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
//  ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;



 let userMain = {
   name: 'irakli',
   age: 29,
   studentstatus: active

 }
 if (userMain.age > 18 && userMain.studentstatus=='active'){
   console.log('Hello');
 }
 else if (userMain.name = 'levani'){
   console.log('Hello Giorgi')
 }
 else if(userMain.studentstatus = 'active' || userMain.age < 25 ){
   console.log('Hello World')
 }
 else {
   console.log('error')
 }

//  ქვემოთ მოცემული მასივიდან გამოვიტანოთ მხოლოდ ე.წ. "სტრინგები"

 let masiv = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;
 for ( let y of masiv)
 if ( typeof y == 'string'){
   console.log(y)
 }

//  მოცემული მასივიდან  for ციკლის საშუალებით დაილოგოს მხოლოდ დადებითი რიცხვები.

let mass = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]
for ( let kap of mass){
  for ( let pak of kap){
    if ( pak > 0){
      console.log(pak)
    }
  }
}

// მოცემული მასივიდან ამოარჩიეთ მხოლოდ  5-ის ჯერადი ციფრები
 
let masive = [
   32, 10, 'hello', 'null', 'helloy', 50
 ]
//  ამოუხსნელია /// ვერ გავუგე
