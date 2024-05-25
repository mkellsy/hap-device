
import { AreaStatus } from "../State/AreaStatus";
import { Device } from "./Device";

/**
 * Defines a occupancy sensor device.
 */
export interface Occupancy extends Device {
    /**
     * Is called when a new state is available.
     *
     * @param status The current zone state.
     */
    update(status: AreaStatus): void;

    /**
     * @noop
     * Controls the device.
     */
    set(_state: unknown): void;
}
