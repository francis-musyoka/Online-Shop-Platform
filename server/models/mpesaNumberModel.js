

module.exports = (Sequelize,sequelize)=>{
    const MpesaNumber = sequelize.define('MpesaNumber',{
        id:{
            type:Sequelize.STRING,
            primaryKey: true
        },
        customerId:{
            type:Sequelize.STRING,
            allowNull: false,
            references:{
                model: 'Customers',
                key: 'id'
            },
            onDelete:'CASCADE'
        },
        phoneNumber:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        countryCode:{
            type:Sequelize.STRING,
            allowNull: false,
        }
    });
    return MpesaNumber
};