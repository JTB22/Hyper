import { useState } from "react";
import Lorem from "./components/lorem";
import "./App.css";
import HeaderComp from "./components/header";
import FooterComp from "./components/footer";
import { Routes, Route } from "react-router-dom";
import { Button, Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: "125px",
  background: "linear-gradient(90deg, #3f5efb 0%, #f85576 100%)",
};
const contentStyle = {
  position: "absolute",
  top: "125px",
  width: "100%",
  height: "calc(100% - 150px)",
  overflow: "auto",
  display: "flex",
  background: "linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%)",
  flexDirection: "column",
  alignItems: "center",
  scrollbarWidth: "none",
  fontFamily: '"Gloria Hallelujah", cursive',
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  height: "25px",
  background: "#72cbfd",
};

function App() {
  const [runs, setRuns] = useState(1);

  function incrementRuns() {
    setRuns((runs) => runs + 1);
  }

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        {/* <div className="app"> */}
        <Header style={headerStyle}>
          <HeaderComp />
        </Header>

        <Content style={contentStyle}>
          <Button type="primary" onClick={incrementRuns}>
            {" "}
            Increment runs - {runs}{" "}
          </Button>
          <Routes>
            <Route path="/" element={null}>
              <Route index element={<Lorem runs={runs} lorem={true} />} />
              <Route path="login" element={<Lorem runs={1} lorem={false} />} />
              <Route path="about" element={<Lorem runs={1} lorem={false} />} />
            </Route>
          </Routes>
        </Content>
        <Footer style={footerStyle}>
          <FooterComp />
        </Footer>
      </Layout>
    </Space>
  );
}

export default App;
