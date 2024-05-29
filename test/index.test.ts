import chai, { expect } from "chai";
import sinonChai from "sinon-chai";

import { DeviceType, HostAddressFamily, TriggerState } from "../src";

chai.use(sinonChai);

describe("index", () => {
    it("should define a DeviceType enum", () => {
        expect(DeviceType).to.not.be.null;
    });

    it("should define a HostAddressFamily enum", () => {
        expect(HostAddressFamily).to.not.be.null;
    });

    it("should define a TriggerState enum", () => {
        expect(TriggerState).to.not.be.null;
    });
});
