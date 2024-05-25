import { Device } from "./Device";
import { DeviceState } from "../State/DeviceState";
import { ZoneStatus } from "../State/ZoneStatus";

/**
 * Defines a on/off switch device.
 */
export interface Switch extends Device {
    /**
     * Is called when a new state is available.
     *
     * @param status The current zone state.
     */
    update(status: ZoneStatus): void;

    /**
     * Controls the device.
     *
     * @param status A partial device state object.
     */
    set(status: Partial<DeviceState>): void;
}
