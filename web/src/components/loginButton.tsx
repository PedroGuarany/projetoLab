import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../services/api';


function LoginDialog() {
    var password = '';

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        password = e.target.value;
    }

    async function logIn(e:React.ChangeEvent<any>) {
        api.post('/login', password);
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Entrar
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="from-dialog-title"> Digite a senha de acesso</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='password'
                        label='Senha'
                        type='password'
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={logIn}> Entrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LoginDialog