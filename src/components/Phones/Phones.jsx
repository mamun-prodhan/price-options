import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
      });
  }, []);
  return (
    <div className="mb-12">
      <h2>phones</h2>
      <BarChart
        margin={{
          top: 5,
          right: 30,
          left: 100,
          bottom: 5,
        }}
        width={900}
        height={600}
        data={phones}
      >
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <Tooltip></Tooltip>
        <YAxis datakey="price"></YAxis>
      </BarChart>
    </div>
  );
};

export default Phones;
