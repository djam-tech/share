import React, { useEffect, useState } from "react";

export default function CompteurAuto() {
  const [nbre, setNbre] = useState(0);
  const [first, setfirst] = useState('')
  
  useEffect(() => {
    const int = setInterval(() => {
      setNbre((current) => current + 1);
    }, 1000);
    console.count("effect");
    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <div>
      <p>{nbre}</p>
    </div>
  );
}
