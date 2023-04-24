/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Highlighter from "./component/highlighter";

export default async function index() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="flex w-full h-full flex-col items-center md:justify-start  md:p-24 ">
      <>
        <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <p className=" flex md:text-xl items-center  text-cyan-500 w-full justify-center  pb-6 md:pt-8 pt-24  ">
            Hyper Text Markup Language
            <span className="font-mono flex space-x-8 items-center font-bold md:px-4 px-2  ">
              HTML <Image src="/html-5.svg" width={50} alt="" height={50} />
            </span>
          </p>
        </div>
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            text={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
<body>
...body goes here
</body>
</html>
                      `}
          />
        </div>
      </>
    </main>
  );
}
