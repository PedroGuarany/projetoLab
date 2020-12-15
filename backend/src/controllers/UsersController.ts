import { Request, Response} from 'express'
import { getRepository } from 'typeorm';
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
    }
};