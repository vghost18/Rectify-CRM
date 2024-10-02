import { Skeleton } from "antd";

export const AccordionHeaderSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 24px",
        borderBottom: "1px solid #8C8989",
      }}
    >
      <Skeleton.Avatar size="small" shape="square" />
      <Skeleton.Input size="small" block style={{ height: "22px" }} />
    </div>
  );
};
