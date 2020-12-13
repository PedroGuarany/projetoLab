import express from 'express';
import { getRepository } from 'typeorm';
import User from './models/User'

import './database/connection';

const app = express();

app.use(express.json());

app.post('/users', async (request, response) => {
    const {name, acess_code} = request.body;
    
    const userRepository = getRepository(User)
    
    const user = userRepository.create({
        name,
        acess_code,
    });
    
    await userRepository.save(user);

    return response.json({message: 'Usuário cadastrado!'});
});

app.listen(3333);