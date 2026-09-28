/*#### Iterate and Render

Display the number of items in the list by using the length property of the state variable. This information can be displayed using plain text or added to a message or heading element.

To render the list of people, iterate over the data array using the map method. For each item in the array, render an image element (hint : use inline styles to make width smaller).Additionally, render the person's name and age as plain text.

Create a List component to hold the rendered items. This component can be a simple div element containing the list of Person components.

Create a Person component to render the information for each person. This component should receive the person data as props and render the image, name, and age information.
*/

import { useState } from "react";
import data from "./data.js";
import List from "./List.jsx";

const App = () => {
  const [people, setPeople] = useState(data);

  const removeItems = () => {
    setPeople([]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f5f8",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem 1rem",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#1e293b",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          {people.length} Birthdays today
        </h3>

        <List people={people} />

        <button
          onClick={removeItems}
          style={{
            width: "100%",
            backgroundColor: "#d97706",
            color: "#ffffff",
            border: "none",
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            fontWeight: "600",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "1.5rem",
          }}
        >
          Clear All
        </button>
      </section>
    </div>
  );
};
export default App;
