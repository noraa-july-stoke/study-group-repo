'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here
  {
    name: 'Homelander',
   alias: 'bigBaby',
   affiliation: 'The Seven',
   heightCm: 178,
   isMutant: true,
   race: 'TrueMerican',
   universe: 'The Boys',
   releaseYear: 2019
  },
  {
    name: 'Starlight',
   alias: 'Annie',
   affiliation: 'The Seven',
   heightCm: 166,
   isMutant: true,
   race: 'AmericanSweetheart',
   universe: 'The Boys',
   releaseYear: 2019
  },
  {
    name: 'The Deep',
   alias: 'forgotHisName',
   affiliation: 'The Seven',
   heightCm: 170,
   isMutant: true,
   race: 'FishMerican',
   universe: 'The Boys',
   releaseYear: 2019
  },
  {
    name: 'A Train',
   alias: 'cantMemberEitherNarcisssist',
   affiliation: 'The Seven',
   heightCm: 172,
   isMutant: true,
   race: 'TrueMerican',
   universe: 'The Boys',
   releaseYear: 2019
  },
  {
    name: 'Homelander',
   alias: 'bigBaby',
   affiliation: 'The Seven',
   heightCm: 178,
   isMutant: true,
   race: 'TrueMerican',
   universe: 'The Boys',
   releaseYear: 2019
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
