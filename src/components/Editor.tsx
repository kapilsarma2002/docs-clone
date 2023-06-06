import React, { useState, useEffect, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const content = window.localStorage.getItem("content");
  let temp = EditorState.createEmpty();
  if (content) {
    temp = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  } 
  
  const [editorState, setEditorState] = useState(temp);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const state = editorState.getCurrentContent();
    saveContent(state);
  };

  const saveContent = (content) => {
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
  };

  const editorRef = useRef(null);
  useEffect(() => {
    editorRef.current.focusEditor();
  });

  return (
    <div className="white text-md fixed h-full w-11/12 bg-[#dde0e4] text-center">
      <Editor
        ref={editorRef}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="h-full"
        toolbarClassName="mt-16 flex fixed top-0 z-50 !justify-center max-auto w-full"
        editorClassName="bg-white shadow-lg max-w-4xl mx-auto border-2 border-solid border-blue m-4 h-48 text-md p-4 px-8 pt-24"
      />
    </div>
  );
};

export default TextEditor;
