/**
 * Lists all supported device types.
 * @public
 */
export enum DeviceType {
    /**
     * Contact (CCO) device.
     */
    Contact = "Contact",

    /**
     * Dimmable light device.
     */
    Dimmer = "Dimmer",

    /**
     * Fan device.
     */
    Fan = "Fan",

    /**
     * Humidity sensor.
     */
    Humidity = "Humidity",

    /**
     * Keypad (Sunnata) device.
     */
    Keypad = "Keypad",

    /**
     * Occupancy sensor.
     */
    Occupancy = "Occupancy",

    /**
     * Remote (Pico) device.
     */
    Remote = "Remote",

    /**
     * Window shade device.
     */
    Shade = "Shade",

    /**
     * LED string device.
     */
    Strip = "Strip",

    /**
     * Binary switch device.
     */
    Switch = "Switch",

    /**
     * Timeclock device.
     */
    Timeclock = "Timeclock",

    /**
     * Temperature sensor.
     */
    Thermostat = "Thermostat",

    /**
     * Temperature sensor.
     */
    Temperature = "Temperature",

    /**
     * Unknown (placeholder) device.
     */
    Unknown = "Unknown",
}
