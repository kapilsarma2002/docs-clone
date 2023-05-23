import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {


  return (
    <div className="white text-center text-sm">
      <div className="h-11 bg-[#b5c5d5] float">
        <Editor toolbarClassName="flex sticky top-0 z-50 !justify-center max-auto"
        editorClassName="mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border" 
        />
      </div>
    </div>
  );
};

export default TextEditor;
