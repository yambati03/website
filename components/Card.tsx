import * as React from "react";

export interface Props {
  children: React.ReactChild[];
}

function Card({ children }: Props) {
  return (
    <div className='rounded-lg p-4 w-full space-y-3 border border-gray-300 dark:border-zinc-700 shadow-md'>
      {children}
    </div>
  );
}

export default Card;
