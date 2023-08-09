import React, { useEffect, useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const initialState = [
  {
    id: "3c25ff96-17a8-4de2-a1a6-62db7911950a",
    type: "heading",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
      level: "1",
    },
    content: [
      {
        type: "text",
        text: "Javascript is an OOP Language",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "0c6b408f-9b80-4f27-88b4-c3933aa6d818",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [],
    children: [],
  },
  {
    id: "a5f27f56-5638-40e3-8116-0c5abd9046ba",
    type: "heading",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
      level: "2",
    },
    content: [
      {
        type: "text",
        text: "Javascript ",
        styles: {},
      },
    ],
    children: [
      {
        id: "9b0f86fc-e443-45b8-a0f8-ff30d917858b",
        type: "bulletListItem",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "reacts",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "8e9a888f-9f54-41e2-9457-4bdc345ffea7",
        type: "bulletListItem",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "nodejs",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "6742cd29-8a8b-475c-860a-6a1183a7cfef",
        type: "bulletListItem",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "express",
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: "f3a5a332-711c-4adc-84ba-e972a70d0363",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [],
    children: [],
  },
];

export default function Document() {
  // Stores the editor's contents as an array of Block objects.
  const [blocks, setBlocks] = useState(null);

  // Creates a new editor instance.
  const editor = useBlockNote({
    theme: "light",
    initialContent: initialState,
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) =>
      // Converts the editor's contents to an array of Block objects.
      setBlocks(editor.topLevelBlocks),
  });
  // console.log(blocks);
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      console.log(blocks);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [blocks]);

  // Renders the editor instance and its contents, as an array of Block
  // objects, below.
  return (
    <div>
      <BlockNoteView editor={editor} />
      <pre>{JSON.stringify(blocks, null, 2)}</pre>
    </div>
  );
}
