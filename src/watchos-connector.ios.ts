import { isIOS } from 'tns-core-modules/platform/platform'

export class WatchOSConnector implements WCSessionDelegate {
  public watchSession: any

  // Creates a WCSession
  createWCSession() {
    if (WCSession.isSupported) {
      this.watchSession = WCSession.defaultSession
      this.watchSession.delegate = this.watchSession
      this.watchSession.activateSession()
    }
  }

  // Use instead of 'isIOS' when working with WatchOS
  // Checks if the user is on iOS, has an Apple Watch paired and the WatchOS app is installed
  watchOSChecker() {
    if (
      isIOS &&
      this.watchSession &&
      this.watchSession.paired &&
      this.watchSession.watchAppInstalled
    ) {
      return true
    } else {
      console.log("[watchOSChecker] WatchOS isn't available")
      return false
    }
  }

  // Checks if the WCSession is active (if not, session will be activated)
  checkActivation() {
    if (this.watchSession.activationState != 2) {
      this.watchSession.activateSession()
    }
  }

  // Return value as Obj-C value
  convertInt(value) {
    return NSNumber.numberWithInt(value)
  }

  convertDouble(value) {
    return NSNumber.numberWithDouble(value)
  }

  convertFloat(value) {
    return NSNumber.numberWithFloat(value)
  }

  // Send the data to the companion WatchOS App
  sendObjectToWatch(objectKey: string, object: {}) {
    this.checkActivation()

    // Send the object to the WatchOS app
    let dictionary = NSDictionary.dictionaryWithObjectForKey(object, objectKey)
    this.watchSession.updateApplicationContextError(dictionary)
  }

  // Needed to Conform to WCSessionDelegate - DON'T DELETE!!
  sessionActivationDidCompleteWithStateError(
    session: WCSession,
    activationState: WCSessionActivationState,
    error: NSError
  ): void {
    console.log(
      '(sessionActivationDidCompleteWithStateError) WCSession Activated'
    )
  }

  sessionDidBecomeInactive(session: WCSession): void {
    console.log('(sessionDidBecomeInactive) Session Became Inactive')
  }
  sessionDidDeactivate(session: WCSession): void {
    console.log('(sessionDidDeactivate) Session Deactivated')
  }
  sessionReachabilityDidChange(session: WCSession): void {
    console.log(
      '(sessionReachabilityDidChange) Session Reachability Did Change'
    )
  }
  sessionWatchStateDidChange(session: WCSession): void {
    console.log('(sessionReachabilityDidChange) Session Watch State Did Change')
  }

  // Not Used but Needed for WCSessionDelegate - DON'T DELETE!!
  debugDescription?: string
  description: string
  hash: number
  isProxy: boolean
  superclass: typeof NSObject
  class(): typeof NSObject {
    throw new Error('Method not implemented.')
  }
  conformsToProtocol(aProtocol: any): boolean {
    throw new Error('Method not implemented.')
  }
  isEqual(object: any): boolean {
    throw new Error('Method not implemented.')
  }
  isKindOfClass(aClass: typeof NSObject): boolean {
    throw new Error('Method not implemented.')
  }
  isMemberOfClass(aClass: typeof NSObject): boolean {
    throw new Error('Method not implemented.')
  }
  performSelector(aSelector: string) {
    throw new Error('Method not implemented.')
  }
  performSelectorWithObject(aSelector: string, object: any) {
    throw new Error('Method not implemented.')
  }
  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ) {
    throw new Error('Method not implemented.')
  }
  respondsToSelector(aSelector: string): boolean {
    throw new Error('Method not implemented.')
  }
  retainCount(): number {
    throw new Error('Method not implemented.')
  }
  self(): NSObjectProtocol {
    throw new Error('Method not implemented.')
  }
}
