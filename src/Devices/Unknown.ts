import { Device } from "./Device";

/**
 * Defines an unknown (placeholder) device.
 */
export interface Unknown extends Device {
    /**
     * @noop
     * Is called when a new state is available.
     */
    update(_status: unknown): void;

    /**
     * @noop
     * Controls the device.
     */
    set(_state: unknown): void;
}
