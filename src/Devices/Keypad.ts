import { Button } from "./Button";
import { Device } from "./Device";

/**
 * Defines a keypad (Sunnata) device.
 */
export interface Keypad extends Device {
    /**
     * The buttons available on the device.
     */
    buttons: Button[];

    /**
     * @noop
     * Is called when a new state is available.
     */
    update(_status: unknown): void;

    /**
     * @noop
     * Controls the device.
     */
    set(_status: unknown): void;
}
