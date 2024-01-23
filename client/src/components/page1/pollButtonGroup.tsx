import { useState } from "react";
import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
  stringify: string;
  onSelectItem: () => void;
}

function PollButtonGroup({ stringify, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const items = stringify.split("{").slice(1);

  function handleSubmit() {
    if (selectedIndex === -1) {
      alert("error: please select an answer before submitting");
    } else {
      alert(`submitting option ${selectedIndex + 1}...`);
    }
  }

  return (
    <>
      {items.length === 0 && <p>no poll options found</p>}
      {items.map((item, index) => (
        <div>
          <button
            className={
              selectedIndex === index
                ? "button-group-item-active"
                : "button-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem();
            }}
          >
            {item
              .split(":")[2]
              .replaceAll(",", "")
              .replace('"', "")
              .replace("[", "")
              .replace("]", "")
              .replace("{", "")
              .replace("}", "")
              .slice(0, -1)}
          </button>
        </div>
      ))}
      <div className="divider">
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default PollButtonGroup;
