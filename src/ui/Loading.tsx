import { ThreeDot } from "react-loading-indicators";
import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="loading">
      <ThreeDot size="small" color="var(--bg)" text="" textColor="" />
    </div>
  );
};
