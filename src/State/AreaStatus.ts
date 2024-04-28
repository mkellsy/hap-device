import { Address } from "../Properties/Address";

export type AreaStatus = Address & {
    Level: number;
    OccupancyStatus: string;
    CurrentScene: Address;
};
