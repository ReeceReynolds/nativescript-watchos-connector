# nativescript-watchos-connector

![](https://img.shields.io/npm/v/nativescript-watchos-connector) ![](https://img.shields.io/github/downloads/reecereynolds/nativescript-watchos-connector/total)
**Only iOS** Create a WCSession to receive and pass data to an Apple Watch.

# Prerequisites / Requirements

# Installation

Run the following command from the root of your project:

```javascript
tns plugin add nativescript-watchos-connector
```

# Usage

To use this plugin you must first require / import it:

**TypeScript**

```javascript
import { WatchOSConnector } from 'nativescript-watchos-connector'
```

**JavaScript**

```javascript
import WatchOSConnector from 'nativescript-watchos-connector'
```

Create an instance of the import in the constructor:

**TypeScript**

```javascript
constructor(
	public watchOSConnector: WatchOSConnector
) {}
```

## createWCSession()

`createWCSession` checks if there the device can support a WCSession, if so a WCSession will be created.

**TypeScript**

```javascript
this.watchOSConnector.createWCSession()
```

## watchOSChecker()

Use `watchOSChecker` instead of `isIOS` when working with passing data to the Apple Watch. This checks if the user is on iOS, has an Apple Watch paired and the WatchOS app is installed (**returns boolean**)

**TypeScript**

```javascript
if (this.watchOSConnector.watchOSChecker()) {
  // Only run if WatchOS app is avalaible
}
```

## checkActivation()

Checks if the WCSession is active, if not this will activate the current session. This is called in `sendObject()` to ensure there is an active session.

**TypeScript**

```javascript
this.watchOSConnector.checkActivation()
```

## convertInt(value)

Returns the value as a NSNumber with int

**TypeScript**

```javascript
this.watchOSConnector.convertInt(2319)
```

## convertDouble(value)

Returns the value as a NSNumber with double

**TypeScript**

```javascript
this.watchOSConnector.convertInt(42.957194)
```

## convertFloat(value)

Returns the value as a NSNumber with float

**TypeScript**

```javascript
this.watchOSConnector.convertInt(882.152)
```

## sendObject(objectKey, object)

Sends the data to the companion WatchOS app using `updateApplicationContext`. You need to pass in a key for the object and an object of **Objective-C valid** values.

**TypeScript**

```javascript
let fourInt = this.watchOSConnector.convertInt(4)
let nineInt = this.watchOSConnector.convertInt(9)

let intObject = {
  convertedFourInt: fourInt,
  convertedNineInt: nineInt
}

this.watchOSConnector.sendObject('intObjectKey', intObject)
```

# License

Apache License Version 2.0, January 2004
