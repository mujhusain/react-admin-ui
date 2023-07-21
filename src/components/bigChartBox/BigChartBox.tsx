import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./bigChartBox.scss";

const data = [
    {
      name: 'Sun',
      Electronics: 4000,
      Books: 2400,
      Cloths: 2400,
    },
    {
      name: 'Mon',
      Electronics: 3000,
      Books: 1398,
      Cloths: 2210,
    },
    {
      name: 'Tue',
      Electronics: 2000,
      Books: 9800,
      Cloths: 2290,
    },
    {
      name: 'Wed',
      Electronics: 2780,
      Books: 3908,
      Cloths: 2000,
    },
    {
      name: 'Thu',
      Electronics: 1890,
      Books: 4800,
      Cloths: 2181,
    },
    {
      name: 'Fri',
      Electronics: 2390,
      Books: 3800,
      Cloths: 2500,
    },
    {
      name: 'Sat',
      Electronics: 3490,
      Books: 4300,
      Cloths: 2100,
    },
  ];
const BigChartBox=()=>{
    return <div className="bigChartBox">
            <h1 className="title">Revenue Analytics</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Books" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Cloths" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
}

export default BigChartBox;