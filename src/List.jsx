import React from "react";
import Person from "./Person.jsx";

const List = ({ people }) => {
  const styles = {
    listContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
    },
  };

  return (
    <section style={styles.listContainer}>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
export default List;
