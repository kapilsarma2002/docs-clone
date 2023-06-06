import React, { Component } from "react";
import { EditorState, convertFromRaw, convertToRaw, ContentState, RawDraftContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextEditor extends Component<{}, {editorState: EditorState}> {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent();
    // console.log("content state", convertToRaw(contentState));
    this.saveContent(contentState);
    this.setState({
      editorState,
    });
  };

  componentDidMount(): void {
    const content = window.localStorage.getItem("content");

    if (content) {
      this.setState({
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(content))
        ),
      });
    } else {
      this.setState({ editorState: EditorState.createEmpty() });
    }
    console.log('state is : ')
    console.log(this.state);
  }

  saveContent = (content) => {
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
  };

  render() {
    return (
      <div className="white text-md fixed h-full w-11/12 bg-[#dde0e4] text-center">
        <Editor
          editorState={this.state.editorState}
          onEditorStateChange={this.onChange}
          wrapperClassName="h-full"
          toolbarClassName="mt-16 flex fixed top-0 z-50 !justify-center max-auto w-full"
          editorClassName="bg-white shadow-lg max-w-4xl mx-auto border-2 border-solid border-blue m-4 h-48 text-md p-4 px-8 pt-24"
        />
      </div>
    );
  }
}

export default TextEditor;
