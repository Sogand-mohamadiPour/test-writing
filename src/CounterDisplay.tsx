type CounterDisplayProps = {
    count: number;
};

export default function CounterDisplay({ count, }: CounterDisplayProps) {
    return <p>Count: {count}</p>;
}