const db = require('../db')

class UserController {
    async createUser(req,res){
        const {name,surname} = req.body
        const newPerson = await db.query('insert into person (name,surname) values ($1,$2) RETURNING *',[name,surname])
        res.sendStatus(200)
    }
    async getUsers(req,res){
        const users = await db.query('select * from person')
        res.send(users.rows)
    }
    async getOneUser(req,res){
        const id = req.params.id
        const user = await db.query('select * from person where id = $1',[id])
        res.send(user.rows)
    }
    async updateUser(req,res){
        const {id,name,surname} = req.body
        const user = await db.query('update person set name = $1, surname = $2 where id = $3 RETURNING *',[name,surname,id])
        res.send(user.rows)
    }
    async deleteUser(req,res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1',[id])
        res.send(user.rows)
    }
}

module.exports = new UserController()