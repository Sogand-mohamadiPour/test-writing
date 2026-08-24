import { useState } from "react";

type CounterDisplayProps = {
  onCountChange: (count: number) => void;
};

export default function CounterDisplay({ onCountChange }: CounterDisplayProps) {
  const [count, setCount] = useState(0);

  function increase() {
    const newCount = count + 1;

    setCount(newCount);
    onCountChange(newCount);
  }

  function decrease() {
    const newCount = count - 1;

    setCount(newCount);
    onCountChange(newCount);
  }

  return (
    <>
      <button onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>
        Decrease
      </button>
    </>
  );
}