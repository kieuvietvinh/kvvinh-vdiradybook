import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";

const url = "https://api.vdiarybook.net/api/utilities";
const token =
  "Bearer " +
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZkMzdiYTU3YTg0OWM4NTJmYmQ2YzgiLCJlbWFpbCI6ImtpZXV2aWV0dmluaDAwMDlAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOnt9LCJyb2xlIjoiVVNFUiIsImlhdCI6MTcxMjAyNTEyMywiZXhwIjoxNzk4NDI1MTIzfQ.xgQmmT4Lmbp7WQ_3phzte3bo2tepyC1ppGuuibIGcV0";

const App12 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg m-4">
      <h1 className="text-2xl font-bold text-purple-800"></h1>
      <ul>
        {data.data.all.map(
          (item = (
            <li key={item.id} className="text-gray-600">
              {item.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App12;
