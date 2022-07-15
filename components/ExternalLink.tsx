import * as React from "react";

export interface Props {
  href: string;
  children: React.ReactNode;
}

function ExternalLink(props: Props) {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noreferrer'
      className='text-indigo-500 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-500 duration-100'
    >
      {props.children}
    </a>
  );
}

export default ExternalLink;
