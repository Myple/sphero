var sphero = require('./index')

const TIME = 2000;
const WAIT = 500;
const SPEED = 100;

sphero.on('sphero', async function(sphero) {
    await sphero.roll(SPEED, TIME, 270)
    await sphero.wait(WAIT)
    await sphero.roll(SPEED, TIME, 0)
    await sphero.wait(WAIT)
    await sphero.roll(SPEED, TIME, 90)
    await sphero.wait(WAIT)
    await sphero.roll(SPEED, TIME, 180)
    await sphero.wait(WAIT)
})

sphero.findSpheroMini()
