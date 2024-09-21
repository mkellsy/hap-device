import { AreaStatus } from "../State/AreaStatus";
import { Device } from "./Device";
import { DeviceState } from "../State/DeviceState";

/**
 * Defines a thermostat device.
 */
export interface Thermostat extends Device {
    /**
     * Is called when a new state is available.
     *
     * @param status The current zone state.
     */
    update(status: AreaStatus): void;

    /**
     * Controls the device.
     *
     * @param status A partial device state object.
     */
    set(status: Partial<DeviceState>): Promise<void>;
}
