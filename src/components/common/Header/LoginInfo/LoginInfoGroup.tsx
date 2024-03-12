import ConfigMenu from "@components/common/Header/LoginInfo/ConfigMenu";
import LoginUserInfo from "@components/common/Header/LoginInfo/LoginUserInfo";

const LoginInfoGroup = () => {
  return (
    <div className={"flex flex-row my-3 leading-none text-base font-bold"}>
      <LoginUserInfo />
      <ConfigMenu />
    </div>
  );
};

export default LoginInfoGroup;
