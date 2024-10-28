[HAP Device Interfaces](../README.md) / Area

# Type Alias: Area

> **Area**: [`Address`](Address.md) & `object`

Defines an area, mainly used for Lutron devices.

## Type declaration

### AssociatedControlStations

> **AssociatedControlStations**: [`Address`](Address.md)[]

Lists the associated control groups.

### AssociatedOccupancyGroups

> **AssociatedOccupancyGroups**: [`Address`](Address.md)[]

Lists all sensors in an area.

### AssociatedZones

> **AssociatedZones**: [`Address`](Address.md)[]

An area can have multiple zones (e.g. a dimmer), this is the
list of zones.

### ControlType

> **ControlType**: `string`

Defines the area's control type, keypad, remote.

### IsLeaf

> **IsLeaf**: `boolean`

If the area is a leaf node. lowest level.

### Name

> **Name**: `string`

The area name.

### Parent

> **Parent**: [`Address`](Address.md)

The parent node this area is in.
