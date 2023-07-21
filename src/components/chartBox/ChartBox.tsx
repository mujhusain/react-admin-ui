import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props={
    title:string;
    icon:string;
    number:string | number;
    color:string;
    chartData:object[];
    percentage:number;
    dataKey:string;

}
const ChartBox=(props:Props)=>{
   return <div className="chartBox">
    <div className="boxInfo">
        <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
        </div>
        <h2>{props.number}</h2>
        <Link to="/" style={{color:props.color}} >View all</Link>
    </div>
    <div className="chartInfo">
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <LineChart data={props.chartData}>
            <Tooltip
            labelStyle={{display:"none"}}
            position={{x:10,y:70}}
            contentStyle={{background:"transparent",border:"none"}}
            />
          <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
        </div>
        <div className="texts">
            <span className="percentage" style={{color:props.percentage<0? "tomato":"limegreen"}} >{props.percentage}%</span>
            <span className="duration">this month</span>
        </div>
    </div>
    </div>
}

export default ChartBox;