require('dotenv').config();

const { SinricPro, SinricProActions, raiseEvent, eventNames } = require("sinricpro");

const turnOffDisplay = require("turn-off-display");

const appKey = process.env.SINRIC_KEY
const secretKey = process.env.SINRIC_SECRET
const device1 = process.env.SINRIC_DEVICE

function setPowerState(deviceid, data) {
    console.log("setPowerState", data)

    if (data === "Off") {
        turnOffDisplay();
    }

    return true
}

function initiate() {
    let sinricpro = new SinricPro(appKey, [device1], secretKey, false);

    SinricProActions(sinricpro, {
        setPowerState
    })

    sinricpro.on("error", _ => {})

    sinricpro.on("close", _ => {
        console.info("[INFO] Close event")
        sinricpro = null
        setTimeout(initiate, 2000)
    })

    sinricpro.on("open", _ => {
        console.info("[INFO] Open event")

        setTimeout(_ => {
            raiseEvent(sinricpro, eventNames.powerState, device1, { state: "On" });
        }, 2000)
    })

}

initiate()