const LiveDiv = (props) => {
  return (
    <>
      <div className="m-2  flex justify-center">
        <div className="bg-orange-400 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
          <div className="flex items-center justify-center space-x-4">
            <img src={props.photo2} alt="Logo" className="h-12 w-12" />
            <div>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Match {props.match}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                {props.team1} VS {props.team2}
              </p>
            </div>
            <img src={props.photo1} alt="Logo" className="h-12 w-12" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveDiv;
