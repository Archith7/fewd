import React, { useState } from "react";

const Arraytolist = () => {
  const [array, setArray] = useState(["Apple", "Banana", "Cherry", "Date", "pear"]);

  return (
    <div>
      <h2>Array to ArrayList Items</h2>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Arraytolist;
