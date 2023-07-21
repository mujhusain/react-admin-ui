import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChart.scss";

const data = [
  { name: "Electronics", value: 500, color: "#0088FE" },
  { name: "Cloths", value: 300, color: "#00C49F" },
  { name: "Accesories", value: 300, color: "#FFBB28" },
  { name: "Plants", value: 100, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by sources</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
            contentStyle={{background:"white",borderRadius:"5px"}}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item)=>
        <div className="option" key={item.name} >
            <div className="title">
                <div className="dot" style={{backgroundColor:item.color}} />
                <span className="name">{item.name}</span>
            </div>
            <span className="value">{item.value}</span>
        </div>
        )}
      </div>
    </div>
  );
};

export default PieChartBox;
