const instrumentFamilyData = require('../data/instrument_family_data.js');
const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:allInstruments', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;

    const instrumentFamily = this.data[selectedIndex];
    PubSub.publish('InstrumentFamilies:family', instrumentFamily);

  });

};

module.exports = InstrumentFamilies;
