/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import Tiptap from "~/components/Tiptap";

import React from "react";

interface Content {
  config: {
    name: string;
    options: {
      type: string;
      key: string;
      value: string;
      placeholder: string;
    }[];
  }[];
}

export default function Home(props: Content) {
  const author = props.config[0]?.options[0]?.value;
  const des = props.config[1]?.options[0]?.value;
  const title = props.config[2]?.options[0]?.value;
  const content = props.config[3]?.options[0]?.value;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title ? title : "4everland"}</title>
        <meta name="description" content={des ? des : "4everland"} />
        <meta name="viewport" content="width=device-width" />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={des} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={des} />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="my-0 bg-stone-50 dark:bg-slate-900 sm:my-14">
          <div id="main" className="container mx-auto flex justify-center">
            <div className="min-w-[815px] rounded border bg-white p-10 shadow">
              <Tiptap content={content!} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/public/config.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
