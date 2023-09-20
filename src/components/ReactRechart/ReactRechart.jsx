import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ReactRechart = () => {
  const studentMarks = [
    {
      id: 1,
      name: "Alice Johnson",
      math_mark: 85,
      science_mark: 78,
      history_mark: 92,
      english_mark: 76,
    },
    {
      id: 2,
      name: "Bob Smith",
      math_mark: 78,
      science_mark: 88,
      history_mark: 76,
      english_mark: 85,
    },
    {
      id: 3,
      name: "Charlie Brown",
      math_mark: 92,
      science_mark: 91,
      history_mark: 89,
      english_mark: 93,
    },
    {
      id: 4,
      name: "David Davis",
      math_mark: 66,
      science_mark: 72,
      history_mark: 68,
      english_mark: 70,
    },
    {
      id: 5,
      name: "Eva Martinez",
      math_mark: 75,
      science_mark: 82,
      history_mark: 79,
      english_mark: 74,
    },
    {
      id: 6,
      name: "Frank Wilson",
      math_mark: 88,
      science_mark: 90,
      history_mark: 87,
      english_mark: 89,
    },
    {
      id: 7,
      name: "Grace Lee",
      math_mark: 71,
      science_mark: 75,
      history_mark: 73,
      english_mark: 72,
    },
    {
      id: 8,
      name: "Hannah Taylor",
      math_mark: 95,
      science_mark: 96,
      history_mark: 94,
      english_mark: 97,
    },
    {
      id: 9,
      name: "Ivan Rodriguez",
      math_mark: 82,
      science_mark: 85,
      history_mark: 80,
      english_mark: 83,
    },
    {
      id: 10,
      name: "Jessica Turner",
      math_mark: 89,
      science_mark: 91,
      history_mark: 88,
      english_mark: 90,
    },
  ];

  return (
    <div>
      <LineChart
        width={900}
        height={600}
        data={studentMarks}
        margin={{
          top: 5,
          right: 30,
          left: 100,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type={"monotone"} dataKey={"math_mark"} stroke="red"></Line>
        <Line type={"monotone"} dataKey={"science_mark"} stroke="green"></Line>
        <Line type={"monotone"} dataKey={"history_mark"} stroke="yellow"></Line>
        <Line type={"monotone"} dataKey={"english_mark"} stroke="blue"></Line>
      </LineChart>
    </div>
  );
};

export default ReactRechart;
