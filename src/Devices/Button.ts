import { Address } from "../Properties/Address";

/**
 * Interface for a single button.
 */
export interface Button {
    /**
     * Id of the button.
     */
    id: string;

    /**
     * The indes of the button on the device.
     */
    index: number;

    /**
     * The button's configured name.
     */
    name: string;

    /**
     * If the button is a raise or lower button.
     */
    raiseLower?: boolean;

    /**
     * The button's led address.
     */
    led?: Address;
}
