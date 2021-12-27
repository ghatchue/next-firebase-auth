import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { setConfig } from 'src/config'
import createMockConfig from 'src/testHelpers/createMockConfig'

jest.mock('firebase/app', () => ({
  getApps: jest.fn(),
  initializeApp: jest.fn(),
}))
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
}))
jest.mock('src/config')

beforeEach(() => {
  const mockConfig = createMockConfig()
  setConfig(mockConfig)

  getApps.mockImplementation(() => [])
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('initFirebaseClientSDK', () => {
  it('calls initializeApp with the expected values', () => {
    expect.assertions(1)
    const initFirebaseClientSDK = require('src/initFirebaseClientSDK').default
    initFirebaseClientSDK()
    expect(initializeApp).toHaveBeenCalledWith({
      apiKey: 'fakeAPIKey123',
      authDomain: 'my-example-app.firebaseapp.com',
      databaseURL: 'https://my-example-app.firebaseio.com',
      projectId: 'my-example-app-id',
    })
  })

  it('does not call initializeApp if Firebase already has an initialized app', () => {
    expect.assertions(1)
    getApps.mockImplementation(() => [{ some: 'app' }])
    const initFirebaseClientSDK = require('src/initFirebaseClientSDK').default
    initFirebaseClientSDK()
    expect(initializeApp).not.toHaveBeenCalled()
  })

  it('throws if config.firebaseClientInitConfig is not set and no app is initialized', () => {
    expect.assertions(1)
    const mockConfig = createMockConfig()
    setConfig({
      ...mockConfig,
      firebaseClientInitConfig: undefined,
    })
    const initFirebaseClientSDK = require('src/initFirebaseClientSDK').default
    expect(() => {
      initFirebaseClientSDK()
    }).toThrow(
      'If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.'
    )
  })

  it('does not throw if config.firebaseClientInitConfig is not set but a Firebase app is already initialized', () => {
    expect.assertions(1)
    const mockConfig = createMockConfig()
    setConfig({
      ...mockConfig,
      firebaseClientInitConfig: undefined,
    })
    getApps.mockImplementation(() => [{ some: 'app' }])
    const initFirebaseClientSDK = require('src/initFirebaseClientSDK').default
    expect(() => {
      initFirebaseClientSDK()
    }).not.toThrow()
  })

  it('initializes the client-side auth emulator if config.firebaseAuthEmulatorHost is set', () => {
    expect.assertions(1)
    const mockConfig = createMockConfig()
    setConfig({
      ...mockConfig,
      firebaseAuthEmulatorHost: 'localhost:9099',
    })
    getApps.mockImplementation(() => [{ some: 'app' }])
    const initFirebaseClientSDK = require('src/initFirebaseClientSDK').default

    const useEmulator = jest.fn()
    getAuth.mockImplementation(() => ({
      useEmulator,
    }))

    initFirebaseClientSDK()
    expect(useEmulator).toHaveBeenCalledWith('http://localhost:9099')
  })

  it('does not initialize the client-side auth emulator if config.firebaseAuthEmulatorHost is not set', () => {
    expect.assertions(1)
    getApps.mockImplementation(() => [{ some: 'app' }])
    const initFirebaseClientSDK = require('src/initFirebaseClientSDK').default

    const useEmulator = jest.fn()
    getAuth.mockImplementation(() => ({
      useEmulator,
    }))

    initFirebaseClientSDK()
    expect(useEmulator).not.toHaveBeenCalled()
  })
})
