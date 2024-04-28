import { Common } from "./Common";
import { DeviceState } from "../State/DeviceState";
import { ZoneStatus } from "../State/ZoneStatus";

export interface Shade extends Common {
    update(status: ZoneStatus): void;
    set(status: Partial<DeviceState>): void;
}
