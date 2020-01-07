'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const courtsInSeoul = require('../seoulCourt.js').body;
    const courts = courtsInSeoul.reduce((accumulator, currentValue) => {
      let {
        lat,
        city,
        gu_nm,
        parkingLot,
        bigo,
        lng,
        phone,
        address,
        in_out,
        web,
        locationName
       } = currentValue;
      
      address = '서울특별시' + address;

      const court = {
        name: locationName,
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        city,
        district: gu_nm,
        address,
        isIndoor: (in_out === '실내'),
        web,
        parkingLot,
        phone,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      if (parseInt(bigo)) court.numberOfCourts = parseInt(bigo);

      return [...accumulator, court];
    }, []);

    return queryInterface.bulkInsert('Courts', courts);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courts', {});
  }
};
