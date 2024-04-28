import { Device } from "./Device";
import { DeviceState } from "../State/DeviceState";
import { ZoneStatus } from "../State/ZoneStatus";

export interface Switch extends Device {
    update(status: ZoneStatus): void;
    set(status: Partial<DeviceState>): void;
}
