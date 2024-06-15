import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import graph from "../data/les-miserables.json";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const NetworkChart = ({ isDashboard = false }) => {
  const chartRef = useRef(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    myChart.showLoading();

    if (graph && graph.categories && graph.nodes && graph.links) {
      myChart.hideLoading();

      const option = {
        title: {
          text: "Network Chart (Ranking)",
          textStyle: {
            color: colors.grey[100], // title color
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        legend: [
          {
            show: !isDashboard,
            textStyle: {
              color: colors.grey[100],
            },
            data: graph.categories.map((a) => a.name),
          },
        ],
        grid: {
          top: "10%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        series: [
          {
            name: "Les Miserables",
            type: "graph",
            layout: "none",
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              show: true,
              position: "right",
              formatter: "{b}",
            },
            labelLayout: {
              hideOverlap: true,
            },
            scaleLimit: {
              min: 0.4,
              max: 2,
            },
            lineStyle: {
              color: "source",
              curveness: 0.3,
            },
          },
        ],
      };

      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        myChart.dispose();
      };
    } else {
      console.error(
        "Error: Graph data is undefined or does not have the expected structure."
      );
    }
  }, [colors.grey, isDashboard]);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: isDashboard ? "100%" : "500%" }}
    ></div>
  );
};

export default NetworkChart;
