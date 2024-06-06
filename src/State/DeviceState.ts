import { Address } from "../Properties/Address";

/**
 * Defines a device's current status response.
 */
export interface DeviceState {
    state: "On" | "Off" | "Open" | "Closed" | "Heat" | "Cool" | "Auto" | "Occupied" | "Unoccupied" | "Unknown";
}
