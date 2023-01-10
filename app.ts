// const x = (arr:string[]) => { // shows that it is string array
// // const x = (arr:number[]) => { // shows that it is number array
// // const x = (arr:boolean[]) => { // shows that it is boolean array
// // const x = (arr:object) => { // shows that it is object
//     arr[0].startsWith('e') // will show all string/other type methods
// }
//
// const y = (a: number, b: string): void => { // if the fn returns nothing - void, else  - type number etc
// // const y = (a: number, b: string): void|string => {
//
// }
// y(1, 'lalalalalla') //
//
// const user:{ name: string, age: number, status: boolean } = {name:'1', age: 2, status: true};

//***************************//***************************//***************************//***************************
//INTERFACES
//***************************//***************************//***************************//***************************

// interface IUser{ // is used for similar constants
//     name: string,
//     age: number,
//     status: boolean
// }
//
// const user1: IUser = {name:'2', age: 2, status: false} //^^
// const user2: Partial <IUser> = {name:'2', age: 2, status: false} // дасть використовувати лише ті поля які зазначені в інт, свої не добавиш
//
// interface IAddress{
//     house: string,
//     addressa: [number,string,boolean] // тільки такий масив з такими даними і в такому порядку
// }
// interface IUser1<T,D>{ // below
//     name: string,
//     age: number,
//     status: boolean,
//     data: T,// when we do not know which type of variable there will be
//     data1: D,
//     address: IAddress
// }
//
// const user3: IUser1 <number[], number> = {name:'2', age: 2, status: false, data: [1], data1: 3, address: {house:'',addressa:[1,'',true]}} //<number[]> ^^


//********//********//********//********//********//********//********//********//********//********
// TYPES
//***************************//***************************//***************************//***************************

// type myType = number // за допомоги тайпоф покаже намбер
//
// type useStateType = [string, (a: string, b:number)=>string];
//
// const useState: useStateType = ['dads', (a:'l', b:1) =>`${a}--${b}`];
//
// const [user,setUser] = useState;
//
// user. // will show string methods

//********//********//********//********//********//********//********//********//********//********
// CLASSES
//***************************//***************************//***************************//***************************

// class User{
//     // id: number
//     // name: string
//     // age: number //   їх можна не писати якшо прописати паблік чи прайват чи протектед
//
//     constructor(private id: number, public name: string, protected age: number) {
//         // прайват змінною корист тільки всередині класу,
//         // протектед тільки в класі  + в нащадках
//         // паблік доступна всім
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//
// }
//
// let user = new User(1,'max',45)
// user.name // в підказках буде лише нейм так як він паблік, доступу до нейму і ейджу не буде

//********//********//********//********//********//********//********//********//********//********
// Function and compilation ??
//***************************//***************************//***************************//***************************

// const x = (a: number, b: string):void => {
//     console.log(a + b);
// }
// x(12, 'lal ')

//***************************//***************************//***************************//***************************
// // tsc app.ts - компілює файл в джс, якщо ж помилки то покаже
//махінації з класами//
//***************************//***************************//***************************//***************************

// interface IShapeActions {
//     area: () => number;
//     perimeter: () => number;
// }
// interface IGreating {
//     hello:() => void;
// }
//
// class Rectangel implements IShapeActions,IGreating{ // iмплементує інтерфейси до класу, option enter will add them
//     constructor(private a: number, private b: number) {
//     }
//     area(): number {
//         return this.a*this.b;
//     }
//
//     hello(): void {
//         console.log('hello');
//     }
//
//     perimeter(): number {
//         return this.a*2 +this.b*2;
//     }
//
// }
// //
//
// class Triangle implements IShapeActions{ // iмплементує інтерфейси до класу, option enter will add them
//     constructor(private a: number, private b: number, private c: number) {
//     }
//     area(): number {
//         return this.a*this.b*this.c;
//     }
//
//     hello(): void {
//         console.log('hello');
//     }
//
//     perimeter(): number {
//         return this.a*2 +this.b*2+this.c*2;
//     }
//
// }
//
// const shapes: IShapeActions[] = [new Triangle(1,2,3), new Rectangel(10,20)] // можна стоврити змінну одну дляя 2 класів
//
// for (const shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }

import {MyEnum} from './enums/my.enum'
const x = () => {
    return 'lsjslsld'
}

type MyType = ReturnType<typeof x> // бере тип з ретьорну x

const a:MyType = 'lsjda' // only string

console.log(MyEnum.OK);


// 1)
// interface IMission {
//
//     mission_name: string;
//     launch_date_local: string;
//     launch_site: {
//         site_name_long: string;
//     },
//     links: {
//         article_link: string;
//         video_link: string;
//     },
//     rocket: {
//         rocket_name: string;
//         first_stage: {
//             cores: [
//                 {
//                     flight: number;
//                     core: {
//                         reuse_count: number;
//                         status: string;
//                     }
//                 }
//             ]
//         },
//         second_stage: {
//             payloads: [
//                 {
//                     payload_type: string;
//                     payload_mass_kg: number;
//                     payload_mass_lbs: number;
//                 }
//             ]
//         }
//     }
// }
//
// const mission: IMission = {
//     mission_name: "Starlink-15 (v1.0)",
//     launch_date_local: "2020-10-24T11:31:00-04:00",
//     launch_site: {
//         site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
//     },
//     links: {
//         article_link: null,
//         video_link: "https://youtu/J442-ti-Dhg"
//     },
//     rocket: {
//         rocket_name: "Falcon 9",
//         first_stage: {
//             cores: [
//                 {
//                     flight: 7,
//                     core: {
//                         reuse_count: 6,
//                         status: "unknown"
//                     }
//                 }
//             ]
//         },
//         second_stage: {
//             payloads: [
//                 {
//                     payload_type: "Satellite",
//                     payload_mass_kg: 15400,
//                     payload_mass_lbs: 33951.2
//                 }
//             ]
//         }
//     }
// }

// 2)
// interface User {
//     name:string,
//     age:number,
//     gender:string
// }
//
// type sumType = (a:number,b:number) => number;
// type showSumType = (a:number,b:number) => void;
// type incAgeType = (someUser:User,inc:number) => User;
//
// const sum:sumType=(a:number,b:number) => {
//     return a+b
// };
// const showSum:showSumType =(a:number,b:number) => {
//     console.log(a + b)
// };
// const incAge:incAgeType =(someUser, inc) => {
//     someUser.age+=inc
//     return someUser
// };
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
// console.log(sum(1, 2));
// console.log(showSum(2, 3));
// console.log(incAge(user, 2));
// const random=1;

