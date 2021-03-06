const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('letter', letter => {
  /*eslint-disable-next-line*/
  console.log(`RECEIVED: ${letter}`);
});

const letters = 'Hi, there.';

[...letters].forEach(letter => {
  ee.emit('letter', letter);
});
