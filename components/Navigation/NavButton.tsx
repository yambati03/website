import Link from "next/link";
import * as React from "react";

export interface Props {
  href: string;
  children: React.ReactNode;
}

function NavButton(props: Props) {
  return (
    <Link href={props.href} passHref>
      <div className='hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer duration-100 py-1 px-3 rounded'>
        {props.children}
      </div>
    </Link>
  );
}

export default NavButton;
