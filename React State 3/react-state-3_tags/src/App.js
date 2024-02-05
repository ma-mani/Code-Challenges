import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const handleTag = (tag) => {
    setTags((prev) => {
      return [...prev, tag];
    });
  };

  const deleteTagHandler = (selectedTag) => {
    setTags((prev) => {
      return prev.filter((tag) => tag !== selectedTag);
    });
  };

  return (
    <main className="app">
      <Form onAddTag={handleTag} />
      <List onDeleteTag={deleteTagHandler} tags={tags} />
    </main>
  );
}
