import { Device } from "./Device";

/**
 * Defines an unknown (placeholder) device.
 */
export interface Unknown extends Device {
    /**
     * Is called when a new state is available.
     */
    update(status: unknown): void;

    /**
     * Controls the device.
     */
    set(state: unknown): Promise<void>;
}
