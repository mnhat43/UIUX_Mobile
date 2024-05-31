import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import HeaderRender from 'components/header'
import SiderRender from 'components/siderbar'
import FooterRender from 'components/footer'
const { Content, Sider, Header } = Layout
import useTheme from 'hooks/useTheme'

const App = (props) => {
  //   const {
  //     token: { colorBgContainer, borderRadiusLG },
  //   } = theme.useToken();
  const theme = 'light'
  const { dark, setDark, handleDark } = useTheme();

  return (
    <Layout
      style={{
        // minHeight: '100vh',
        position: "relative",
        background: dark === "on" ? "#161c1c" : "white",
      }}
    >
      <HeaderRender style={{ zIndex: 1000 }} />
      <Layout
        style={{
          // minHeight: '100vh',
          position: "relative",
          background: dark === "on" ? "#161c1c" : "white",

        }}
      >
        {/* <SiderRender theme={theme} /> */}
        <Layout
          style={{
            // minHeight: '100vh',
            position: "relative",
            background: dark === "on" ? "#161c1c" : "white",

          }}
        >
          <Content
            style={{
              // padding: '16px 16px',
              paddingTop: "70px",
              // paddingLeft: "220px",
              paddingBottom: "70px",
              // background: dark === "on" ? "#1f1f1f" : "#ccc",
            }}
          >
            <props.component />
          </Content>
        </Layout>
      </Layout>
      <FooterRender />
    </Layout>
  )
}
export default App
