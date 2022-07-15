import * as React from "react";

export interface Props {
  children: React.ReactChild;
}

function Tag(props: Props) {
  return (
    <div className='bg-gray-200 dark:bg-zinc-700 w-fit h-fit px-2 py-1 text-xs rounded text-gray-500 dark:text-zinc-400 font-semibold'>
      {props.children}
    </div>
  );
}

export default Tag;
