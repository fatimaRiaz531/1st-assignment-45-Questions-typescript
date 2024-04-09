 // 2. personal name

// let personName : string= "ERIC";
//console.log(`hellow ${personName} would you like to learn some python today?`);

//3. name case

//lower case
//let personName : string ="Fatima"
//console.log("lowercase:", personName.toLowerCase());

//upper case
//console.log("uppercase:", personName.toLocaleUpperCase());

//title case
//console.log("titlecase:", personName.replace(/\b\w/g,c => c.toUpperCase()));

//4.  famous quote

//let qoute: string ="A person who never made a mistake never tried anything new";
//let author: string ="Albert Einstein"
//console.log(`${author} once said,"${qoute}`);

//5. famous person

// let quote: string ="A person who never made a mistake never tried anything new";
// let famous_person= "Albert Einstein";
// let message=`${famous_person} once said, ${quote}`;
// console.log(message);

//6. stripping number

// let personName: string =`\n\t FATIMA RIAZ\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);

//7 and 8. number 8

// console.log(5+3);
// console.log(11-3);
// console.log(4*2);
// console.log(16/ 2);

//9. favourite number

// let favoriteNumber: number = 7;
// console.log(`My favourite number is ${favoriteNumber}`);

//10. adding folder

//exercise 10
//my name is FATIMA
//Dated: 07/03/2024
// console.log(`hello world simple program`);

//11. names

// let members: string[] =['alina', 'aliza','saba','sana'];
// for(let i=0; i<members.length; i++){
// console.log(members[i]);

// }

//12. greeting

// let members: string[] =['alina', 'aliza','saba','sana'];
// let message: string ='kal birthday hai kis ka:' ;
// for(let i=0; i<members.length; i++){
// console.log(message +members[i]);

// }

//13. your own array

// let transportation : string[] =['civic','bike','prado','truck'];
// for(let i =0; i< transportation.length; i++){
//     console.log('I would like to own a' + transportation[i]);
// }

//14 , 15, 16. guest list

// let guest_list : string[]= ['alia', 'sundus', 'zimal', 'ayesha'];
//  for (let i = 0; i < guest_list.length; i++) {
//     console.log("Respected maam" + guest_list[i] + ', \nwe invited you to dinner on tuesday. \n\nTHANKYOU\n');
// }
// export{guest_list}

//  //let not_present  : string = 'alia';
// //let new_guest = ' nida yasir';
// //guest_list[0] = new_guest;
// //for (let i = 0; i < guest_list.length; i++) {
//   //  console.log('Respected maam'    + guest_list[i] + ', \nwe invited you to dinner on tuesday. \n\nTHANKYOU\n');
// //}
// // /console.log("Miss ".concat(not_present, " will not coming on tuesday dinner party."));

// //guest_list.unshift(' sehar','aleena','mehwish hayat');
// //for (let i = 0; i < guest_list.length; i++) {
//   //  console.log('Respected maam '     + guest_list[i] + ', \nwe invited you to dinner on tuesday. we found big table for dinner so we decided to invited 3 more guest. \n\nTHANKYOU\n');
// //}

// //ex. 17

// //console.log('\n\Unfotunately we can not arrange big table. Only 2 person allow.');
// //while(guest_list.length>2){
// //let remove_guest = guest_list.pop();
// //console.log(`sorry madam. ${remove_guest} you are not invited for dinner.`);
// //}
// //for (let i = 0; i < guest_list.length; i++) {
//     // console.log('Respected maam' + guest_list[i] + ', \nyes you are still invited for dinner  on tuesday.\nTHANKYOU\n');
// //}
// //guest_list.splice(0,2)
// //console.log(guest_list)*/

// //18.  seeing the world

// let places : string[] = [' pakistan', 'india', ' japan', 'south africa ','bangladesh'];
// //console.log('original:' + places);

// //console.log('copy'   + [...places].sort());

// //console.log('original:' + places);

// console.log('copy'   + [...places].sort().reverse());

// console.log('copy'   + [...places].sort().reverse());

// console.log('original:' + places .sort());

// console.log('original:' + places .sort().reverse);

//19. guest list

// import { guest_list } from '../14. guest list/app'
// console.log('n\PRINTING NUMBER OF GUEST INVITED')
// console.log(`we had finally invited ${guest_list.length} `)

//20.  thinking

