import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import LogoutButton from "@components/common/Header/LoginInfo/LogoutButton";
import ConfigButton from "@components/common/Header/LoginInfo/ConfigButton";

const items: MenuProps["items"] = [
  { label: <ConfigButton />, key: "0" },
  { label: <LogoutButton />, key: "1" },
];

const ConfigMenu = () => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className={"flex flex-col w-8 h-full"}>
        <SettingOutlined className={"w-8 h-full my-1 text-xl"} />
      </div>
    </Dropdown>
  );
};

export default ConfigMenu;
