import { Address } from "../Properties/Address";
import { FanSpeed } from "../Properties/FanSpeed";

export type ZoneStatus = Address & {
    CCOLevel: "Open" | "Closed";
    Level: number;
    SwitchedLevel: "On" | "Off";
    FanSpeed: FanSpeed;
    Zone: Address;
    StatusAccuracy: "Good";
    AssociatedArea: Address;
    Availability: "Available" | "Unavailable" | "Mixed" | "Unknown";
    Tilt: number;
    AutoLevel: "On" | "Off";
    EcoLevel: "On" | "Off";
    WhooshLevel: "On" | "Off";
    ColorTuningStatus: { WhiteTuningLevel: { Kelvin: number; } };
};
