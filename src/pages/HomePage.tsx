import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout, Button, Typography, Space } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import "../styles/HomePage.css";
import { useState } from "react";
import Image from "../images/NikeShoe.jpg";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const queryClient = new QueryClient();

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout className="layout">
        <Header className="header">
          <div className="header-content">
            <Typography.Title level={3} className="logo">
              <i>NIKE</i>
            </Typography.Title>

            <Space className="nav-links">
              <Button type="link" className="nav-link">
                <Link to="/products">Products</Link>
              </Button>
              <Button type="link" className="nav-link">
                About
              </Button>
              <Button type="link" className="nav-link">
                Contact
              </Button>
              {isLoggedIn ? (
                <Button
                  className="auth-button"
                  icon={<LogoutOutlined />}
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  className="auth-button"
                  icon={<LoginOutlined />}
                  onClick={() => setIsLoggedIn(true)}
                >
                  Login
                </Button>
              )}
            </Space>
          </div>
        </Header>

        <Content className="content">
          <div className="hero-section">
            <div className="hero-text">
              <Typography.Title level={1}>
                <i>Be on TREND</i>
              </Typography.Title>
              <Typography.Paragraph className="hero-description">
                Experience the latest innovations in athletic footwear and
                apparel.
                <br />
                <br />
                Need new trendy shoes? We have got you covered!
              </Typography.Paragraph>
              <Button type="primary" className="cta-button">
                Explore Products
              </Button>
            </div>
            <div className="hero-image-container">
              <img src={Image} alt="Nike Shoe" className="hero-image" />
            </div>
          </div>
        </Content>

        <Footer className="footer">
          <Typography.Text className="footer-text">
            &copy; 2023 Nike, Inc. All Rights Reserved
          </Typography.Text>
        </Footer>
      </Layout>
    </QueryClientProvider>
  );
}

export default HomePage;
