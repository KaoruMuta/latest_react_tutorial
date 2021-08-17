import React, { FC } from 'react';
import { useState } from 'react';

type Props = {
  value: number;
};

export const Square: FC<Props> = (props: Props) => {
  const [value, setValue] = useState<string | null>(null);
  // TODO: remove this description
  console.log(props);
  return (
    <button className="square" onClick={() => setValue('X')}>
      {value}
    </button>
  );
};
