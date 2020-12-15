import { Request, Response} from 'express'
import { getRepository, getConnection } from 'typeorm';
import User from '../models/User'

export default {
    async index(request: Request, response: Response){
        const userRepository = getRepository(User);

        const users = await userRepository.find();

        return response.json(users);
    },

    async create(request: Request, response: Response){
        const {name, acess_code} = request.body;
    
        const userRepository = getRepository(User);
    
        const user = userRepository.create({
           name,
           acess_code,
      });
    
        await userRepository.save(user);

        return response.status(201).json(user);
    },

    async login(request: Request, response: Response){
        const { acess_code } = request.body;

        const user = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.acess_code = :acess_code", {acess_code : acess_code})
        .getOne();    

        if (user != null){
            response.status(201).json(`Seja bem vindo ${user.name}!`);
            console.log(`Seja bem vindo ${user.name}!`);
        }
        else{
            response.status(402).json(`Usuário não encontrado, tente novamente :(`);
            console.log('vish');
        }
    }
};