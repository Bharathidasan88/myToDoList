module.exports = {
    toDoList: ({ sequelize, Sequelize }) => {
        const toDo = sequelize.define('To_do_list', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId:Sequelize.INTEGER,
            toDoList: Sequelize.STRING(55),
            status:Sequelize.INTEGER,
            isActive: Sequelize.BOOLEAN
        }, {
            createdAt: "created",
            updatedAt: "updated"
        })

        return toDo

    }
}