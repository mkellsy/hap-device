import { Common } from "./Common";

export interface Keypad extends Common {
    update(_status: unknown): void;
    set(_status: unknown): void;
}
