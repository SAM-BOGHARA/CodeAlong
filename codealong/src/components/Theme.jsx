import React, { useState } from "react";
import { aura } from "@uiw/codemirror-theme-aura";
import { abyss } from "@uiw/codemirror-theme-abyss";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { abcdef } from "@uiw/codemirror-theme-abcdef";


const Theme = () => {
  const themesArray = ["aura", "abyss", "androidstudio", "abcdef"];
  const [theme, setTheme] = useState(themesArray[0]);

  return (
    <>
      <div className="themeSwitcher bg-zinc-700">
        <label htmlFor="themeSwitch">Switch Theme:</label>
        <select
          id="themeSwitch"
          className="px-2 py-1 border border-zinc-300 rounded"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themesArray.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Theme;