// let languages : string [] = ['english', 'urdu', 'hindi','arabic' ];
// console.log("list of languages:")
// for(let top of languages){
//     console.log(top)
// }

//21. typescript object

// interface item {
//     name: string
//     price: number
// }
// const book: item ={
//     name : 'ESSENTIAL TYPESCRIPT'
//     price: 500
// }
// const mango : item ={
//     name: 'mango'
//     price: 350
// }
// console.log(`book name: ${book.name}, price: $${book.price}`)
// console.log(`mango name: ${mango.name}, price: $${mango.price}`)

//22. intentional error

// let array: ( string | number) [] = [ 'saima' ,' fatima', 1,7,9,8,0]
// console.log(array[6])
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])

//23. conditional test

// //test 1
// let cars: string='subaru';
// console.log(" is car =='subaru'? I predict True.");
// console.log(cars == 'subaru');

// //test 2
// console.log(" is car ==='subaru'? I predict True.");
// console.log(cars === 'subaru');

// //test 3
// console.log(" is car !='subaru'? I predict false.");
// console.log(cars != 'subaru');

// //test 4
// console.log(" is car !=='subaru'? I predict false.");
// console.log(cars !== 'subaru');

// //test 5
// console.log(" is car <'subaru'? I predict false.");
// console.log(cars < 'subaru');

//24. more conditional test 

// let cars: string='subaru';
// let age: number =25;
// let numbers: number[] =[1,2,3,4];

// //**  string tests**
// //test 1 : equality (true)
// console.log(" Is car =='subaru'? I predict True.");
// console.log(cars == 'subaru'); //True ( case-insensitive)

// //test 2 : strict equality (False)
// console.log(" Is car !==='subaru'? I predict False.");
// console.log(cars === 'subaru');// False ( case-sensitive)

// //test 3 : Inequality (True)
// console.log(" Is car !='Toyota'? I predict True.");
// console.log(cars != 'Toyota'); //true

// //test 4 : inequality (false)
// console.log(" Is car !=='subaru'? I predict false.");
// console.log(cars !== 'subaru');// False (case-sensitive)

// //test 5 : lowercase conversion(True)
// console.log(" Is car.tolowerCase() =='subaru'? I predict True.");
// console.log(cars.toLocaleLowerCase() =='subaru'); //true (converted to lowercase)

// //test 6: lowercase conversion (false)
// console.log("Is car === car.tolowerCase()? I predict False.");
// console.log(cars === cars.toLocaleLowerCase()); // false (original value remains)

// //** numerical test**

// //test 7: equality (true)
// console.log("Is age == 25? I predict True.");
// console.log( age == 25); //true

// //test 8: inequality (false)
// console.log("Is age != 30? I predict True.");
// console.log(age != 30);// true

// //test 9: greater then (false)
// console.log("Is age > 30? I predict False.");
// console.log(age > 30);// false

// //test 10: less then or equal (true)
// console.log("Is age <= 25? I predict True.");
// console.log(age <= 25);// true

// //*logical operators**

// //test 11: AND (true)
// console.log("Is age > 20 && age < 30? I predict True.");
// console.log(age >20 && age < 30);// true (both conditions met)

// //test 12:OR(false)
// console.log("Is age > 30 ||  age < 18? I predict false.");
// console.log(age >30 || age < 18); 

// // */array tests**
// //test 13: In array (Test)
// console.log("Is 3 in numbers? I predict True.");
// console.log( 3  in numbers);// true (checks for index existance)

// //test 14: not in array (false)
// console.log("Is 5 not in numbers? I predict False.");
// console.log( 5   in numbers);// true (negation of "in" operator)

//25. alein colour

// let alien_colour: string =' green';

// if(alien_colour ==  'green'){
//     console.log(" the player just earned 5 points.");
// }

// alien_colour =" yellow";
// if(alien_colour == "green"){
//     console.log(" the player just earned 5 points.");
// }

//26. alein colour 2

// let alien_colour: string =' green';

// if(alien_colour == 'green'){
//     console.log(" the player just earned 5 points for shooting the alien.");
// }
// else{
//     console.log('the player just earned 10 points.')
// }
// alien_colour =" yellow";
// if(alien_colour == "green"){
//     console.log(" the player just earned 5 points for shooting the alien.");
// }

//27.  alein colour 3

// let alien_colour: string =' green';

