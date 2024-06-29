const DummyBox = ({ len }) => {
  return (
    <div
      className={`lg:w-[1200px]  grid sm:grid-cols-3 grid-cols-2 gap-4 ml-6 lg:mx-auto lg:grid-cols-7 relative  justify-evenly  mt-8 overflow-hidden"`}
    >
      {Array.from({ length: len }).map((_, index) => (
        <div className="flex-col mx-auto justify-center items-center flex">
          <div
            className="  bg-gray-500 m-3 rounded-md w-[120px] h-[120px] "
            key={index}
          ></div>
          <div className="w-[120px] h-[10px] rounded-sm bg-gray-400"></div>
        </div>
      ))}
    </div>
  );
};

export default DummyBox;
