import { Button } from "./Button";
import { Device } from "./Device";

export interface Remote extends Device {
    buttons: Button[];

    update(_status: unknown): void;
    set(_state: unknown): void;
}
