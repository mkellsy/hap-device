import { Common } from "./Common";

export interface Unknown extends Common {
    update(_status: unknown): void;
    set(_state: unknown): void;
}
