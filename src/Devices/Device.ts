import * as Logger from "js-logger";

import { Address } from "../Properties/Address";
import { Area } from "../Properties/Area";
import { AreaStatus } from "../State/AreaStatus";
import { Capability } from "../Properties/Capability";
import { DeviceState } from "../State/DeviceState";
import { DeviceType } from "../Properties/DeviceType";
import { ZoneStatus } from "../State/ZoneStatus";

export interface Device {
    id: string;
    name: string;
    room: string;
    capabilities: { [key: string]: Capability };
    log: Logger.ILogger;
    address: Address;
    type: DeviceType;
    area: Area;
    status: DeviceState;

    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    off(event?: string, listener?: Function): this;
    emit(...payload: any[]): boolean;
    update(status: ZoneStatus | AreaStatus): void;
    set(state: Partial<DeviceState>): void;
}
