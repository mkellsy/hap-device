import { Button } from "./Button";
import { Device } from "./Device";
import { DeviceState } from "../State/DeviceState";

/**
 * Defines a keypad (Sunnata) device.
 */
export interface Keypad extends Device {
    /**
     * The buttons available on the device.
     */
    buttons: Button[];

    /**
     * Is called when a new state is available.
     */
    update(_status: unknown): void;

    /**
     * Controls the device leds.
     *
     * @param status A partial device state object.
     */
    set(status: Partial<DeviceState>): Promise<void>;
}
