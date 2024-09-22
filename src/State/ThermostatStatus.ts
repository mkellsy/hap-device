export interface ThermostatStatus {
    id: string;
    name: string;
    roomTemp: number;
    mode: string;
    spCool: number;
    spHeat: number;
    vaneDir: string;
    fanSpeed: string;
    tempSource: string;
    activeThermistor: string;
    filterDirty: boolean;
    hotAdjust: boolean;
    defrost: boolean;
    standby: boolean;
    runTest: number;
    humidTest: number;
}
