[HAP Device Interfaces](../README.md) / Device

# Interface: Device

Stores common information about a device.

## Extended by

- [`Contact`](Contact.md)
- [`Dimmer`](Dimmer.md)
- [`Fan`](Fan.md)
- [`Humidity`](Humidity.md)
- [`Keypad`](Keypad.md)
- [`Occupancy`](Occupancy.md)
- [`Remote`](Remote.md)
- [`Shade`](Shade.md)
- [`Strip`](Strip.md)
- [`Switch`](Switch.md)
- [`Temperature`](Temperature.md)
- [`Thermostat`](Thermostat.md)
- [`Timeclock`](Timeclock.md)
- [`Unknown`](Unknown.md)

## Properties

### address

> **address**: [`Address`](../type-aliases/Address.md)

The href address of the device. This is mainly used for Lutron systems.

***

### area

> **area**: [`Area`](../type-aliases/Area.md)

The area the device is in.

***

### capabilities

> **capabilities**: `object`

The devices capibilities. This is a map of the fields that can be set
or read.

#### Index Signature

 \[`key`: `string`\]: [`Capability`](Capability.md)

***

### id

> **id**: `string`

The device's unique identifier.

***

### log

> **log**: `ILogger`

A logger for the device. This will automatically print the devices name,
room and id.

***

### manufacturer

> **manufacturer**: `string`

The device's manufacturer.

***

### name

> **name**: `string`

The device's configured name.

***

### room

> **room**: `string`

The device's configured room.

***

### status

> **status**: [`DeviceState`](DeviceState.md)

The current state of the device.

***

### type

> **type**: [`DeviceType`](../enumerations/DeviceType.md)

The device type.

## Methods

### emit()

> **emit**(`event`, ...`payload`): `boolean`

Emits events for this device.

#### Parameters

• **event**: `string`

The event to emit.

• ...**payload**: `any`[]

The payload attached to the event.

#### Returns

`boolean`

***

### off()

> **off**(`event`?, `listener`?): `this`

Unbinds a listener to an event.

#### Parameters

• **event?**: `string`

The event to unbind from.

• **listener?**: `Function`

The listener to unbind.

#### Returns

`this`

***

### on()

> **on**(`event`, `listener`): `this`

Binds a listener to an event.

#### Parameters

• **event**: `string`

The event to bind to.

• **listener**: `Function`

The listener to bind.

#### Returns

`this`

***

### once()

> **once**(`event`, `listener`): `this`

Binds a, rone once listener to an event.

#### Parameters

• **event**: `string`

The event to bind to.

• **listener**: `Function`

The listener to bind.

#### Returns

`this`

***

### set()

> **set**(`state`): `Promise`\<`void`\>

Controls the device.

#### Parameters

• **state**: `Partial`\<[`DeviceState`](DeviceState.md)\>

#### Returns

`Promise`\<`void`\>

***

### update()

> **update**(`status`): `void`

Is called when a new state is available.

#### Parameters

• **status**: [`AreaStatus`](../type-aliases/AreaStatus.md) \| [`ThermostatStatus`](ThermostatStatus.md) \| [`TimeclockStatus`](../type-aliases/TimeclockStatus.md) \| [`ZoneStatus`](../type-aliases/ZoneStatus.md)

The current zone, area or timeclock state.

#### Returns

`void`
