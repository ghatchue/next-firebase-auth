import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getConfig } from 'src/config'

export default function initFirebaseClientSDK() {
  const { firebaseClientInitConfig, firebaseAuthEmulatorHost } = getConfig()
  if (!getApps().length) {
    if (!firebaseClientInitConfig) {
      throw new Error(
        'If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.'
      )
    }
    initializeApp(firebaseClientInitConfig)
  }
  // If the user has provided the firebaseAuthEmulatorHost address, set the emulator
  if (firebaseAuthEmulatorHost) {
    getAuth().useEmulator(`http://${firebaseAuthEmulatorHost}`)
  }
}
