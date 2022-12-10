import React, { useState, useEffect } from "react";

export default function ChangeTitle() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
    console.count("effect");
    // const root =
  });

  console.count("Redering");
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
