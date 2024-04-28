import { Common } from "./Common";
import { DeviceState } from "../State/DeviceState";
import { ZoneStatus } from "../State/ZoneStatus";

export interface Contact extends Common {
    update(status: ZoneStatus): void;
    set(status: Partial<DeviceState>): void;
}
