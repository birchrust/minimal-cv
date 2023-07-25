import Head from "next/head";
import Tiptap from "~/components/Tiptap";
import config from "../../public/config.json";

const author = config.config[0]?.options[0]?.value;
const des = config.config[0]?.options[0]?.value;
const title = config.config[0]?.options[0]?.value;

export default function Home() {
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
              <Tiptap />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
