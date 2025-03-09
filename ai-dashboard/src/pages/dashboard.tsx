import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../features/dashboard/dashboardSlice";
import Sidebar from "../components/layout/Sidebar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.data);

  useEffect(() => {
    dispatch(setData([{ name: "AI Report 1", value: 75 }]));
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name} - {item.value}%</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
