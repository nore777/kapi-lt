import { useEditor as useTipTapEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Transaction } from "@tiptap/pm/state";
import { Fragment } from "@tiptap/pm/model";


function handleImageDeletes(transaction: Transaction) {
  const getImageSrcs = (fragment: Fragment) => {
    const srcs = new Set();
    fragment.forEach((node) => {
      if (node.type.name === 'image') {
        srcs.add(node.attrs.src);
      }
    });
    return srcs;
  };

  const currentSrcs = getImageSrcs(transaction.doc.content);
  const previousSrcs = getImageSrcs(transaction.before.content);

  if (currentSrcs.size === 0 && previousSrcs.size === 0) {
    return;
  }

  // Determine which images were deleted
  const deletedImageSrcs = [...previousSrcs].filter((src) => !currentSrcs.has(src));

  if (deletedImageSrcs.length > 0) {
    console.log("image deleted", deletedImageSrcs)
  }
}

const useEditor = () => {
  const editor = useTipTapEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Link.configure({
        defaultProtocol: 'https',
        protocols: ['http', 'https']
      }),
      Image
    ],
    onUpdate: ({ transaction }) => {
      handleImageDeletes(transaction)
    },
  });
  return editor
}


export default useEditor
