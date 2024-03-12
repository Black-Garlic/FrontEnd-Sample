const ConfigButton = () => {
  return (
    <button
      className="flex-1 w-full px-4 py-2 rounded-lg text-main text-base text-center"
      onClick={() => console.log("config")}
    >
      설정
    </button>
  );
};

export default ConfigButton;
