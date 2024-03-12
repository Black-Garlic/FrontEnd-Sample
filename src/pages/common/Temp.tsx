import MainTemplate from "@components/common/Layout/MainTemplate";

const Temp = () => {
  return (
    <MainTemplate>
      <div>
        Temp
        {new Array(100).fill(null).map((_, index) => (
          <div key={index}>
            <br />
          </div>
        ))}
      </div>
    </MainTemplate>
  );
};

export default Temp;
