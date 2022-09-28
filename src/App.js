import "./styles.css";
import { useState } from "react";

var emojiDic = {
  "🐼": "Panda",
  "🎻": "Violin",
  "😴": "Sleeping",
  "👻": "Ghost",
  "🌈": "Rainbow",
  "🐒": "Monkey",
  "✨": "Sparkles",
  "🌹": "Rose",
  "🦋": "Butterfly",
  "🔥": "Fire",
  "🍁": "Maple Leaf",
  "📷": "Camera",
  "🎈": "Balloon",
  "💣": "Bomb",
  "🐬": "Dolphin",
  "🪁": "Kite",
  "🔖": "Bookmark",
  "🐸": "Frog",
  "🔔": "Bell",
  "👽": "Alien",
  "☀️": "Sun",
  "🎸": "Guitar"
};

var emojiList = Object.keys(emojiDic);

export default function App() {
  var [guessing, setGuessing] = useState("");
  function onChangeListener(event) {
    console.log("onChangeListener called");
    console.log(event.target.value);
    guessing = emojiDic[event.target.value];
    if (guessing === undefined && event.target.value !== "") {
      guessing = "Emoji Not Found";
    }

    setGuessing(guessing);
  }

  function onClickListener(item) {
    console.log(item);
    setGuessing(emojiDic[item]);
  }

  return (
    <div className="App">
      <h1>Emoji Guessing App</h1>
      <input onChange={onChangeListener} />
      <h2>{guessing}</h2>
      <div className="emoji">
        {emojiList.map((item) => {
          return (
            <span key={item} onClick={() => onClickListener(item)}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
