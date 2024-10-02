import { useState } from "react";
import { useCustom } from "@refinedev/core";
import { Col, Row, Button } from "antd";

import {
  CalendarUpcomingEvents,
  DashboardDealsChart,
  DashboardLatestActivities,
  DashboardTotalCountCard,
} from "./components";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "./queries";
import BulbOutlined from "@ant-design/icons/lib/icons/BulbOutlined";

export const DashboardPage = () => {
  const { data, isLoading } = useCustom({
    url: "",
    method: "get",
    meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY },
  });

  const [bgColor, setBgColor] = useState("#9DC3C8A9"); // Initial background color is white

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="page-container" style={{ backgroundColor: bgColor }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="companies"
            isLoading={isLoading}
            totalCount={data?.data.companies.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="contacts"
            isLoading={isLoading}
            totalCount={data?.data.contacts.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="deals"
            isLoading={isLoading}
            totalCount={data?.data.deals.totalCount}
          />
        </Col>
      </Row>

      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
          }}
        >
          <CalendarUpcomingEvents />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: "460px",
          }}
        >
          <DashboardDealsChart />
        </Col>
      </Row>

      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col xs={24}>
          <DashboardLatestActivities />
        </Col>
      </Row>

      <Button
  type="primary"
  style={{ position: "fixed", bottom: 16, right: 16 }}
  onClick={() => changeBackgroundColor("#000E134D")} // Change to your desired color
  icon={<BulbOutlined />} // Add the icon component
>
  ^
</Button>
    </div>
  );
};
