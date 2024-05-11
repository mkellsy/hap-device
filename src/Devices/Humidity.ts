
import { AreaStatus } from "../State/AreaStatus";
import { Device } from "./Device";

export interface Humidity extends Device {
    update(status: AreaStatus): void;
    set(_state: unknown): void;
}
