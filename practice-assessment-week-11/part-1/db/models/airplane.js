'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    flightNumber:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {

        check1(number) {
          console.log("yoyoyoy")

          const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          slice1 = number.slice(0,2)
          for (let i of slice1) {
            if (!alphabet.includes(i)) throw new Error("phucccc");

          }

        }

    },
  },

    model: DataTypes.STRING,
    inService: DataTypes.BOOLEAN,
    homeBase: DataTypes.STRING,
    maxNumPassengers: DataTypes.INTEGER,
    currentNumPassengers: DataTypes.INTEGER,
    cruisingAltitudeFt: DataTypes.INTEGER,
    firstFlightDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
