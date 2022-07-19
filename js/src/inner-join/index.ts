export type InnerJoin<M,N> = {
  leftArr: Array<M>,
  rightArr: Array<N>,
  key: keyof (M | N)
};

export type Contact = {
  id: number,
  name: string,
  phone: string
}

export type Detail = {
  id: number,
  email: string,
}

export function innerJoin<M, N>({ leftArr, rightArr, key }: InnerJoin<M, N>): Array<M & N> {

  const leftArrByKey = mapByKey<M>(leftArr, key);
  const rightArrByKey = mapByKey<N>(rightArr, key);

  const lessElementsArr = Object.keys(leftArrByKey).length > Object.keys(rightArrByKey).length
    ? rightArrByKey
    : leftArrByKey;

  const moreElementsArr = Object.keys(leftArrByKey).length > Object.keys(rightArrByKey).length
    ? leftArrByKey
    : rightArrByKey;

  return Object.entries(lessElementsArr)
    .filter(([ keyVal, _ ]) =>
      !!moreElementsArr[keyVal])
    .map(([ keyVal, value ]) => {
       const complementValue = moreElementsArr[keyVal];

       return { ...value, ...complementValue };
      }
    )
}

function mapByKey<T>(arr: Array<T>, key: keyof T): Record<string, T> {
  const dictionary: Record<string, T> = {};

  arr.forEach(value => {
    const dictKey: unknown = value[key];

    if (!dictionary[dictKey as string]) {
      dictionary[dictKey as string] = value;
    }
  });

  return dictionary;
}
