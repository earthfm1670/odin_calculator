"use client";

import React, { useState } from "react";

export function Calculator() {
  const [display, setDisplay] = useState<string>("");

  const handleClick = (value: string) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const clearDisplay = (): void => {
    setDisplay("");
  };

  const topRow = [
    {
      label: "%",
      onClick: () => handleClick("%"),
    },
    {
      label: "CE",
      onClick: clearDisplay,
    },
    {
      label: "C",
      onClick: clearDisplay,
    },
    {
      label: "DEL",
      onClick: () => setDisplay((prevDisplay) => prevDisplay.slice(0, -1)),
    },
  ];

  const numberRows = [
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["/", "0", ".", "="],
  ];

  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center">
        {/* For calculator */}
        <div className="bg-gray-700 w-[600px] h-[675px]">
          <div className="bg-gray-500 h-[150px] flex justify-end items-center text-6xl">
            {display || 0}
          </div>
          <div className="my-4">
            <div className=" h-[100px] flex justify-evenly items-center">
              {topRow.map((button, index) => (
                <button
                  key={index}
                  className="bg-gray-900 w-[140px] h-[80px] border flex justify-center items-center text-2xl"
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
            </div>

            {numberRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className=" h-[100px] flex justify-evenly items-center"
              >
                {row.map((button, buttonIndex) => (
                  <button
                    key={buttonIndex}
                    className="bg-gray-900 w-[140px] h-[80px] border flex justify-center items-center text-2xl"
                    onClick={() => handleClick(button)}
                  >
                    {button}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
