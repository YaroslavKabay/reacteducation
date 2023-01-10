import {userService} from './services/user.service'

userService.getAll().then(({data})=> {
    console.log(data[0].address.geo.lat);
})
userService.getById(2).then(({data})=>{
    console.log(data.name);
})