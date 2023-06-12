import { FC } from "react";
import BarChart from "../components/BarChart";

const HomePage = () => {
  const data = [
    { day: "Monday", value: 2 },
    { day: "Monday", value: 2 },
    { day: "Monday", value: 4 },
  ];
  return (
    <>
      <div className=" border-solid border-2 border-red-600 mt-5 mb-20 h-full relative">
        <BarChart data={data} height={"24"} />
      </div>
    </>
  );
};

export default HomePage;
