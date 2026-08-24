import { useState } from "react";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

function CounterWrapper() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Counter onCountChange={setCount} />
            <CounterDisplay count={count} />
        </div>
    )
}

export default CounterWrapper
