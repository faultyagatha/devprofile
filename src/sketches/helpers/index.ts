import { Color } from 'three';

export const coloursToArray = (str: string) => {
  return str
    .split('/')
    .pop()!.split('-')
    .map((hex: string) => {
      return new Color('#' + hex)
    })
};