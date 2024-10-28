/**
 * Defines the available actions for a button.
 * @public
 */
export interface TriggerOptions {
    /**
     * The amount of time two button presses counts as a double press.
     */
    doubleClickSpeed: number;

    /**
     * The abount of time to wait before oress is marked as a long press.
     */
    clickSpeed: number;

    /**
     * Enable raise and lower mode.
     */
    raiseLower: boolean;
}
