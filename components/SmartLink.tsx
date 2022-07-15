import Link from "next/link";
import * as React from "react";
import ExternalLink from "./ExternalLink";

export interface Props {
  href: string;
  children: React.ReactNode;
}

function SmartLink(props: Props) {
  let isExternal = props.href.includes("https");

  if (isExternal) {
    return <ExternalLink href={props.href}>{props.children}</ExternalLink>;
  }

  return (
    <Link href={props.href} passHref>
      <span className='text-indigo-500 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-500 duration-100 cursor-pointer'>
        {props.children}
      </span>
    </Link>
  );
}

export default SmartLink;
