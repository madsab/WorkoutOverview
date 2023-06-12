import { FC } from "react";

interface data {
  data: {
    day: string;
    value: number;
  }[];
  width?: string;
  height?: String;
}

const BarChart: FC<data> = ({ ...props }) => {
  const widthToUse = props.width ? "w-" + props.width : "";
  const heightToUSe = props.height ? "h-" + props.height : "";
  return (
    <>
      <div
        className={`bg-[#1E4D5C] p-2 rounded-lg shadow-md shadow-black ml-4 mr-4 relative ${widthToUse} ${heightToUSe} `}
      >
        <div className={`flex bottom-2 justify-around h-full w-full`}>
          {props.data.map((c) => (
            <div className="text-sm flex flex-col justify-end items-center h-full ">
              <p
                className={`bg-blue-500 h-${c.value} w-10 justify-center flex`}
              >
                {c.value}
              </p>
              <p>{c.day}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarChart;
