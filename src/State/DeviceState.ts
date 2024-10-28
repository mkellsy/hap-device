/**
 * Defines a device's current status response.
 * @public
 */
export interface DeviceState {
    state: "On" | "Off" | "Open" | "Closed" | "Heat" | "Cool" | "Auto" | "Occupied" | "Unoccupied" | "Unknown";
}
