import axios,{AxiosResponse} from "axios";
import {ICar} from '../interfaces'
import {urls} from '../constants'
import {AxiosRes, axiosService} from '../services'


export const carService = {
    getAll:(): AxiosRes<ICar[]> => axiosService.get(urls.cars),
    getById:(id: number):AxiosRes<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create:(car: ICar):AxiosRes<ICar> => axiosService.post(urls.cars, car),
}