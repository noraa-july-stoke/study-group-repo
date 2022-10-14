// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Airplane extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Airplane.init({
//     flightNumber:{
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique:true,
//       validate: {

//         check1(number) {
//           const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//           let slice1 = number.slice(0,2)
//           for (let i of slice1) {
//             if (!alphabet.includes(i)) throw new Error("phucccc");
//           }
//         },

//         check2(number) {

//           let slice2 = number.slice(2,number.length)
//             if (!+slice2) throw new Error("phucccc");
//         },

//         //this checks if length is in range
//         len: [3,6]
//     },
//   },

//     model:{
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: { len: [3, 6] }
//     },

//     inService:{
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true
//     },

//     homeBase: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         goAway(string) {
//           if(!string) throw new Error('fuckoff')
//         },
//         len: [3,3],
//         isAlpha: true,
//         isUppercase: true
//       }},

//     maxNumPassengers: DataTypes.INTEGER,
//     currentNumPassengers: DataTypes.INTEGER,
//     cruisingAltitudeFt: DataTypes.INTEGER,
//     firstFlightDate: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Airplane',
//   });
//   return Airplane;
// };



'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUppercase: true,
        len: [3, 6],

        startsWithTwoLetters(value) {
          if (!(isNaN(Number(value[0])))||!(isNaN(Number(value[1])))) {
            throw new Error('Must begin with two uppercase letters');
          };
          if (value[0] != value[0].toUpperCase()||
          value[1] != value[1].toUpperCase()) {
    throw new Error('Must begin with two uppercase letters');
  };
},
  endsWithNumbers(value) {
  let ending = value.slice(2);
  if (isNaN(Number(ending))) {
    throw new Error('Must end with only numbers');
  }
}
     }
    },
model: {
  type: DataTypes.STRING,
    allowNull: false,
      validate: {
    len: [3, 6]
  }
},

inService: {
  type: DataTypes.BOOLEAN,
    allowNull: false,
      defaultValue: true
},

homeBase: {
  type: DataTypes.STRING,
    allowNull: false,
    //unique: true,
        validate: {
    len: [3, 3],
      isAlpha: true,
      isUppercase: true
  },

},

maxNumPassengers:{
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    min:2,
    max: 853
  }
},
  currentNumPassengers: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 0,
      max: 853,
      checkMax(value) {
        if (value > max) {
          throw new Error()
        }
      }
    }, 
  },
    cruisingAltitudeFt: {
      type:DataTypes.INTEGER,
      allowNull: true,
      validate: {min:500, max:41999}
    },
      firstFlightDate: {
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
          isDate: true,
          isAfter: '2019-12-31',
          isBefore: '2022-01-01'
        }
      },

  // indexes: [
  //     { unique: true, fields: ['homeBase', 'cruisingAltitudeFt'] }
  //   ]


  }, {
  sequelize,
    modelName: 'Airplane',
  });
return Airplane;
};
