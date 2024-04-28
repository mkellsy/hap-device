import { Device } from "./Device";

export interface Unknown extends Device {
    update(_status: unknown): void;
    set(_state: unknown): void;
}
