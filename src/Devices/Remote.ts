import { Button } from "./Button";
import { Device } from "./Device";

/**
 * Defines a remote (Pico) device.
 */
export interface Remote extends Device {
    /**
     * The buttons available on the device.
     */
    buttons: Button[];

    /**
     * Is called when a new state is available.
     */
    update(_status: unknown): void;

    /**
     * Controls the device.
     */
    set(state: unknown): Promise<void>;
}
