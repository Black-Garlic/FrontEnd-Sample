import { useAppSelector } from "@store/config";

const LoginUserInfo = () => {
  const userSelector = useAppSelector((state) => state.commonSlice.user);

  return (
    <div className="flex flex-col px-4 rounded-lg text-white">
      <div className={"flex-1"} />
      {userSelector.nickname}
      <div className={"flex-1"} />
    </div>
  );
};

export default LoginUserInfo;
