import { Heading2, Heading3, Bold, AlignLeft, AlignCenter, AlignRight, Pilcrow, Italic, Strikethrough, AlignJustify } from "lucide-react";
import { Button, Flex } from "@radix-ui/themes";
import { Editor } from "@tiptap/react";
import React from "react";
import AddImage from "./AddImage";
import './MenuBar.css'

// EditorButton component
interface EditorButtonProps {
  action: () => void;
  icon: React.ReactNode;
  isActive: boolean;
  className?: string;
}

const EditorButton: React.FC<EditorButtonProps> = ({ action, icon, isActive, className = "" }) => {
  return (
    <Button
      variant="outline"
      color={isActive ? "orange" : "gray"}
      onClick={action}
      className={className}
    >
      {icon}
    </Button>
  );
};

// NewsEditorMenuBar component
interface NewsEditorMenuBarProps {
  editor: Editor | null;
}

const NewsEditorMenuBar: React.FC<NewsEditorMenuBarProps> = ({ editor }) => {
  if (editor === null) {
    return null
  }

  const buttonSize = 18;

  const isActive = (type: string, attrs?: Record<string, string | number>) => {
    return editor.isActive(type, attrs);
  };

  const isActiveAlign = (align: { textAlign: string }) => {
    return editor.isActive(align)
  }

  const handleImage = (url: string) => {
    editor.chain().focus().setImage({ src: url }).run()
  }

  return (
    <Flex className="news-editor-menu-bar" direction={{ initial: 'column', xs: 'row' }} gap={'2'}>
      <Flex gap={'2'}>
        <EditorButton
          action={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          icon={<Heading2 size={buttonSize} />}
          isActive={isActive("heading", { level: 2 })}
        />
        <EditorButton
          action={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          icon={<Heading3 size={buttonSize} />}
          isActive={isActive("heading", { level: 3 })}
        />
        <EditorButton
          action={() => editor.chain().focus().setParagraph().run()}
          icon={<Pilcrow size={buttonSize} />}
          isActive={isActive("paragraph")}
        />


        <EditorButton
          action={() => editor.chain().focus().toggleBold().run()}
          icon={<Bold size={buttonSize} />}
          isActive={isActive("bold")}
        />
        <EditorButton
          action={() => editor.chain().focus().toggleItalic().run()}
          icon={<Italic size={buttonSize} />}
          isActive={isActive("italic")}
        />
        <EditorButton
          action={() => editor.chain().focus().toggleStrike().run()}
          icon={<Strikethrough size={buttonSize} />}
          isActive={isActive("strike")}
        />
      </Flex>

      <Flex gap={'2'}>
        <EditorButton
          action={() => editor.chain().focus().setTextAlign("left").run()}
          icon={<AlignLeft size={buttonSize} />}
          isActive={isActiveAlign({ textAlign: "left" })}
        />
        <EditorButton
          action={() => editor.chain().focus().setTextAlign("center").run()}
          icon={<AlignCenter size={buttonSize} />}
          isActive={isActiveAlign({ textAlign: "center" })}
        />
        <EditorButton
          action={() => editor.chain().focus().setTextAlign("right").run()}
          icon={<AlignRight size={buttonSize} />}
          isActive={isActiveAlign({ textAlign: "right" })}
        />
        <EditorButton
          action={() => editor.chain().focus().setTextAlign("justify").run()}
          icon={<AlignJustify size={buttonSize} />}
          isActive={isActiveAlign({ textAlign: "justify" })}
        />
      </Flex>
      <Flex gap={'2'}>
        <AddImage handleImage={handleImage} />
      </Flex>
    </Flex>
  );
};

export default NewsEditorMenuBar;

