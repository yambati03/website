import * as React from "react";

export interface Props {
  children: React.ReactNode;
}

function Code(props: Props) {
  return (
    <code className='bg-zinc-200 dark:bg-zinc-700 px-[0.4em] py-[0.2em] rounded-md text-[0.85rem]'>
      {props.children}
    </code>
  );
}

export default Code;
