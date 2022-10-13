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
        unique:true
      },

      model: {
        type: Sequelize.STRING
      },
      inService: {
        type: Sequelize.BOOLEAN
      },
      homeBase: {
        type: Sequelize.STRING
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER
      },
      currentNumPassengers: {
        type: Sequelize.INTEGER
      },
      cruisingAltitudeFt: {
        type: Sequelize.INTEGER
      },
      firstFlightDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
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
