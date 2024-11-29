module.exports = {
    appConfig: ({ sequelize, Sequelize }) => {
        const AppConfig = sequelize.define('App_config', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name:Sequelize.STRING(55),
            isParant: Sequelize.BOOLEAN,
            parantId:Sequelize.INTEGER,
            isActive: Sequelize.BOOLEAN
        }, {
            createdAt: "created",
            updatedAt: "updated"
        })

        return AppConfig

    }
}