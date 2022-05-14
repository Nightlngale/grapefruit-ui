export function splitObjectPropsByArray
  <T extends Record<string | number | symbol, any>, K extends Partial<Record<keyof T, T[keyof T]>>
  >(obj: T, array: (keyof T)[]): [T, K] {
  const newObject = {} as T;
  const objWithArrayKeys = {} as K;

  Object.entries(obj).forEach(([key, value]: [keyof T, T[keyof T]]) => {
    if (array.includes(key)) {
      objWithArrayKeys[key] = value;
    } else {
      newObject[key] = value;
    }
  });

  return [newObject, objWithArrayKeys];
}
