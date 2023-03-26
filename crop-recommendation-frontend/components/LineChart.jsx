import { Line } from "react-chartjs-2";
export const LineChart = ({ chartData }) => {
  return (
    <div
      style={{ width: "70%", display: "block", margin: "0 auto" }}
      className="chart-container"
    >
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Line Chart",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
