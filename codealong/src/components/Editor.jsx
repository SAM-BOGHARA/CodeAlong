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
import axios from "axios";

const Editor = ({
  socketRef,
  roomID,
  onCodeChange,
  customInput,
  setCustomInput,
  outputValue,
  setOutputValue,
}) => {
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
  const themeOptions = [
    { id: 1, name: "default", value: "default" },
    { id: 2, name: "3024-day", value: "3024-day" },
    { id: 3, name: "3024-night", value: "3024-night" },
    { id: 4, name: "abbott", value: "abbott" },
    { id: 5, name: "abcdef", value: "abcdef" },
    { id: 6, name: "ambiance", value: "ambiance" },
    { id: 7, name: "ayu-dark", value: "ayu-dark" },
    { id: 8, name: "ayu-mirage", value: "ayu-mirage" },
    { id: 9, name: "base16-dark", value: "base16-dark" },
    { id: 10, name: "base16-light", value: "base16-light" },
    { id: 11, name: "bespin", value: "bespin" },
    { id: 12, name: "blackboard", value: "blackboard" },
    { id: 13, name: "cobalt", value: "cobalt" },
    { id: 14, name: "colorforth", value: "colorforth" },
    { id: 15, name: "darcula", value: "darcula" },
    { id: 16, name: "duotone-dark", value: "duotone-dark" },
    { id: 17, name: "duotone-light", value: "duotone-light" },
    { id: 18, name: "eclipse", value: "eclipse" },
    { id: 19, name: "elegant", value: "elegant" },
    { id: 20, name: "erlang-dark", value: "erlang-dark" },
    { id: 21, name: "gruvbox-dark", value: "gruvbox-dark" },
    { id: 22, name: "hopscotch", value: "hopscotch" },
    { id: 23, name: "icecoder", value: "icecoder" },
    { id: 24, name: "idea", value: "idea" },
    { id: 25, name: "isotope", value: "isotope" },
    { id: 26, name: "juejin", value: "juejin" },
    { id: 27, name: "lesser-dark", value: "lesser-dark" },
    { id: 28, name: "liquibyte", value: "liquibyte" },
    { id: 29, name: "lucario", value: "lucario" },
    { id: 30, name: "material", value: "material" },
    { id: 31, name: "material-darker", value: "material-darker" },
    { id: 32, name: "material-palenight", value: "material-palenight" },
    { id: 33, name: "material-ocean", value: "material-ocean" },
    { id: 34, name: "mbo", value: "mbo" },
    { id: 35, name: "mdn-like", value: "mdn-like" },
    { id: 36, name: "midnight", value: "midnight" },
    { id: 37, name: "monokai", value: "monokai" },
    { id: 38, name: "moxer", value: "moxer" },
    { id: 39, name: "neat", value: "neat" },
    { id: 40, name: "neo", value: "neo" },
    { id: 41, name: "night", value: "night" },
    { id: 42, name: "nord", value: "nord" },
    { id: 43, name: "oceanic-next", value: "oceanic-next" },
    { id: 44, name: "panda-syntax", value: "panda-syntax" },
    { id: 45, name: "paraiso-dark", value: "paraiso-dark" },
    { id: 46, name: "paraiso-light", value: "paraiso-light" },
    { id: 47, name: "pastel-on-dark", value: "pastel-on-dark" },
    { id: 48, name: "railscasts", value: "railscasts" },
    { id: 49, name: "rubyblue", value: "rubyblue" },
    { id: 50, name: "seti", value: "seti" },
    { id: 51, name: "shadowfox", value: "shadowfox" },
    { id: 52, name: "solarized", value: "solarized" },
    { id: 53, name: "the-matrix", value: "the-matrix" },
    { id: 54, name: "tomorrow-night-bright", value: "tomorrow-night-bright" },
    {
      id: 55,
      name: "tomorrow-night-eighties",
      value: "tomorrow-night-eighties",
    },
    { id: 56, name: "ttcn", value: "ttcn" },
    { id: 57, name: "twilight", value: "twilight" },
    { id: 58, name: "vibrant-ink", value: "vibrant-ink" },
    { id: 59, name: "xq-dark", value: "xq-dark" },
    { id: 60, name: "xq-light", value: "xq-light" },
    { id: 61, name: "yeti", value: "yeti" },
    { id: 62, name: "yonce", value: "yonce" },
    { id: 63, name: "zenburn", value: "zenburn" },
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
    setLang(selectedOption.value);
    console.log(selectedOption.id, selectedOption.value);
  };

    const handleCodeExecution = async () => {
      setOutputValue(""); 
      console.log(import.meta.env.VITE_JUDGE0_API_URL);
      // Prepare the request payload
      const formData = {
        language_id: selectedLanguage.id,
        source_code: btoa(code),
        stdin: btoa(customInput),
      };

      // Make the API request using axios
      try {
        const response = await axios.request({
          method: "POST",
          url: import.meta.env.VITE_JUDGE0_API_URL,
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "Content-Type": "application/json",
          },
          data: formData,
        });

        const token = response.data.token;
        console.log("token",token)
        const output = await checkStatus(token);
        
      } catch (error) {
        console.error("Error executing code:", error);
        setOutputValue("Error executing code. Please try again.");
      }
    };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_JUDGE0_API_URL + "/" + token,
      params: { base64_encoded: "false", fields: "*" },
    };

    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;
      console.log(response)
      // If the code is still processing
      if (statusId === 1 || statusId === 2) {
        // Poll again after 2 seconds
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        // Code has finished executing
        const output = response.data.stdout ? response.data.stdout : response.data.stderr
        console.log("output",output)
        setOutputValue(output);
      }
    } catch (err) {
      console.error("Error checking status:", err);
      return "Error executing code. Please try again.";
    }
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
          lintOnChange: true,
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
          className="seLang p-2 appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {languageOptions.map((option) => (
            <option
              key={option.id}
              value={option.value}
              className="bg-white hover:bg-gray-200"
              style={{ backgroundColor: "#F3F4F6" }}
            >
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
          className="seLang p-2 appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {themeOptions.map((theme) => (
            <option
              key={theme.id}
              value={theme.value}
              className="bg-white hover:bg-gray-200"
              style={{ backgroundColor: "#F3F4F6" }}
            >
              {theme.name}
            </option>
          ))}
        </select>
      </Label>
      <Button
        className="btn btn-accent ml-2 bg-green-700 hover:bg-green-800"
        onClick={handleCodeExecution}
      >
        Run Code
      </Button>
      <Textarea id="realtimeEditor" className="h-full rounded-full" />
    </>
  );
};

export default Editor;
