import { Request, Response} from 'express'
import { getRepository } from 'typeorm';
import Equipment from '../models/Equipment'

export default {
    async index(request: Request, response: Response){
        const equipmentRepository = getRepository(Equipment);

        const equipments = await equipmentRepository.find();

        return response.json(equipments);
    },

    async create(request: Request, response: Response){
        const {name, picture} = request.body;
    
        const equipmentRepository = getRepository(Equipment);
    
        const equipment = equipmentRepository.create({
            name,
            picture,           
      });
    
        await equipmentRepository.save(equipment);

        return response.status(201).json(equipment);
    }
};