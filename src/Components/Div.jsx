import React from "react";

const Div = (props) => {
  const isClickable = props.status === "Live";
  const isEnded = props.status === "Ended";
  const isTomorrowOrFuture = !isClickable && !isEnded;
  const isToday = props.status === "Today";

  return (
    <div className="m-2  flex justify-center">
      <div className="bg-orange-400 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
        <div className="m-2  flex justify-center">
          <div className="flex items-center justify-center space-x-4">
            <img src={kkr} alt="Logo" className="h-12 w-12" />
            <div>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Match
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                KKR VS SRH
              </p>
            </div>
            <img src={srh} alt="Logo" className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div;
