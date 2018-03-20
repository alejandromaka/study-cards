// @flow
import { AsyncStorage } from 'react-native';

export function clearStorage(): Promise<any> {
  return new Promise((resolve) => {
    AsyncStorage.clear(resolve);
  });
}

export function setItem(key: string, value: string): Promise<any> {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({[key]: value});
      }
    });
  });
}

export function getItem(key: string): Promise<any> {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key, (error, response) => {
      if (response) {
        resolve(response);
      } else if (error) {
        reject(error);
      }
      reject(404);
    });
  });
}
