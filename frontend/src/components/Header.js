import {
  Layout,
  Divider,
  Row,
  Col,
  Image,
  Space,
  Dropdown,
  Menu,
  Input,
  Select,
  Button,
  Typography,
} from "antd";
import { DownOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React from "react";

const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);

const watchlist = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);

const HeaderPage = () => (
  <>
  <Row>
    <Col span={24}>
    <div className="site-layout bottom-border">
      <div className="space-align-container space-between site-layout-background">
        <div className="flex-start padding-left">
          <Space align="center" size={"large"}>
            <Typography className="mock-block flex-start">
              Hi! <Link to='/login'>Sign in</Link> or <Link to='/register'>register</Link>{" "}
            </Typography>
            <Typography className="mock-block flex-start">
              <Link to="#" style={{ color: "black" }}>
                Daily Deals
              </Link>
            </Typography>
            <Typography className="mock-block flex-start">
              <Link to="#" style={{ color: "black" }}>
                Help & Contact
              </Link>{" "}
            </Typography>
          </Space>
        </div>
        <div className="flex-end padding-right">
          <Space align="center" size={"middle"}>
            <Typography className="mock-block flex-end">
              {" "}
              <Space>
                <Link to="#" style={{ color: "black" }}>
                  Ship To
                </Link>
              </Space>
            </Typography>

            <Typography className="mock-block flex-end">
              <Space>
                <Link to="#" style={{ color: "black" }}>
                  Sell
                </Link>{" "}
              </Space>
            </Typography>

            <Dropdown overlay={watchlist} className="mock-block flex-end">
              <Link
                onClick={(e) => e.preventDefault()}
                style={{ color: "black" }}
              >
                <Space>
                  Watchlist
                  <DownOutlined />
                </Space>
              </Link>
            </Dropdown>
          </Space>
        </div>
      </div>
    </div>
    </Col>
    <Col span={24} className="gutter-row">
    <Row className="padding-bottom-header" gutter={24} style={{backgroundColor:'white'}}>
      <Col span={8} className="gutter-row" push={1}>
        <Row gutter={8}>
          <Space>
            <Image
              width={100}
              height={30}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Dropdown overlay={menu}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Space>
                  Shop by Category
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </Row>
      </Col>
      <Col span={14} className="gutter-row" pull={2}>
        <Space.Compact block>
          <Input
            size={"large"}
            placeholder="Search for anything"
            prefix={<SearchOutlined />}
          />
          <Select defaultValue="Zhejiang" allowClear>
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Space.Compact>
      </Col>
      <Col span={2} className="gutter-row"  pull={2}>
        <Button type="primary" size="normal">
          Search
        </Button>
      </Col>
    </Row>
    </Col>
    </Row>
  </>
);
export default HeaderPage;
