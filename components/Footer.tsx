import * as React from "react";

function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-between text-zinc-600 dark:text-zinc-400 items-center mx-4'>
      <p>
        Made with{" "}
        <span className='text-indigo-500 dark:text-indigo-400'>&#9829;</span> by
        Yashas Ambati
      </p>
      <p>yashas[dot]amb[at]gmail[dot]com</p>
    </div>
  );
}

export default Footer;
