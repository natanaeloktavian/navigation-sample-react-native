//'use strict';
//const rn = require('react-native')
jest.mock('react-native-fcm', () => {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        requestPermissions: jest.fn(),
        configure: jest.fn()
    }
});

jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  }
})
//module.exports = rn
