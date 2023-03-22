import { Head, Title } from "solid-start";
//import ace from "ace-builds";
import "ace-builds/css/theme/monokai.css"
//import "ace-builds/src/mode-javascript"
import { createEffect } from "solid-js";

await import("https://cdnjs.cloudflare.com/ajax/libs/ace/1.16.0/ace.js")
await import("https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js")
await import("/node_modules/ace-builds/src/mode-javascript.js")


export default function Home() {

  var editor: any;

  createEffect(() => {

    editor = ace.edit("editor");
    //editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");

    // editor.session.$onChangeMode(editor.session.$modes["ace/mode/javascript"], true);


    editor.setOptions({ fontSize: "20pt" });

    if (typeof localStorage !== "undefined" && localStorage.getItem("script")) {
      editor.setValue(localStorage.getItem("script")!);
    }


    // event listener for when ctrl enter is pressed
    editor.commands.addCommand({
      name: "run",
      bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
      exec: function () {
        go();
      }
    });
  })



  function go() {
    localStorage.setItem("script", editor.getValue());
    window.eval(getSelectedTextOrCursorLine());
  }

  function getSelectedTextOrCursorLine() {
    var selectedText = editor.getSelectedText();
    if (selectedText) {
      return selectedText;
    }
    var cursor = editor.getCursorPosition();
    var line = editor.session.getLine(cursor.row);
    return line;
  }

  return (
    <div id="editor" class=" ace_editor ace_hidpi ace-monokai ace_dark" />
  );
}
