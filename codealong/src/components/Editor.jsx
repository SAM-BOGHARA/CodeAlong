import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/3024-night.css";
import "codemirror/theme/abbott.css";
import "codemirror/theme/abcdef.css";
import "codemirror/theme/ambiance.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/ayu-mirage.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/bespin.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/colorforth.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/duotone-dark.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/elegant.css";
import "codemirror/theme/erlang-dark.css";
import "codemirror/theme/gruvbox-dark.css";
import "codemirror/theme/hopscotch.css";
import "codemirror/theme/icecoder.css";
import "codemirror/theme/idea.css";
import "codemirror/theme/isotope.css";
import "codemirror/theme/juejin.css";
import "codemirror/theme/lesser-dark.css";
import "codemirror/theme/liquibyte.css";
import "codemirror/theme/lucario.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/material.css";
import "codemirror/theme/mbo.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/moxer.css";
import "codemirror/theme/neat.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/night.css";
import "codemirror/theme/nord.css";
import "codemirror/theme/oceanic-next.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/theme/paraiso-dark.css";
import "codemirror/theme/paraiso-light.css";
import "codemirror/theme/pastel-on-dark.css";
import "codemirror/theme/railscasts.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/theme/seti.css";
import "codemirror/theme/shadowfox.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/tomorrow-night-bright.css";
import "codemirror/theme/tomorrow-night-eighties.css";
import "codemirror/theme/ttcn.css";
import "codemirror/theme/twilight.css";
import "codemirror/theme/vibrant-ink.css";
import "codemirror/theme/xq-dark.css";
import "codemirror/theme/xq-light.css";
import "codemirror/theme/yeti.css";
import "codemirror/theme/yonce.css";
import "codemirror/theme/zenburn.css";
import { useEffect, useRef, useState } from "react";
import ACTIONS from "../Actions";

// modes
import "codemirror/mode/clike/clike";
import "codemirror/mode/css/css";
import "codemirror/mode/dart/dart";
import "codemirror/mode/django/django";
import "codemirror/mode/dockerfile/dockerfile";
import "codemirror/mode/go/go";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/php/php";
import "codemirror/mode/python/python";
import "codemirror/mode/r/r";
import "codemirror/mode/ruby/ruby";
import "codemirror/mode/rust/rust";
import "codemirror/mode/sass/sass";
import "codemirror/mode/shell/shell";
import "codemirror/mode/sql/sql";
import "codemirror/mode/swift/swift";
import "codemirror/mode/xml/xml";
import "codemirror/mode/yaml/yaml";

// features
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/scroll/simplescrollbars.css";

//search
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/search/jump-to-line.js";
import "codemirror/addon/search/search.js";
import "codemirror/addon/search/searchcursor.js";
// Editor - Features
// edit
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
// comment
import "codemirror/addon/comment/comment";
import "codemirror/addon/comment/continuecomment";
// display
import "codemirror/addon/display/fullscreen";
import "codemirror/addon/display/rulers";
// edit
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/continuelist";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/trailingspace";
// fold
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/indent-fold";
import "codemirror/addon/fold/markdown-fold";
import "codemirror/addon/fold/xml-fold";
// scroll
import "codemirror/addon/scroll/simplescrollbars";

// search
import "codemirror/addon/edit/closetag";
import "codemirror/addon/search/jump-to-line";
import "codemirror/addon/search/match-highlighter";
import "codemirror/addon/search/matchesonscrollbar";
import "codemirror/addon/search/search";
import "codemirror/addon/search/searchcursor";

// selection
import "codemirror/addon/selection/active-line";
import "codemirror/addon/selection/mark-selection";
import "codemirror/addon/selection/selection-pointer";

