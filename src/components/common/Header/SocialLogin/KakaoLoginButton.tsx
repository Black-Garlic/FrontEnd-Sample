import React from "react";

const KakaoLoginButton = () => {
  return (
    <button
      className="flex-1 bg-yellow-500 mx-2 px-4 rounded-lg text-white hover:bg-yellow-600 sm:px-8"
      onClick={() => {
        window.location.href = `${process.env.REACT_APP_KAKAO_LOGIN_URL}?response_type=code&client_id=e9d8e4ea12468e4367d48d60a41e3716&redirect_uri=${process.env.REACT_APP_LOGIN_REDIRECT}/kakao`;
      }}
    >
      카카오 로그인
    </button>
  );
};

export default KakaoLoginButton;
