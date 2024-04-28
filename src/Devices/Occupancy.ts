import { Common } from "./Common";
import { AreaStatus } from "../State/AreaStatus";

export interface Occupancy extends Common {
    update(status: AreaStatus): void;
    set(_state: unknown): void;
}
