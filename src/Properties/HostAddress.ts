import { HostAddressFamily } from "./HostAddressFamily";

/**
 * Defines a host ip address, recieved from mdns.
 * @public
 */
export interface HostAddress {
    /**
     * The ip address of the host.
     */
    address: string;

    /**
     * Is the address ipv4 or ipv6.
     */
    family: HostAddressFamily;
}
