import { Button, Layout } from "antd";
import { useAppSelector } from "@store/config";
import SocialLoginButtonGroup from "@components/common/Header/SocialLogin/SocialLoginButtonGroup";
import React, { Dispatch, SetStateAction } from "react";
import LoginInfoGroup from "@components/common/Header/LoginInfo/LoginInfoGroup";
import { MenuOutlined } from "@ant-design/icons";

const { Header: HeaderLayout } = Layout;

interface HeaderProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setSidebarOpen }: HeaderProps) => {
  const userSelector = useAppSelector((state) => state.commonSlice.user);

  return (
    <HeaderLayout
      style={{
        background: "#000",
        color: "#fff",
        display: "flex",
        paddingRight: "12px",
        position: "fixed",
        width: "100%",
        height: "64px",
        top: 0,
        left: 0,
      }}
    >
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setSidebarOpen((prev) => !prev)}
        style={{
          fontSize: "16px",
          width: "20px",
          height: "100%",
          color: "#fff",
        }}
        role={"SidebarToggle"}
      />
      <div className={"flex-1"} />
      {userSelector.profileId === "" ? (
        <SocialLoginButtonGroup />
      ) : (
        <LoginInfoGroup />
      )}
    </HeaderLayout>
  );
};

export default Header;
