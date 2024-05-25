/**
 * Defines a device's current status response.
 */
export interface DeviceState {
    state:
        | "On"
        | "Off"
        | "Open"
        | "Closed"
        | "Heat"
        | "Cool"
        | "Auto"
        | "Occupied"
        | "Unoccupied"
        | "Unknown";
    speed?: number;
    level?: number;
    tilt?: number;
    hue?: number;
    humidity?: number;
    luminance?: number;
    temprature?: number;
    eco?:
        | "On"
        | "Off";
    auto?:
        | "On"
        | "Off";
    whoosh?:
        | "On"
        | "Off";
}
