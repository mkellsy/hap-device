import { AreaStatus } from "../State/AreaStatus";
import { Device } from "./Device";

/**
 * Defines a occupancy sensor device.
 * @public
 */
export interface Occupancy extends Device {
    /**
     * Is called when a new state is available.
     *
     * @param status The current zone state.
     */
    update(status: AreaStatus): void;

    /**
     * Controls the device.
     */
    set(state: unknown): Promise<void>;
}
