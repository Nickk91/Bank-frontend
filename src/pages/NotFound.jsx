import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/general-page-style.css";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <section>
      <h1>Not Found</h1>
    </section>
  );
}