// wrap
import { Textarea } from "@/components/ui/textarea";
import "codemirror/addon/wrap/hardwrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { language, cmtheme } from "../../src/atoms";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Editor = ({ socketRef, roomID, onCodeChange }) => {
  const editorRef = useRef(null);
  const [lang, setLang] = useRecoilState(language);
  const [them, setThem] = useRecoilState(cmtheme);
  const [code, setCode] = useState("");
  const languageOptions = [
    { id: 75, name: "C", value: "clike" },
    { id: 76, name: "C++", value: "c++" },
    { id: 51, name: "C#", value: "c#" },
    { id: 2, name: "CSS", value: "css" },
    { id: 3, name: "Dart", value: "dart" },
    { id: 4, name: "Django", value: "django" },
    { id: 5, name: "Dockerfile", value: "dockerfile" },
    { id: 60, name: "Go", value: "go" },
    { id: 7, name: "HTML-mixed", value: "htmlmixed" },
    { id: 63, name: "JavaScript", value: "javascript" },
    { id: 9, name: "JSX", value: "jsx" },
    { id: 10, name: "Markdown", value: "markdown" },
    { id: 11, name: "PHP", value: "php" },
    { id: 71, name: "Python", value: "python" },
    { id: 80, name: "R", value: "r" },
    { id: 73, name: "Rust", value: "rust" },
    { id: 72, name: "Ruby", value: "ruby" },
    { id: 16, name: "Sass", value: "sass" },
    { id: 17, name: "Shell", value: "shell" },
    { id: 82, name: "SQL", value: "sql" },
    { id: 83, name: "Swift", value: "swift" },
    { id: 20, name: "XML", value: "xml" },
    { id: 21, name: "YAML", value: "yaml" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState({
    id: null,
    value: "",
  });

  const handleLanguageChange = (e) => {
    const selectedOption = languageOptions.find(
      (option) => option.value === e.target.value
    );
    setSelectedLanguage({
      id: selectedOption.id,
      value: selectedOption.value,
    });
    setLang(selectedOption.value)
    console.log(selectedOption.id,selectedOption.value)
  };
  
  useEffect(() => {
    if (!editorRef.current) {
      // Initialize editor only once
      editorRef.current = Codemirror.fromTextArea(
        document.getElementById("realtimeEditor"),
        {
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
          autocorrect: true,
          cursorHeight: 1,
          indentWithTabs: true,
          matchBrackets: true,
          search: true,
          tabSize: 4,
          spellcheck: true,
          showCursorWhenSelecting: true,
          scrollbarStyle: "overlay",
          cursorScrollMargin: 2,
          lintOnChange : true
        }
      );

      editorRef.current.on("change", (instance, changes) => {
        const { origin } = changes;
        if (origin !== "setValue") {
          const newCode = instance.getValue();
          setCode(newCode); // Update the code state
          onCodeChange(newCode);
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomID,
            code: newCode,
          });
        }
      });
    }

    // Update editor configuration when language or theme changes
    editorRef.current.setOption("mode", lang);
    editorRef.current.setOption("theme", them);
  }, [lang, them]); // Only re-run this effect when lang or them changes

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
      <Label className="pl-2 text-lg">
        Language:
        <select
          value={selectedLanguage.value}
          onChange={handleLanguageChange}
          className="seLang p-2"
        >
          {languageOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </Label>

      <Label className="pl-2 text-lg">
        Theme:
        <select
          value={them}
          onChange={(e) => {
            setThem(e.target.value);
          }}
          className="seLang"
        >
          <option value="default">default</option>
          <option value="3024-day">3024-day</option>
          <option value="3024-night">3024-night</option>
          <option value="abbott">abbott</option>
          <option value="abcdef">abcdef</option>
          <option value="ambiance">ambiance</option>
          <option value="ayu-dark">ayu-dark</option>
          <option value="ayu-mirage">ayu-mirage</option>
          <option value="base16-dark">base16-dark</option>
          <option value="base16-light">base16-light</option>
          <option value="bespin">bespin</option>
          <option value="blackboard">blackboard</option>
          <option value="cobalt">cobalt</option>
          <option value="colorforth">colorforth</option>
          <option value="darcula">darcula</option>
          <option value="duotone-dark">duotone-dark</option>
          <option value="duotone-light">duotone-light</option>
          <option value="eclipse">eclipse</option>
          <option value="elegant">elegant</option>
          <option value="erlang-dark">erlang-dark</option>
          <option value="gruvbox-dark">gruvbox-dark</option>
          <option value="hopscotch">hopscotch</option>
          <option value="icecoder">icecoder</option>
          <option value="idea">idea</option>
          <option value="isotope">isotope</option>
          <option value="juejin">juejin</option>
          <option value="lesser-dark">lesser-dark</option>
          <option value="liquibyte">liquibyte</option>
          <option value="lucario">lucario</option>
          <option value="material">material</option>
          <option value="material-darker">material-darker</option>
          <option value="material-palenight">material-palenight</option>
          <option value="material-ocean">material-ocean</option>
          <option value="mbo">mbo</option>
          <option value="mdn-like">mdn-like</option>
          <option value="midnight">midnight</option>
          <option value="monokai">monokai</option>
          <option value="moxer">moxer</option>
          <option value="neat">neat</option>
          <option value="neo">neo</option>
          <option value="night">night</option>
          <option value="nord">nord</option>
          <option value="oceanic-next">oceanic-next</option>
          <option value="panda-syntax">panda-syntax</option>
          <option value="paraiso-dark">paraiso-dark</option>
          <option value="paraiso-light">paraiso-light</option>
          <option value="pastel-on-dark">pastel-on-dark</option>
          <option value="railscasts">railscasts</option>
          <option value="rubyblue">rubyblue</option>
          <option value="seti">seti</option>
          <option value="shadowfox">shadowfox</option>
          <option value="solarized">solarized</option>
          <option value="the-matrix">the-matrix</option>
          <option value="tomorrow-night-bright">tom-n-bright</option>
          <option value="tomorrow-night-eighties">tom-n-eighties</option>
          <option value="ttcn">ttcn</option>
          <option value="twilight">twilight</option>
          <option value="vibrant-ink">vibrant-ink</option>
          <option value="xq-dark">xq-dark</option>
          <option value="xq-light">xq-light</option>
          <option value="yeti">yeti</option>
          <option value="yonce">yonce</option>
          <option value="zenburn">zenburn</option>
        </select>
      </Label>
      <Button
        className="btn btn-accent ml-2 bg-green-700 hover:bg-green-800"
        onClick={() => {}}
      >
        Run Code
      </Button>
      <Textarea id="realtimeEditor" className="h-full rounded-full" />
    </>
  );
};

export default Editor;
