import React from "react";

const NaverLoginButton = () => {
  return (
    <button
      className="flex-1 bg-green-700 mx-2 px-4 rounded-lg text-white hover:bg-green-800 sm:px-8"
      onClick={() => {
        window.location.href = `${process.env.REACT_APP_NAVER_LOGIN_URL}?response_type=code&client_id=QFFsYU8VNMIuYM3M5UKi&state=false&redirect_uri=${process.env.REACT_APP_LOGIN_REDIRECT}/naver`;
      }}
    >
      네이버 로그인
    </button>
  );
};

export default NaverLoginButton;
