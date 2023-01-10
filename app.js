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
var Rectangel = /** @class */ (function () {
    function Rectangel(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangel.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangel.prototype.hello = function () {
        console.log('hello');
    };
    Rectangel.prototype.perimeter = function () {
        return this.a * 2 + this.b * 2;
    };
    return Rectangel;
}());
//
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.area = function () {
        return this.a * this.b * this.c;
    };
    Triangle.prototype.hello = function () {
        console.log('hello');
    };
    Triangle.prototype.perimeter = function () {
        return this.a * 2 + this.b * 2 + this.c * 2;
    };
    return Triangle;
}());
var shapes = [new Triangle(1, 2, 3), new Rectangel(10, 20)]; // можна стоврити змінну одну дляя 2 класів
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.area());
    console.log(shape.perimeter());
}
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
