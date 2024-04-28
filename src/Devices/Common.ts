import * as Logger from "js-logger";

import { Address } from "../Properties/Address";
import { Area } from "../Properties/Area";
import { Capability } from "../Properties/Capability";
import { DeviceState } from "../State/DeviceState";
import { DeviceType } from "../Properties/DeviceType";

export interface Common {
    id: string;
    name: string;
    room: string;
    capabilities: { [key: string]: Capability };
    log: Logger.ILogger;
    address: Address;
    type: DeviceType;
    area: Area;
    status: DeviceState;
}
