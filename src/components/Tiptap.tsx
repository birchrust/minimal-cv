import StarterKit from "@tiptap/starter-kit";
import data from "../../public/config.json";
import { useEditor, EditorContent } from "@tiptap/react";

let conntent: string;

if (data.config[3]?.options[0]?.value) {
  conntent = data.config[3]?.options[0]?.value;
} else {
  conntent = `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
    <pre><code class="language-css">body {
    display: none;
  }</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `;
}

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg m-6 focus:outline-none space-y-4",
      },
    },
    content: conntent,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
