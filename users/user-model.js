const db = require("../data/db-config.js")


module.exports = {
    allUsers,
    findById,
    add
}

function allUsers(){
    return db('users')
}

function findById(id) {
    return db("users").where({id})
}


function add(user){
    return db('users').insert(user, "id").then(ids => {
        const [ id ] =ids;

        return findById(id);
    })
}