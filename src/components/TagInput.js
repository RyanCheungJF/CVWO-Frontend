import React, { useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { TaskContext } from "../contexts/TaskContext";
import "./tagStyles.css";

function TagInput() {
  const { inputTags, setInputTags } = useContext(TaskContext);

  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setInputTags([...inputTags, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const removeTag = (removedTag) => {
    const newTags = inputTags.filter((tag) => tag !== removedTag);
    setInputTags(newTags);
  };

  return (
    <div>
      <div className="tag-container">
        {inputTags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag}{" "}
              <span className="tag-cross" onClick={() => removeTag(tag)}>
                <CancelIcon />
              </span>
            </div>
          );
        })}
        <input
          onKeyDown={addTag}
          type="text"
          placeholder="Press Enter to add tags!"
        />
      </div>
    </div>
  );
}

export default TagInput;
