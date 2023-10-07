import React, { useCallback, useEffect, useRef, useState } from "react";
import ACTIONS from "../Actions";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
// Themes
import "codemirror/theme/dracula.css";

// Modes
import "codemirror/mode/dart/dart";
import "codemirror/mode/css/css";
import "codemirror/mode/go/go";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/rust/rust";
import "codemirror/mode/ruby/ruby";
import "codemirror/mode/sql/sql";
import "codemirror/mode/swift/swift";

// Editor - Features
// edit
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
// comment
import "codemirror/addon/comment/comment";
import "codemirror/addon/comment/continuecomment";
// display
import "codemirror/addon/display/fullscreen";
import "codemirror/addon/display/rulers";
// edit
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/continuelist";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/trailingspace";
// fold
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/indent-fold";
import "codemirror/addon/fold/markdown-fold";
import "codemirror/addon/fold/xml-fold";
import "codemirror/addon/edit/closetag";
// scroll
import "codemirror/addon/scroll/simplescrollbars";

// search
import "codemirror/addon/search/jump-to-line";
import "codemirror/addon/search/match-highlighter";
import "codemirror/addon/search/matchesonscrollbar";
import "codemirror/addon/search/search";
import "codemirror/addon/search/searchcursor";
import "codemirror/addon/edit/closetag";

// selection
import "codemirror/addon/selection/active-line";
import "codemirror/addon/selection/mark-selection";
import "codemirror/addon/selection/selection-pointer";

// wrap
import "codemirror/addon/wrap/hardwrap";

const Editor = ({ socketRef, roomID, onCodeChange }) => {
  const editorRef = useRef(null);
  useEffect(() => {
    async function init() {
      editorRef.current = Codemirror.fromTextArea(
        document.getElementById("realtimeEditor"),
        {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
          autocorrect: true,
          cursorHeight: 1,
          indentWithTabs: true,
          matchBrackets: true,
          search: true,
          tabSize: 20,
          spellcheck: true,
        }
      );

      editorRef.current.on("change", (instance, changes) => {
        const { origin } = changes;
        console.log(changes);
        const code = instance.getValue();
        onCodeChange(code);
        if (origin !== "setValue") {
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomID,
            code,
          });
        }
      });
    }
    init();
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
    return () => {
      socketRef.current.off(ACTIONS.CODE_CHANGE);
    };
  }, [socketRef.current]);

  return (
    <>
      <textarea id="realtimeEditor"></textarea>;
    </>
  );
};

export default Editor;
