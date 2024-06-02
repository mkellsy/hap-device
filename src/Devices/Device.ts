import * as Logger from "js-logger";

import { Address } from "../Properties/Address";
import { Area } from "../Properties/Area";
import { AreaStatus } from "../State/AreaStatus";
import { Capability } from "../Properties/Capability";
import { DeviceState } from "../State/DeviceState";
import { DeviceType } from "../Properties/DeviceType";
import { TimeclockStatus } from "../State/TimeclockStatus";
import { ZoneStatus } from "../State/ZoneStatus";

/**
 * Stores common information about a device.
 */
export interface Device {
    /**
     * The device's unique identifier.
     */
    id: string;

    /**
     * The device's configured name.
     */
    name: string;

    /**
     * The device's configured room.
     */
    room: string;

    /**
     * The devices capibilities. This is a map of the fields that can be set
     * or read.
     */
    capabilities: { [key: string]: Capability };

    /**
     * The device's manufacturer.
     */
    manufacturer: string;

    /**
     * A logger for the device. This will automatically print the devices name,
     * room and id.
     */
    log: Logger.ILogger;

    /**
     * The href address of the device. This is mainly used for Lutron systems.
     */
    address: Address;

    /**
     * The device type.
     */
    type: DeviceType;

    /**
     * The area the device is in.
     */
    area: Area;

    /**
     * The current state of the device.
     */
    status: DeviceState;

    /**
     * Binds a listener to an event.
     *
     * @param event The event to bind to.
     * @param listener The listener to bind.
     */
    on(event: string, listener: Function): this;

    /**
     * Binds a, rone once listener to an event.
     *
     * @param event The event to bind to.
     * @param listener The listener to bind.
     */
    once(event: string, listener: Function): this;

    /**
     * Unbinds a listener to an event.
     *
     * @param event The event to unbind from.
     * @param listener The listener to unbind.
     */
    off(event?: string, listener?: Function): this;

    /**
     * Emits events for this device.
     *
     * @param event The event to emit.
     * @param payload The payload attached to the event.
     */
    emit(event: string, ...payload: any[]): boolean;

    /**
     * Is called when a new state is available.
     *
     * @param status The current zone, area or timeclock state.
     */
    update(status: ZoneStatus | AreaStatus | TimeclockStatus): void;

    /**
     * Controls the device.
     *
     * @param status A partial device state object.
     */
    set(state: Partial<DeviceState>): Promise<void>;
}
