import Head from "next/head";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import useDarkMode from "../hooks/useDarkMode";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();
  const [code, setCode] = useState("");
  return (
    <div className="">
      <Head>
        <title>Giga Markdown Editor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/1.png" />
      </Head>
      <main className="bg-gray-800 dark:bg-white p-3 flex flex-col lg:flex-row justify-between lg:max-h-screen lg:min-h-screen">
        <div className="bg-black w-4/4 lg:w-6/12 rounded-xl m-5 ">
          <textarea
            cols="30"
            rows="30"
            onChange={(e) => setCode(e.target.value)}
            className="resize-none outline-none text-gray-50 bg-black p-5 rounded-xl w-full h-full"
          ></textarea>
        </div>
        <div className="bg-gray-50 dark:bg-[#222B45] w-4/4 lg:w-6/12  rounded-xl p-5 pt-2 m-5 overflow-y-scroll">
          {colorTheme === "light" ? (
            <button
              className="text-right text-gray-50"
              onClick={() => setTheme("light")}
            >
              Light
            </button>
          ) : (
            <button className="text-right" onClick={() => setTheme("dark")}>
              Dark
            </button>
          )}
          <div className="prose prose-lg  dark:prose-headings:text-gray-50 dark:prose-p:text-gray-200 dark:prose-strong:text-white dark:prose-a:text-white prose-a:underline dark:prose-ol:text-gray-100 dark:prose-ul:text-gray-100 prose-img:rounded-xl dark:prose-table:text-gray-100 dark:prose-em:text-gray-100 break-words my-5">
            <ReactMarkdown>{code}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}
