// Área responsável pelas rotas da aplicação

// Importando os dados obtidos do banco de dados fake que serão persistidos na página orphanages.html
const orphanages = require('./database/fakedata')

module.exports = {
    index(req, res){
        const city = req.query.city //Obtendo dados da requisão, vinda do front-end
        return res.render('index', {city})
    },
    orphanage(req, res){
        return res.render('orphanage')
    },
    orphanages(req, res){
        return res.render('orphanages', {orphanages})
    },
    createOrphanage(req, res){
        return res.render('create-orphanage')
    }
}