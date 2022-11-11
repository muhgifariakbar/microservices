'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    salary: DataTypes.STRING,
    currency: DataTypes.STRING,
    on_contract: DataTypes.BOOLEAN,
    department: DataTypes.STRING,
    sub_department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};