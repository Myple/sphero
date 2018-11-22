var noble = require('@nodemate/noble')
var util = require('util')
var events = require('events')
const sphero_mini = require("./toys/sphero-mini");

var Scanner = function() {
}

var scanner = new Scanner()

util.inherits(Scanner, events.EventEmitter);

scanner.startWithPrefix = function(prefix) {
    var self = this
    if (noble.state === 'poweredOn') {
        noble.startScanning()
    } else {
        noble.on('stateChange', function(state) {
            if (state === "poweredOn") {
                noble.startScanning()
              } else {
                noble.stopScanning()
              }
        })
    }

    noble.on("discover", function(peripheral) {
        if (peripheral.advertisement.localName == null) { return }
        if (peripheral.advertisement.localName.startsWith(prefix)) {
            noble.stopScanning()
            self.emit('toy', new sphero_mini.SpheroMini(peripheral))
        }
      })
}

module.exports = scanner