import { Device } from "./Device";
import { DeviceState } from "../State/DeviceState";
import { ThermostatStatus } from "../State/ThermostatStatus";

/**
 * Defines a thermostat device.
 */
export interface Thermostat extends Device {
    /**
     * Is called when a new state is available.
     *
     * @param status The current zone state.
     */
    update(status: ThermostatStatus): void;

    /**
     * Controls the device.
     *
     * @param status A partial device state object.
     */
    set(status: Partial<DeviceState>): Promise<void>;
}
