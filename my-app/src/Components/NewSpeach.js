import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function NewSpeach(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();

  const dataParser = (event) => {
    const speach = {
      id: 4,
      title: title,
      desc: desc,
      date: date,
    };
    props.postSpeach(speach);

    history.push("/");
    event.preventDefault();
  };

  const handleChange = (event) => {
    const seter = {
      title: () => {
        setTitle(event.target.value);
      },
      desc: () => {
        setDesc(event.target.value);
      },
      date: () => {
        setDate(event.target.value);
      },
    };
    seter[event.target.name]();
  };

  return (
    <form onSubmit={dataParser}>
      <h2>NewSpeach</h2>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="desc" value={desc} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="text" name="date" value={date} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewSpeach;
