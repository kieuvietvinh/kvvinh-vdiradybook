import React, { useState } from "react";

const AddRemoveElementOnClick = () => {
  const [elements1, setElements1] = useState([]);
  const [elements2, setElements2] = useState([]);

  const addElement1 = () => {
    setElements1([...elements1, "Element 1 added"]);
  };

  const addElement2 = () => {
    setElements2([...elements2, "Element 2 added"]);
  };

  const removeElement2 = (index) => {
    const newElements2 = [...elements2];
    newElements2.splice(index, 1);
    setElements2(newElements2);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addElement1}
      >
        Add Element 1
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={addElement2}
      >
        Add Element 2
      </button>
      <div className="mt-4">
        {elements1.map((element, index) => (
          <div key={index} className="bg-gray-200 p-2 m-1 rounded">
            {element}
          </div>
        ))}
      </div>
      <div className="mt-4">
        {elements2.map((element, index) => (
          <div key={index} className="bg-gray-200 p-2 m-1 rounded">
            {element}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
              onClick={() => removeElement2(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRemoveElementOnClick;
