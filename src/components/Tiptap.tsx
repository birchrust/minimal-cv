import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";

const Tiptap = ({ content }: { content: string }) => {
  console.log(content);
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg m-6 focus:outline-none space-y-4",
      },
    },
    content: content == "" ? "t" : content,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
