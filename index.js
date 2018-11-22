var scanner = require('./lib/scanner')
var util = require('util')
var events = require('events')

var Sphero = function() {
    var self = this
    scanner.on('toy', function(toy) {
        self._start(toy)
    })
}

util.inherits(Sphero, events.EventEmitter)

var sphero = new Sphero()

sphero._start = async function(toy) {
    await toy.start();
    this.emit('sphero', toy)
}

sphero.findSpheroMini = function() {
    scanner.startWithPrefix('SM-')
}

module.exports = sphero