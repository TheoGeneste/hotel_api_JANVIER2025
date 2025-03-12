const bcrypt = require('bcryptjs');
const AuthService = require('../services/authService');

async function login(req, res) {
    try {
        const user = await AuthService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        // const token = AuthService.generateToken(user);
        res.status(200).json({ token: "connecté" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

module.exports = {
    login
};