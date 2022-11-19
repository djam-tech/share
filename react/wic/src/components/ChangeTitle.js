import React, { useState, useEffect } from "react";

export default function ChangeTitle() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
    console.log("effect");
    // const root =
  });

  console.log("rendering");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
