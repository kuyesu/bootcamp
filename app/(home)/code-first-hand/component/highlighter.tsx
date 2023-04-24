"use client";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  dracula,
  github,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import swal from "sweetalert";

const Highlighter = ({ text }: { text: string }) => {
  const [selectvalue, setSelectValue] = React.useState("");
  const [textfield, setTextField] = React.useState("");

  const handleInputChange = (e) => {
    setTextField(e.target.value);
  };
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div className="flex h-full w-full  bg-gray-800 py-5 justify-center items-center px-5">
      {/* code syntax highlighter window here */}
      <div className="h-full w-full  flex  flex-col justify-start items-start">
        {/* copy to clipboard here */}
        <div className="flex justify-between w-full border-b py-2 border-gray-900">
          <p className=" flex text-sm  text-cyan-500  justify-start    ">
            Welcome
            <span className="font-mono font-bold px-4 ">Hero!</span>
          </p>
          <CopyToClipboard
            text={textfield}
            className="text-gray-50  text-xs font-thin bg-gray-500 rounded-md px-4 py-0.5 textinput"
          >
            <button
              onClick={() => {
                swal("code copied successfully");
              }}
            >
              Copy Code
            </button>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          language={selectvalue}
          style={dracula}
          className="flex bg-gray-900"
        >
          {/* pass in code here */}
          {text}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Highlighter;
