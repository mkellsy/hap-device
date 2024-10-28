import { Device } from "./Device";
import { DeviceState } from "../State/DeviceState";
import { TimeclockStatus } from "../State/TimeclockStatus";

/**
 * Defines a timeclock device.
 * @public
 */
export interface Timeclock extends Device {
    /**
     * Is called when a new state is available.
     *
     * @param status The current zone state.
     */
    update(status: TimeclockStatus): void;

    /**
     * Controls the device.
     *
     * @param status A partial device state object.
     */
    set(status: Partial<DeviceState>): Promise<void>;
}
