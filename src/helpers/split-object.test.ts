import { splitObjectPropsByArray } from './split-object';

describe('split-object', () => {
  it('Should split object into 2', () => {
    const props = {
      a: 1,
      b: 2,
      c: 3,
    };
    const array: (keyof typeof props)[] = ['a', 'b'];

    const expected1 = { a: props.a, b: props.b };
    const expected2 = { c: props.c };

    const [actual1, actual2] = splitObjectPropsByArray(props, array);

    expect(expected1).toStrictEqual(actual1);
    expect(expected2).toStrictEqual(actual2);

    expect(expected1.a).toBe(actual1.a);
    expect(expected1.b).toBe(actual1.b);
    expect(expected2.c).toBe(actual2.c);
  });
});
