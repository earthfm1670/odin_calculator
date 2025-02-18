"use client";

import React, { useState } from "react";

export function Calculator() {
  const [currentNumber, setCurrentNumber] = useState<string>("");
  const [previousNumber, setPreviousNumber] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleClick = (value: string) => {
    setCurrentNumber((prevDisplay) => prevDisplay + value);
  };

  const clearDisplay = (): void => {
    setCurrentNumber("");
    setPreviousNumber(null);
    setOperator(null);
  };

  const handleOperator = (op: string): void => {
    if (currentNumber === "") return;
    if (previousNumber !== null && operator) {
      const result = performCalculation();
      setPreviousNumber(result.toString());
      setCurrentNumber("");
    } else {
      setPreviousNumber(currentNumber);
      setCurrentNumber("");
    }
    setOperator(op);
  };

  const performCalculation = (): number => {
    if (previousNumber === null || currentNumber === "") {
      return 0;
    }

    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if (operator === "+") return prev + curr;
    if (operator === "-") return prev - curr;
    if (operator === "X") return prev * curr;
    if (operator === "/") return prev / curr;

    return curr;
  };

  const numberRows = [
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
      onClick: () =>
        setCurrentNumber((prevDisplay) => prevDisplay.slice(0, -1)),
    },
    { label: "7", onClick: () => handleClick("7") },
    { label: "8", onClick: () => handleClick("8") },
    { label: "9", onClick: () => handleClick("9") },
    { label: "X", onClick: () => handleOperator("X") },
    { label: "4", onClick: () => handleClick("4") },
    { label: "5", onClick: () => handleClick("5") },
    { label: "6", onClick: () => handleClick("6") },
    { label: "-", onClick: () => handleOperator("-") },
    { label: "1", onClick: () => handleClick("1") },
    { label: "2", onClick: () => handleClick("2") },
    { label: "3", onClick: () => handleClick("3") },
    { label: "+", onClick: () => handleOperator("+") },
    { label: "/", onClick: () => handleOperator("/") },
    { label: "0", onClick: () => handleClick("0") },
    { label: ".", onClick: () => handleClick(".") },
    {
      label: "=",
      onClick: () => {
        const result = performCalculation();
        setCurrentNumber(result.toString());
        setPreviousNumber(null);
        setOperator(null);
      },
    },
  ];

  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center">
        {/* For calculator */}
        <div className="bg-gray-700 w-[600px] h-[610px]">
          <div className="bg-gray-500 h-[150px] flex justify-end items-center text-6xl">
            {currentNumber || previousNumber || 0}
          </div>
          <div className="my-4">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              {numberRows.map((button, index) => (
                <button
                  key={index}
                  className="bg-gray-900 w-[140px] h-[80px] border flex justify-center items-center text-2xl"
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
