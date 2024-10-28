import { Address } from "../Properties/Address";

/**
 * Defines a timeclock's current status response.
 * @public
 */
export type TimeclockStatus = Address & {
    EnabledState: "Enabled" | "Disabled";
};
