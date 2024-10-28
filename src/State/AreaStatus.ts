import { Address } from "../Properties/Address";

/**
 * Defines an area's current status response.
 * @public
 */
export type AreaStatus = Address & {
    CurrentScene: Address;
    Humidity: number;
    Level: number;
    OccupancyStatus: string;
    Temperature: number;
};
