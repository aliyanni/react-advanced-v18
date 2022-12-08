import React, { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "Peter",
  //   age: 24,
  //   message: "Random Message",
  // });

  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random Message");

  const changeMessage = () => {
    //setPerson({ ...person, message: "Hello World" });
    setMessage("Hello World");
  };

  return (
    <>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
