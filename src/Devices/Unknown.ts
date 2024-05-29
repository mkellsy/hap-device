import { Device } from "./Device";

/**
 * Defines an unknown (placeholder) device.
 */
export interface Unknown extends Device {
    /**
     * Is called when a new state is available.
     */
    update(_status: unknown): void;

    /**
     * Controls the device.
     */
    set(_state: unknown): void;
}
