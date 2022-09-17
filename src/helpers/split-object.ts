export function splitObjectPropsByArray<
  T extends Record<string | number | symbol, any>,
  K extends Partial<Record<keyof T, T[keyof T]>>,
>(obj: T, array: (keyof T)[]): [K, T] {
  const restProps = {} as T;
  const arrayProps = {} as K;

  Object.entries(obj).forEach(([key, value]: [keyof T, T[keyof T]]) => {
    if (array.includes(key)) {
      arrayProps[key] = value;
    } else {
      restProps[key] = value;
    }
  });

  return [arrayProps, restProps];
}
