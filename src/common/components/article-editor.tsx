import { useEffect, useMemo, useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { EditorProps } from "react-draft-wysiwyg";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, useTheme } from "@mui/material";

const htmlToDraft =
  typeof window === "object" && require("html-to-draftjs").default;
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface IProps {
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ArticleEditor = (props: IProps) => {
  const theme = useTheme();
  const { value, onChange, placeholder } = props;

  const defaultEditorState = useMemo(() => {
    let initState = EditorState.createEmpty();

    if (!value) {
      return initState;
    }

    const contentBlock = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(
      contentBlock?.contentBlocks
    );
    initState = EditorState.createWithContent(contentState);

    return initState;
  }, []);

  const [editorState, setEditorState] = useState(defaultEditorState);

  const isEmptyEditor = () => {
    const blocks = convertToRaw(editorState?.getCurrentContent())?.blocks;
    const value = blocks
      ?.map((block) => (!block?.text?.trim() && "\n") || block?.text)
      ?.join("\n")
      ?.trim();
    return !value;
  };

  useEffect(() => {
    const data = draftToHtml(convertToRaw(editorState?.getCurrentContent()));
    const isEmpty = isEmptyEditor();
    onChange(isEmpty ? "" : data);
  }, [editorState]);

  useEffect(() => {
    if (value === null) {
      const emptyEditor = EditorState.createEmpty();
      setEditorState(emptyEditor);
    }
  }, [value]);

  return (
    <Box
      sx={{
        "& .rdw-editor-toolbar": {
          mb: 1,
          borderRadius: 0.5,
        },
        "& .rdw-editor-main": {
          border: `1px solid ${theme.palette.primary.main_12}`,
          borderRadius: 0.5,
          minHeight: "200px",
        },
        "& .public-DraftStyleDefault-block": {
          m: 1,
        },
      }}
    >
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
          ],
        }}
      />
    </Box>
  );
};

export default ArticleEditor;
