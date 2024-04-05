import React from "react";
import { CKEditor } from "ckeditor4-react";

function App() {
  return (
    <CKEditor initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
  );
}

export default App;
