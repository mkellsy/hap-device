/**
 * Defines a thermostat's current status response.
 * @public
 */
export interface ThermostatStatus {
    /**
     * The id of the device.
     */
    id: string;

    /**
     * The device name.
     */
    name: string;

    /**
     * The current room temprature.
     */
    roomTemp: number;

    /**
     * The device's current mode.
     */
    mode: string;

    /**
     * The device's cool setting.
     */
    spCool: number;

    /**
     * The device's hear setting.
     */
    spHeat: number;

    /**
     * Vane reporting directory.
     */
    vaneDir: string;

    /**
     * The device's current fan speed.
     */
    fanSpeed: string;

    /**
     * The device's temprature source device.
     */
    tempSource: string;

    /**
     * The current zone's active thermostat.
     */
    activeThermistor: string;

    /**
     * Device filters directory.
     */
    filterDirty: boolean;

    /**
     * Heat mode adjustment offset.
     */
    hotAdjust: boolean;

    /**
     * Device defrost mode.
     */
    defrost: boolean;

    /**
     * If the device is in standby mode.
     */
    standby: boolean;

    /**
     * Current test run number.
     */
    runTest: number;

    /**
     * Current humidifier test run number.
     */
    humidTest: number;
}
