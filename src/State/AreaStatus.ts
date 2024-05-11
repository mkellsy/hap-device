import { Address } from "../Properties/Address";

export type AreaStatus = Address & {
    CurrentScene: Address;
    Humidity: string;
    Level: number;
    OccupancyStatus: string;
    Temperature: number;
};
