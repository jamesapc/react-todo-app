import React from "react";

export default function Accordion({ items }) {
  const renderItems = items.map((item, index) => {
    return (
      <div key={index}>
        <h3>{item.title}</h3>
        <div>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div>{renderItems}</div>;
}