//  if(alien_colour ==  'green'){
//     console.log(" the player just earned 5 points.");
// }

//28.  stage of lifes

// let age : number = 25;
// if( age<2){
//     console.log("the person is a baby.")
// }
// else if ( age >= 4 && age <4 ) {
//     console .log("the person is a toddler.")
// }
// else if (age >=4 &&  age< 13 ) {
//     console .log("person is a kid.")
// }
// else if (age >=13 && age <20){
//     console .log("a person is a teenager.")
// }
// else if ( age >=20 && age < 65){
//     console .log("person is a adult.")
// }
// else{
//     console.log("person is an elder.")
// }

// else if(alien_colour ==  "yellow"){
//     console.log(" the player just earned 10 points.");
// }

// else if(alien_colour ==  "red"){
//     console.log(" the player just earned 15 points.");
// }

// else{
//     console.log('please select right colour')
// }

// //version 2
// alien_colour ='red';
// if(alien_colour ==  'green'){
//     console.log(" the player just earned 5 points.");
// }


// else if(alien_colour ==  "yellow"){
//     console.log(" the player just earned 10 points.");
// }

// else if(alien_colour ==  "red"){
//     console.log(" the player just earned 15 points.");
// }
// else{
//     console.log('please select right colour.');
// }

// //version 3
// alien_colour='yellow';
// if(alien_colour ==  'green'){
//     console.log(" the player just earned 5 points.");
// }

// else if(alien_colour ==  "yellow"){
//     console.log(" the player just earned 10 points.");
// }

//29. favorite fruits

// let favorite_fruits : string [] = ['strewbarry', 'mango','kiwi']

// if(favorite_fruits.includes('strewbarry')){
//     console.log("I really like strewbarry!")
// }
// if(favorite_fruits.includes('mango')){
//     console.log("I really like mango!")
// }

// if(favorite_fruits.includes('kiwi')){
//     console.log("I really like kiwi!")
// }

// if(favorite_fruits.includes('watermelon')){
//     console.log("I really like watermelon!")
// }

//30. 	Hello Admin: Make a array

// let users : string [] = ['sana','babar','saba','taha','admin']

// for(let user of users){
//     if (user === "admin"){
//         console.log("hello admin, would you like to see a status report?")
//     }
//     else{
//         console.log(`Hello ${user}, 'thank you for logging in again.'`)
//     }
// }

//31.  no users

// let users : string [] = ['sana','babar','saba','taha','admin']

//   if (users.length === 0){
//          console.log("We need to find some users! ")
//   }else{
//     users=[];
//     console.log("All user have been removed" + users.length)
//   }

//32. checking user names

// let current_users: string [] = ['saba', 'aisha','saima','rahat', 'raza'];
// let new_users: string[] = ['fawad', 'jawad','user7','admin','user9'];

// new_users.forEach((newUser) =>{
//     if(
//         current_users.some(
//             (current_user) => current_user.toLocaleLowerCase()=== newUser.toLocaleLowerCase()
//         )
//     ){
//         console.log(`${newUser}bwill need to enter a new username.`);
//     } else{
//         console.log(`${newUser} is available.`);
//     }
// });

//33. odinary number

// let myNumbers = [1,2,3,4,5,6,7,8,9];
// for(let i=0; i <  myNumbers.length; i ++){
// if (myNumbers[i]== 1){
//     console.log(`${myNumbers[i]}st`);
// }else if(myNumbers[i]== 2){
//     console.log(`${myNumbers[i]}nd`);
// }else if(myNumbers[i]== 3){
//     console.log(`${myNumbers[i]}rd`);
// }else if(myNumbers[i]>= 4 && myNumbers [i] <=9){
//     console.log(`${myNumbers[i]}th`);
// }
// }

//34.  pizzas

// let myPizza =["cheese pizza", "tikka pizza","vegeterian pizza"];
// for (let i = 0; i < myPizza.length ; i ++) {
//     console.log(myPizza[i]);
// } 
// for (let i = 0 ; i < myPizza.length ; i++) {
//     console.log(`I LIKE TO EAT ${myPizza[i]}`);
// }
// console.log(
//     `\n I really like to eat pizzass . Pizza comes in a variety of flavors and tooping,\n `
// );

//35. animals 

// let animals: string[] =["dog","tiger","rabbit"];
// animals.forEach(animals =>{
//     console.log(`A ${animals} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");


