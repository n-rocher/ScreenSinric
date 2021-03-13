require('dotenv').config();

const { SinricPro, SinricProActions, raiseEvent, eventNames } = require("sinricpro");

const turnOffDisplay = require("turn-off-display");

const appKey = process.env.SINRIC_KEY
const secretKey = process.env.SINRIC_SECRET
const device1 = process.env.SINRIC_DEVICE

const sinricpro = new SinricPro(appKey, [device1], secretKey, false);

function setPowerState(deviceid, data) {
    console.log("setPowerState", data)

    if (data === "Off") {
        turnOffDisplay();
    }

    return true
}

SinricProActions(sinricpro, {
    setPowerState
})

setTimeout(_ => {
    raiseEvent(sinricpro, eventNames.powerState, device1, { state: "On" });
}, 5000)