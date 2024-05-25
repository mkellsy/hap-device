import { Address } from "./Address";

/**
 * Defines an area, mainly used for Lutron devices.
 */
export type Area = Address & {
    /**
     * The area name.
     */
    Name: string;

    /**
     * Defines the area's control type, keypad, remote.
     */
    ControlType: string;

    /**
     * The parent node this area is in.
     */
    Parent: Address;

    /**
     * If the area is a leaf node. lowest level.
     */
    IsLeaf: boolean;

    /**
     * An area can have multiple zones (e.g. a dimmer), this is the
     * list of zones.
     */
    AssociatedZones: Address[];

    /**
     * Lists the associated control groups.
     */
    AssociatedControlStations: Address[];

    /**
     * Lists all sensors in an area.
     */
    AssociatedOccupancyGroups: Address[];
};
