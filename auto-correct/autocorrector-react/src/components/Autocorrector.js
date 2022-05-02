import React, { useState } from "react";
import { useCheckWord } from "../hooks/useCheckWord";
import "./styles.css";

const CORRECTIONS = {
  realy: "really",
  wierd: "weird",
};

export const Autocorrector = () => {
  const [newCorrections, setNewCorrections] = useState(
    Object.keys(CORRECTIONS).map((word) => ({
      key: word,
      correction: CORRECTIONS[word],
    }))
  );

  const { text, checkTextArea, checkWord } = useCheckWord(newCorrections);
  const [misspelled, setMisspelled] = useState("");
  const [rightWord, setRightWord] = useState("");
  const [keyExist, setKeyExist] = useState(false);

  const handlerInputMisspelledChange = (e) => {
    setKeyExist(false);
    setMisspelled(e.target.value);
  };

  const handleNewCorrections = (e) => {
    e.preventDefault();

    for (let i = 0; i < newCorrections.length; i++) {
      if (newCorrections[i].key.toLowerCase() === misspelled.toLowerCase()) {
        setKeyExist(true);
        setMisspelled("");
        setRightWord("");
        return;
      }
    }

    if (!keyExist) {
      setNewCorrections([
        ...newCorrections,
        {
          key: misspelled,
          correction: rightWord,
        },
      ]);
    }

    setMisspelled("");
    setRightWord("");
  };

  const handlerCancelButton = () => {
    setKeyExist(false);
    setMisspelled("");
    setRightWord("");
  };

  return (

      <div className="row mt-3">
          <textarea
            className="form-control"
            value={text}
            onChange={checkTextArea}
            onKeyDown={checkWord}
            name=""
            id=""
          ></textarea>
        </div>
  );
};
