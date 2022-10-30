import ArticleEditor from "@/common/components/article-editor";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { cloneDeep } from "lodash";
import { convert } from "html-to-text";

const Syllabus = () => {
  const [syllabusEditor, setSyllabusEditor] = useState("");

  const handleSyllabus = () => {
    const _syllabus = cloneDeep(syllabusEditor)
      .replace(/\n/g, "")
      .replace(/<li>/g, '<li>"')
      .replace(/<\/li>/g, '"</li>');

    const convertToNestedObj = _syllabus
      .replace(/<ul>/g, "{list: [")
      .replace(/<\/ul>/g, "]},")
      .replace(/<li>/g, "{name:")
      .replace(/<\/li>/g, "},");

    console.log(1111111, convertToNestedObj);
    // console.log(222222, addQuotationMarkSyllabus);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ArticleEditor
        value={syllabusEditor}
        onChange={(value) => setSyllabusEditor(value)}
      />
      <button onClick={handleSyllabus}>Button</button>
    </Box>
  );
};

export default Syllabus;
