
#  nativescript-watchos-connector
This is a NativeScript plugin that uses Apple WatchConnectivity to pass and receive data to a companion WatchOS app.

[![](https://img.shields.io/npm/v/nativescript-watchos-connector?style=for-the-badge)](https://www.npmjs.com/package/nativescript-watchos-connector)  [![](https://img.shields.io/npm/dt/nativescript-watchos-connector?style=for-the-badge)](https://www.npmjs.com/package/nativescript-watchos-connector)  [![](https://img.shields.io/github/issues/reecereynolds/nativescript-watchos-connector?style=for-the-badge)](https://github.com/ReeceReynolds/nativescript-watchos-connector/issues)

#  Prerequisites / Requirements
Before using this plugin, make sure you have followed the NativeScript blog post on [Developing a watchOS Extension For Your NativeScript App](https://www.nativescript.org/blog/developing-a-watchos-extension-for-your-nativescript-app) and [iOS WatchOS Applications](https://docs.nativescript.org/angular/tooling/ios-watch-apps).  

#  Installation NativeScript 7
```javascript
npm i nativescript-watchos-connector
```

#  Installation prior to NativeScript 7:
```javascript
npm i nativescript-watchos-connector@1.0.11
```

#  Usage
**NativeScript Angular**
1. For this plugin to work you must first add the nativescript-watchos-connector as a provider in your `app.module.ts`:

**TypeScript**
```javascript
import  {  WatchOSConnector  }  from  'nativescript-watchos-connector'

@NgModule({
	bootstrap: [AppComponent],
	imports: [],
	providers: [ WatchOSConnector ],
	declarations: [ AppComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
```

2. Import the nativescript-watchos-connector plugin:

**TypeScript**
```javascript
import  {  WatchOSConnector  }  from  'nativescript-watchos-connector'
```

3. Create an instance of the import in the constructor:

**TypeScript**
```javascript
constructor(
	private _watchOSConnector: WatchOSConnector
) {}
```

##  Plugin Overview
This is a list of all currently available functions and a brief description of their usage within this plugin.

|Function | Description |
|--|--|
|`createWCSession()` |Creates a WCSession|
|`watchOSChecker()`|Checks if the user is on iOS, has an Apple Watch paired and the WatchOS app is installed|
|`checkActivation()`|Checks if the WCSession is active (if not, session will be activated)|
|`convertInt(value)`|Return value as Obj-C int|
|`convertDouble(value)`|Return value as Obj-C double|
|`convertFloat(value)`|Return value as Obj-C float|
|`sendObjectToWatch('objectKey', object)`|Send the data to the companion WatchOS App using ApplicationContext|

##  createWCSession()
`createWCSession` checks if the device can support a WCSession, if so a WCSession will be created.

**TypeScript**
```javascript
this.watchOSConnector.createWCSession()
```

##  watchOSChecker()
Use `watchOSChecker` instead of `isIOS` when working with passing data to the Apple Watch. This checks if the user is on iOS, has an Apple Watch paired and the WatchOS app is installed (**returns boolean**)

**TypeScript**
```javascript
if (this.watchOSConnector.watchOSChecker()) {
// Only run if WatchOS app is avalaible
}
```

##  checkActivation()
Checks if the WCSession is active, if not this will activate the current session. This is called in `sendObject()` to ensure there is an active session.

**TypeScript**
```javascript
this.watchOSConnector.checkActivation()
```

##  convertInt(value)
Returns the value as a NSNumber with int

**TypeScript**
```javascript
this.watchOSConnector.convertInt(2319)
```

##  convertDouble(value)
Returns the value as a NSNumber with double

**TypeScript**
```javascript
this.watchOSConnector.convertDouble(42.957194)
```

##  convertFloat(value)
Returns the value as a NSNumber with float

**TypeScript**
```javascript
this.watchOSConnector.convertFloat(882.152)
```

##  sendObjectToWatch(objectKey, object)
Sends the data to the companion WatchOS app using `updateApplicationContext`. You need to pass in a key for the object and an object of **Objective-C valid** values.

**TypeScript**
```javascript
let intValue =  this.watchOSConnector.convertInt(4)
let doubleValue =  this.watchOSConnector.convertDouble(45.1)

let numberObject =  {
	convertedInt: intValue,
	convertedDouble: doubleValue
}

this.watchOSConnector.sendObject('numberObjectKey', numberObject)
```

##  v2.0.0 Release
 1. Updated to be compatible with NativeScript 7

##  Future Releases
- [ ] Add images to README
- [ ] Create a demo app

##  Contributors
 - DanHef - [https://github.com/DanHef](https://github.com/DanHef)

##  License
Apache License Version 2.0, January 2004