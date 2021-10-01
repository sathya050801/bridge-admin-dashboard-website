import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import Calendar from "../../components/widgetSm/calendar";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Calendar/>
      <Chart data={userData} title="Results" grid dataKey="Active User"/>
        
    </div>
  );
}
