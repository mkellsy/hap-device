import { Button } from "./Button";
import { Common } from "./Common";

export interface Keypad extends Common {
    buttons: Button[];

    update(_status: unknown): void;
    set(_status: unknown): void;
}
