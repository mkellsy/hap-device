/**
 * Defines a device capibility.
 */
export interface Capability {
    /**
     * The capibility's data type.
     */
    type: "Integer" | "Decimal" | "String";

    /**
     * A list of allowed values.
     */
    values?: string[];

    /**
     * The minimum allowed value.
     */
    min?: number;

    /**
     * The maximum allowed value.
     */
    max?: number;
}
