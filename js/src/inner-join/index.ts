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

  return rightArr
    .filter((value) => leftArrByKey.has(value[key]))
    .map((value) => {
       const complementValue = leftArrByKey.get(value[key]) ?? {} as M;

       return { ...value, ...complementValue };
      }
    )
}


function mapByKey<T>(arr: Array<T>, key: keyof T): Map<unknown, T> {
  const dictionary: Map<unknown, T> = new Map();

  arr.forEach(value => {
      dictionary.set(value[key], value);
  });

  return dictionary;
}
