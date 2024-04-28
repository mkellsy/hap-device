import { Device } from "./Device";
import { DeviceState } from "../State/DeviceState";
import { ZoneStatus } from "../State/ZoneStatus";

export interface Strip extends Device {
    update(status: ZoneStatus & any): void;
    set(status: Partial<DeviceState>): void;
}
