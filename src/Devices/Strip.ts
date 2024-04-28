import { Common } from "./Common";
import { DeviceState } from "../State/DeviceState";
import { ZoneStatus } from "../State/ZoneStatus";

export interface Strip extends Common {
    update(status: ZoneStatus & any): void;
    set(status: Partial<DeviceState>): void;
}
