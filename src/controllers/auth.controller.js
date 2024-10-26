import User from '../models/user.model.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body;

    const newUser = new User ({
        username,
        email,
        password

    })
}

export const login = async (req, res) => {
    res.send('Login exitoso');

}