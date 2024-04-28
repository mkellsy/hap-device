import { Button } from "./Button";
import { Device } from "./Device";

export interface Keypad extends Device {
    buttons: Button[];

    update(_status: unknown): void;
    set(_status: unknown): void;
}
