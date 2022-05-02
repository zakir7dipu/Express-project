

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("users",{
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('admin', 'employee', 'client'),
            allowNull: false,
            // defaultValue: "client"
        }
    },{
        createdAt:"created_at",
        updatedAt:"updated_at"
    })
    return User;
}