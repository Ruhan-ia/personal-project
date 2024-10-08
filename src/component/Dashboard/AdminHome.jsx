import  { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

import { PieChart, Pie, Sector, ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
const AdminHome = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    
    queryFn: async() =>{
      const res = await axiosSecure.get("/admin-stats");
      console.log(res.data)
      return res.data;
    },
  });

  const {data: chartData = []}=useQuery({
    queryKey:['order-stats'],
    queryFn: async() =>{
      const res = await axiosSecure.get('/order-stats');
      return res.data
    }
  });
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  const pieChartData = chartData.map(data =>{
    return {name: data.Brand, value: data.Revenue}
  })
  return (
    <div>
      <h2 className="text-3xl">Assalamualaikum! Welcome Back!
      {user?.displayName ? user.displayName : "back"}

      </h2>

      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.user}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Order</div>
          <div className="stat-value">{stats?.order}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.products}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
        <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Brand" />
      <YAxis dataKey="Quantity" />
      <Bar dataKey="Quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        <div className="w-1/2">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
        </div>
      </div>
    </div>  
  );
};

export default AdminHome;
