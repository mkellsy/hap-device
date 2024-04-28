import { Common } from "./Common";

export interface Remote extends Common {
    update(_status: unknown): void;
    set(_state: unknown): void;
}
