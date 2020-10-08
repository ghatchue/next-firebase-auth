const getMockFirebaseUserClientSDK = () => ({
  uid: 'abc-123',
  email: 'abc@example.com',
  emailVerified: true,
  getIdToken: async () => 'my-id-token-abc-123',
  // ... other properties
})

// https://firebase.google.com/docs/reference/admin/node/admin.auth.DecodedIdToken#uid
const getMockFirebaseUserAdminSDK = () => ({
  uid: 'def-456',
  email: 'def@example.com',
  email_verified: true,
  iss: 'https://securetoken.google.com/my-cool-app',
  aud: 'my-cool-app',
  auth_time: 1540000000,
  user_id: 'def-456',
  sub: 'def-456',
  iat: 1540000000,
  exp: 1540000000,
  firebase: {},
  // ... other properties
})

const getMockSerializedAuthUser = () => ({
  id: 'ghi-789',
  email: 'ghi@example.com',
  emailVerified: true,
  _token: 'my-id-token-ghi-789',
})

describe('createAuthUser: basic tests', () => {
  it('returns the expected data for an unauthenticated user', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(createAuthUser()).toEqual({
      clientInitialized: false,
      email: null,
      emailVerified: false,
      getIdToken: expect.any(Function),
      id: null,
    })
  })

  it('throws if all user inputs are defined', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(() => {
      createAuthUser({
        firebaseUserClientSDK: getMockFirebaseUserClientSDK(),
        firebaseUserAdminSDK: getMockFirebaseUserAdminSDK(),
        serializedAuthUser: getMockSerializedAuthUser(),
      })
    }).toThrow(
      'createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"'
    )
  })

  it('throws if more than one user input is defined', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(() => {
      createAuthUser({
        firebaseUserClientSDK: getMockFirebaseUserClientSDK(),
        firebaseUserAdminSDK: getMockFirebaseUserAdminSDK(),
        serializedAuthUser: undefined,
      })
    }).toThrow(
      'createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"'
    )
  })

  it('throws if "clientInitialized" is true but "firebaseUserClientSDK is not defined (only the client should set clientInitialized)', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(() => {
      createAuthUser({
        firebaseUserAdminSDK: getMockFirebaseUserAdminSDK(),
        clientInitialized: true,
      })
    }).toThrow(
      'The "clientInitialized" value can only be true if the "firebaseUserClientSDK" property is defined.'
    )
  })

  it('throws if "token" is defined but "firebaseUserAdminSDK" is not defined (only the server should manually set the token this way)', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(() => {
      createAuthUser({
        firebaseUserClientSDK: getMockFirebaseUserClientSDK(),
        token: 'some-token-val',
      })
    }).toThrow(
      'The "token" value can only be set if the "firebaseUserAdminSDK" property is defined.'
    )
  })
})

describe('createAuthUser: firebaseUserClientSDK', () => {
  it('returns the expected data', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(
      createAuthUser({ firebaseUserClientSDK: getMockFirebaseUserClientSDK() })
    ).toEqual({
      id: 'abc-123',
      email: 'abc@example.com',
      emailVerified: true,
      clientInitialized: false,
      getIdToken: expect.any(Function),
    })
  })

  it('returns the expected value from getIdToken', async () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    const AuthUser = createAuthUser({
      firebaseUserClientSDK: getMockFirebaseUserClientSDK(),
    })
    const token = await AuthUser.getIdToken()
    expect(token).toEqual('my-id-token-abc-123')
  })
})

describe('createAuthUser: firebaseUserAdminSDK', () => {
  it('returns the expected data', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(
      createAuthUser({ firebaseUserAdminSDK: getMockFirebaseUserAdminSDK() })
    ).toEqual({
      id: 'def-456',
      email: 'def@example.com',
      emailVerified: true,
      clientInitialized: false,
      getIdToken: expect.any(Function),
    })
  })

  it('returns the expected value from getIdToken when a token is not provided', async () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    const AuthUser = createAuthUser({
      firebaseUserAdminSDK: getMockFirebaseUserAdminSDK(),
      // token: undefined, // no token
    })
    const token = await AuthUser.getIdToken()
    expect(token).toEqual(null)
  })

  it('returns the expected value from getIdToken when a token is provided', async () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    const AuthUser = createAuthUser({
      firebaseUserAdminSDK: getMockFirebaseUserAdminSDK(),
      token: 'my-id-token-def-456',
    })
    const token = await AuthUser.getIdToken()
    expect(token).toEqual('my-id-token-def-456')
  })
})

describe('createAuthUser: serializedAuthUser', () => {
  it('returns the expected data', () => {
    expect.assertions(1)
    const createAuthUser = require('src/createAuthUser').default
    expect(
      createAuthUser({ serializedAuthUser: getMockSerializedAuthUser() })
    ).toEqual({
      id: 'ghi-789',
      email: 'ghi@example.com',
      emailVerified: true,
      clientInitialized: false,
      getIdToken: expect.any(Function),
    })
  })
})