import { Address } from "../Properties/Address";

/**
 * Defines a timeclock's current status response.
 */
export type TimeclockStatus = Address & {
    EnabledState: "Enabled" | "Disabled";
};
