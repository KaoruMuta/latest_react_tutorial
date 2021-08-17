import React, { FC } from 'react';

type Props = {
  value: string | null;
  onClick: () => void;
};

export const Square: FC<Props> = (props: Props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
