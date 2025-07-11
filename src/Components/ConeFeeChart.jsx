import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Triangle bar shape
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path
      d={`M${x},${y + height}
         L${x + width / 2},${y}
         L${x + width},${y + height}
         Z`}
      stroke="none"
      fill={fill}
    />
  );
};

// Main Chart
const ConeFeeChart = ({ data }) => {
  const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FF8042", "#0EA106", "#FF6633"];

  const formattedData = data.map((lawyer) => ({
    name: lawyer.name,
    fee: parseFloat(lawyer.fee),
  }));

  if (!formattedData.length) return null;

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={400}
          data={formattedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="fee"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConeFeeChart;
