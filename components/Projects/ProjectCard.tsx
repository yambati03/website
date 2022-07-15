import * as React from "react";
import Card from "../Card";
import Image from "next/image";
import Tag from "../Tag";

interface Props {
  title: string;
  image: StaticImageData;
  excerpt: string;
  tags: string[];
  link: string;
}

function ProjectCard(props: Props) {
  return (
    <Card>
      <h2 className='font-bold text-lg'>{props.title}</h2>
      <p className='text-gray-600 dark:text-zinc-400 '>{props.excerpt}</p>
      <div className='shadow hover:shadow-md transition border border-zinc-700'>
        <Image
          alt={`Screenshot for ${props.title}`}
          src={props.image}
          layout='responsive'
          objectFit='contain'
        />
      </div>
      <div className='flex space-x-2'>
        {props.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </Card>
  );
}

export default ProjectCard;
