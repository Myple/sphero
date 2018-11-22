"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
const utils = require("../utils");
class RollableToy extends core_1.Core {
    async roll(speed, time, heading, flags) {
        if (flags === undefined) { flags = [] }
        let drive = true;
        if (time !== undefined) {
            setTimeout(() => (drive = false), time);
            while (drive) {
                await this.queueCommand(this.commands.driving.drive(speed, heading, flags));
            }
            await this.queueCommand(this.commands.driving.drive(0, heading, flags));
        } else {
            await this.queueCommand(this.commands.driving.drive(speed, heading, flags));
        }
    }
    async wait(time) {
        await utils.wait(time);
    }
    makeGreen() {
        return this.queueCommand(this.commands.userIo.setMainLedColor(0, 0xFF, 0));
    }
    makeRed() {
        return this.queueCommand(this.commands.userIo.setMainLedColor(0xFF, 0, 0));
    }
    makeBlue() {
        return this.queueCommand(this.commands.userIo.setMainLedColor(0, 0, 0xFF));
    }
    allLEDsRaw(payload) {
        return this.queueCommand(this.commands.userIo.allLEDsRaw(payload));
    }
    setBackLedIntensity(i) {
        return this.queueCommand(this.commands.userIo.setBackLedIntensity(i));
    }
    setMainLedBlueIntensity(i) {
        return this.queueCommand(this.commands.userIo.setMainLedBlueIntensity(i));
    }
    setMainLedColor(r, g, b) {
        return this.queueCommand(this.commands.userIo.setMainLedColor(r, g, b));
    }
    setMainLedGreenIntensity(i) {
        return this.queueCommand(this.commands.userIo.setMainLedGreenIntensity(i));
    }
    setMainLedRedIntensity(i) {
        return this.queueCommand(this.commands.userIo.setMainLedRedIntensity(i));
    }
}
exports.RollableToy = RollableToy;
