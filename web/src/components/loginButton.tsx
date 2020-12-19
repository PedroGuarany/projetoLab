import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../services/api';


function LoginDialog() {
    var user = '';
    var password = '';

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleUsernameInputChange = (e: React.ChangeEvent<any>) => {
        user = e.target.value;
    }

    const handlePasswordInputChange = (e: React.ChangeEvent<any>) => {
        password = e.target.value;
    }

    async function logIn() {
        const data = {
            name: user,
            acess_code: password,
        }
        const response = await api.post('login', data);
        console.log(response)
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