//36. function make shirt

// function make_shirt (size : string, message: string) {
//     console.log(`Making a ${size} t-shirt with meassage "${message}" printed on it.`);
// }
// make_shirt("medium", "code is life");

//37.large shirts

// function make_shirt (size : string = "large", message: string ="I love typescript") {
//     console.log(`Making a ${size} t-shirt with meassage "${message}" printed on it.`);
// }
// make_shirt();
// make_shirt("medium");
// make_shirt("small", "Dive into Coding");

//38.cities

// function describe_city(city : string, country: string = "Pakistan") {
//     console.log(`${city} is in ${country}.`);
// }
//  describe_city("Karachi");
//  describe_city("Lahore");
//  describe_city("Tokyo","Japan");

//39. city names

// function city_country (city: string, country: string){
//     console.log(`"${city}, ${country}"`);
// }
// city_country("Karachi", "Pakistan");
// let mycities =city_country("karachi","Pakistan");
// console.log(mycities);

// console.log(city_country("DUBAI","UAE"));
// console.log(city_country("LONDON","UNITED KINGDOM"));
// console.log(city_country("RIYAZ","SAUDIA ARABIA"));

//40. album

// function make_Album (artistName: string, albumTitle: string){
//     return{artistName, albumTitle}
// }
// let album1 = make_Album(" Ali", "Rang-e-mohabbat");
// let album2 = make_Album(" Ahmed", "Roshan Adhera");
// let album3 = make_Album(" Khizar", "Mausam-e-Dil");

// console.log(album1);
// console.log(album2);
// console.log(album3);

// //number of tracks
// function make_Album2(artistName:string, albumTitle: string, numberOfTracks?: number){
//     return{artistName, albumTitle, numberOfTracks}
// }
// let album4 = make_Album2("Ali","dil hai",30);
// let album5 = make_Album2(" Ahmed", "ajeeb kahani",55);
// let album6 = make_Album2(" Arjit singh", " humari adhuri kahani",2.0);
// console.log(album4);
// console.log(album5);
// console.log(album6);

// 41. Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in
//  a centralized manner. This is useful for handling lists of data.
//example 1
// let magician: string[]= ["John","Edward","Silas"];

// function show_magicians(magicians: string[]){
//     magician.forEach(magician=>{
//         console.log(magician);
//     });
// }
// show_magicians(magician);
// example 2
// let magician: string[] =["Alia","Anthony","Qasim"];

// function show_magicians(magicians: string[]){
//     magician.forEach(magician=>{
//         console.log(magician);
//     });
// }

// show_magicians(magician);

// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data.
//  This shows the impact of passing arrays by reference.
// function make_great(magicians: string[]){
//     for (let i =0; i< magicians.length; i++){
//         magicians[i] = magicians[i] + "The Great";
//     }
// }
// make_great(magician);
// show_magicians(magician);

// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
//solution
// let magicians: string[] = ["John", "Edward", "Silas"];

// function makeGreat(magicians: string[]): string[] {
//   let greatMagicians: string[] = [];
//   magicians.forEach(magician => {
//     greatMagicians.push(`${magician} The Great`);
//   });
//   return greatMagicians;
// }

// let greatMagicians = makeGreat(magicians.slice()); // Create a copy of the magicians array to avoid modifying the original

// console.log("Original magicians:");
// console.log(magicians); // Show the original magicians names

// console.log("Great Magicians:");
// console.log(greatMagicians); // Show the great magicians names

// 44. Sandwiches: Summarize sandwich orders with varying ingredients.
 
// solution:
// function make_sandwich(...items: string[]){
//     console.log(`Making a sandwhich with : ${items.join(',')}`);
// }
// make_sandwich("ham","cheese");
// make_sandwich("turkey"," lettuce","tomato");
// make_sandwich("avacado","sprouts","mustard","mayo");

// 45. Cars: Create detailed car objects with flexible properties.

// // solution
// function car_object(manufacturer: string, model: string ,...options: [string, any][]): object {
//     let car: {[key: string]: any} = { manufacturer, model };

//  options.forEach(([key, value]) =>  car[key] = value);
//  return car;
// }
// console.log(car_object('Toyota','Carolla',['color','red'],['year',2020]))
// console.log(car_object("Ford","Fiesta",["color", "blue"], ["sunroof", true]));


















 








