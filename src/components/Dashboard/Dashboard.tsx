import ConnectedDevice from "../ConnectedDevice/ConnectedDevice";
import MusicCard from "../MusicCard/MusicCard";
import Sidebar from "../Sidebar/Sidebar";
import WeatherCard from "../WeatherCard/WeatherCard";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#F0F0F0] w-full h-full min-h-screen fixed top-0">
        <div className="fixed left-0 top-0 w-[3.75rem] z-50">
          <Sidebar />
        </div>
        <div className="ml-[3.75rem] bg-white sticky top-0 z-30">TopNab</div>
        <div className="ml-[15.625rem] mr-[0.94rem] my-[0.94rem]">
          <div className="flex gap-4">
            <ConnectedDevice />
            <MusicCard />
            <WeatherCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
