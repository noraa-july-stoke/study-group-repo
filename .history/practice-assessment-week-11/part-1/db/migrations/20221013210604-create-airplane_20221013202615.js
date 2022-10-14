// 'use strict';
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Airplanes', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       flightNumber: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique:true
//       },

//       model: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       inService: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//         defaultValue: true
//       },
//       homeBase: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true
//       },

//       maxNumPassengers: {
//         type: Sequelize.INTEGER
//       },
//       currentNumPassengers: {
//         type: Sequelize.INTEGER
//       },
//       cruisingAltitudeFt: {
//         type: Sequelize.INTEGER
//       },
//       firstFlightDate: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Airplanes');
//   }
// };


'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inService: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      homeBase: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currentNumPassengers: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cruisingAltitudeFt: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      firstFlightDate: {
        type: Sequelize.STRING,
        allowNull: true

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};
