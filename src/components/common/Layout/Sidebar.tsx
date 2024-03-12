import { Dispatch, SetStateAction, useCallback } from "react";
import { Layout, Menu, Button } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { MenuOption } from "@typings/Option";
import { Link, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const MENU_OPTIONS: MenuOption[] = [
  {
    label: "복수",
    value: "복수",
    url: "/multi",
    children: [
      { label: "목록", value: "목록", url: "/list" },
      { label: "상세", value: "상세", url: "/detail" },
    ],
  },
  {
    label: "단일",
    value: "단일",
    url: "/single",
  },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ sidebarOpen }: SidebarProps) => {
  const navigate = useNavigate();

  const generateMenuList = useCallback(() => {
    return MENU_OPTIONS.map((menu, index) => {
      if (menu.children) {
        return {
          key: menu.label + "-" + index,
          label: menu.label,
          children: menu.children.map((childrenMenu) => ({
            key: childrenMenu.label + "-" + index,
            label: (
              <Link to={menu.url + childrenMenu.url}>{childrenMenu.label}</Link>
            ),
          })),
        };
      } else {
        return {
          key: menu.label + "-" + index,
          label: <Link to={menu.url}>{menu.label}</Link>,
        };
      }
    });
  }, []);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={!sidebarOpen}
      collapsedWidth={0}
      style={{
        overflow: "auto",
        width: "150px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: "64px",
        bottom: 0,
      }}
    >
      <Button
        type="text"
        icon={<HomeFilled />}
        onClick={() => navigate("/")}
        style={{
          fontSize: "16px",
          width: "100%",
          height: 64,
          color: "#fff",
        }}
      />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={generateMenuList()}
      />
    </Sider>
  );
};

export default Sidebar;
