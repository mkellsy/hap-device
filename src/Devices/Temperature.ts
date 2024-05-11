
import { AreaStatus } from "../State/AreaStatus";
import { Device } from "./Device";

export interface Temperature extends Device {
    update(status: AreaStatus): void;
    set(_state: unknown): void;
}
