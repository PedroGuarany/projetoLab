import React from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function LoginDialog() {
    var data = {
        name: '',
        acess_code: 0
    }

    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleUsernameInputChange = (e: React.ChangeEvent<any>) => {
        data.name = (e.target.value).toLowerCase();
    }

    const handlePasswordInputChange = (e: React.ChangeEvent<any>) => {
        data.acess_code = parseInt(e.target.value);
    }

    async function logIn() {
        try {
            const response = await api.post('login', data);
            const {auth, token} = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('auth', auth);
            api.defaults.headers.Authorization = `Bearer ${token}`;
            history.push('/reserve');
        } catch(e) {
            return false;
        }
        
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Entrar
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="from-dialog-title"> Digite o usuário e a senha</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='user'
                        label='Usuário'
                        type='text'
                        onChange={handleUsernameInputChange}
                    />
                    <TextField
                        margin='dense'
                        id='password'
                        label='Senha'
                        type='password'
                        onChange={handlePasswordInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={logIn}> Entrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LoginDialog;