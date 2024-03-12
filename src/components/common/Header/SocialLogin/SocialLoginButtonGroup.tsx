import KakaoLoginButton from "@components/common/Header/SocialLogin/KakaoLoginButton";
import NaverLoginButton from "@components/common/Header/SocialLogin/NaverLoginButton";

const SocialLoginButtonGroup = () => {
  return (
    <div className={"flex flex-row my-3 leading-none text-base font-bold"}>
      <KakaoLoginButton />
      <NaverLoginButton />
    </div>
  );
};

export default SocialLoginButtonGroup;
