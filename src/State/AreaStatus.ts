import { Address } from "../Properties/Address";

export type AreaStatus = Address & {
    CurrentScene: Address;
    Humidity: number;
    Level: number;
    OccupancyStatus: string;
    Temperature: number;
};
