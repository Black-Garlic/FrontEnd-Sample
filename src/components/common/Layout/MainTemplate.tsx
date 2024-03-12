import { ReactNode, useState } from "react";
import { Layout } from "antd";
import Header from "@components/common/Layout/Header";
import Footer from "@components/common/Layout/Footer";
import Sidebar from "@components/common/Layout/Sidebar";
import { useAppSelector } from "@store/config";
import { useGetProfileQuery } from "@services/common/commonApi";

const { Content } = Layout;

const MainTemplate = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const userSelector = useAppSelector((state) => state.commonSlice.user);

  const { data: profile } = useGetProfileQuery(userSelector.profileId, {
    refetchOnMountOrArgChange: 2,
  });

  console.log(profile);

  return (
    <Layout>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Layout>
        <Header setSidebarOpen={setSidebarOpen} />

        <Content
          style={{
            margin: "24px 16px",
            marginTop: "80px",
            padding: 24,
            minHeight: 800,
            background: "#fff",
          }}
        >
          {children}
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainTemplate;
