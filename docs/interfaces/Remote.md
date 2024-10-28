[HAP Device Interfaces](../README.md) / Remote

# Interface: Remote

Defines a remote (Pico) device.

## Extends

- [`Device`](Device.md)

## Properties

### address

> **address**: [`Address`](../type-aliases/Address.md)

The href address of the device. This is mainly used for Lutron systems.

#### Inherited from

[`Device`](Device.md).[`address`](Device.md#address)

***

### area

> **area**: [`Area`](../type-aliases/Area.md)

The area the device is in.

#### Inherited from

[`Device`](Device.md).[`area`](Device.md#area)

***

### buttons

> **buttons**: [`Button`](Button.md)[]

The buttons available on the device.

***

### capabilities

> **capabilities**: `object`

The devices capibilities. This is a map of the fields that can be set
or read.

#### Index Signature

 \[`key`: `string`\]: [`Capability`](Capability.md)

#### Inherited from

[`Device`](Device.md).[`capabilities`](Device.md#capabilities)

***

### id

> **id**: `string`

The device's unique identifier.

#### Inherited from

[`Device`](Device.md).[`id`](Device.md#id)

***

### log

> **log**: `ILogger`

A logger for the device. This will automatically print the devices name,
room and id.

#### Inherited from

[`Device`](Device.md).[`log`](Device.md#log)

***

### manufacturer

> **manufacturer**: `string`

The device's manufacturer.

#### Inherited from

[`Device`](Device.md).[`manufacturer`](Device.md#manufacturer)

***

### name

> **name**: `string`

The device's configured name.

#### Inherited from

[`Device`](Device.md).[`name`](Device.md#name)

***

### room

> **room**: `string`

The device's configured room.

#### Inherited from

[`Device`](Device.md).[`room`](Device.md#room)

***

### status

> **status**: [`DeviceState`](DeviceState.md)

The current state of the device.

#### Inherited from

[`Device`](Device.md).[`status`](Device.md#status)

***

### type

> **type**: [`DeviceType`](../enumerations/DeviceType.md)

The device type.

#### Inherited from

[`Device`](Device.md).[`type`](Device.md#type)

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

#### Inherited from

[`Device`](Device.md).[`emit`](Device.md#emit)

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

#### Inherited from

[`Device`](Device.md).[`off`](Device.md#off)

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

#### Inherited from

[`Device`](Device.md).[`on`](Device.md#on)

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

#### Inherited from

[`Device`](Device.md).[`once`](Device.md#once)

***

### set()

> **set**(`state`): `Promise`\<`void`\>

Controls the device.

#### Parameters

• **state**: `unknown`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Device`](Device.md).[`set`](Device.md#set)

***

### update()

> **update**(`_status`): `void`

Is called when a new state is available.

#### Parameters

• **\_status**: `unknown`

#### Returns

`void`

#### Overrides

[`Device`](Device.md).[`update`](Device.md#update)
