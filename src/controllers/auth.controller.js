export const register = async (req, res) => {
    const {email, password, username} = req.body;
}

export const login = async (req, res) => {
    res.send('Login exitoso');

}