import React from "react";

const Person = ({ name, age, image }) => {
  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        columnGap: "1rem",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          objectFit: "cover",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}
      >
        <h4
          style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            color: "#0f172a",
            margin: 0,
          }}
        >
          {name}
        </h4>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#64748b",
            margin: 0,
          }}
        >
          {age} years
        </p>
      </div>
    </article>
  );
};

export default Person;
