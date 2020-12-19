import { Request, Response} from 'express'
import { getRepository, getConnection } from 'typeorm';
import User from '../models/User'

require("dotenv-safe").config();
import jwt from 'jsonwebtoken';

export default {
    async index(request: Request, response: Response){
        verifyJWT(request, response);

        const userRepository = getRepository(User);

        const users = await userRepository.find();

        return response.json(users);
    },

    async create(request: Request, response: Response){
        const name = (request.body.name).toLowerCase();

        const acess_code = getRandomIntInclusive();
        const userRepository = getRepository(User);

        const user = userRepository.create({
           name,
           acess_code,
      });
    
        await userRepository.save(user);

        return response.status(201).json(user);
    },

    async login(request: Request, response: Response){
        const { name, acess_code } = request.body;

        const user = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.name = :name", { name: (name) })
        .andWhere("user.acess_code = :acess_code", {acess_code : acess_code})
        .getOne();    

        if (user !== undefined){
            const id  = user.id;
            const token = jwt.sign({ id }, `${process.env.SECRET}`, {
                expiresIn: 300 // expires in 5min
            });
            return response.status(201).json({ auth: true, token: token });
        }
        else{
            response.status(402).json({auth: false, token:null});
        }
    }
};

// funcao do luiztools
function verifyJWT(request: Request, response: Response){
    const token = request.headers['x-access-token'];
    if (!token) return response.status(401).json({ auth: false, message: 'No token.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return response.status(500).json({ auth: false, message: 'Failed to authenticate.' })
    });
}

function getRandomIntInclusive(){
    let min = Math.ceil(1000);
    let max = Math.floor(9999); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}