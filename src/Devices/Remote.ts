import { Button } from "./Button";
import { Common } from "./Common";

export interface Remote extends Common {
    buttons: Button[];

    update(_status: unknown): void;
    set(_state: unknown): void;
}
