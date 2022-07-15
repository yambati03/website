import * as React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Card from "../Card";

interface Props {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

function PostCard(props: Props) {
  return (
    <Card>
      <h2 className='font-bold text-lg'>{props.title}</h2>
      <p>{props.excerpt}</p>
      <Link href={`blog/${props.slug}`} passHref>
        <div className='flex font-semibold items-center space-x-1 bg-gray-200 dark:bg-zinc-700 w-fit py-1 pr-2 pl-3 rounded hover:bg-gray-300 dark:hover:bg-zinc-600 cursor-pointer duration-150'>
          <p>Read more</p>
          <ChevronRightIcon className='w-3 h-3 font-bold' />
        </div>
      </Link>
    </Card>
  );
}

export default PostCard;
