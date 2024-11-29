module.exports = {
    User: ({ sequelize, Sequelize }) => {
        const user = sequelize.define('User', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING(55),
            email: {
                type: Sequelize.STRING(255),
                validate: {
                    isEmail: true
                }
            },
            hashedPassword: {
                type: Sequelize.STRING(64),
                validate: {
                    is: /^[0-9a-f]{64}$/i
                }
            }
        }, {
            createdAt: "created",
            updatedAt: "updated"
        })

        return user

    }
}