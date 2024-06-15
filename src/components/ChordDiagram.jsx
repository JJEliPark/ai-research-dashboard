import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { GraphChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import graph from "../data/les-miserables.json";

import { useTheme } from "@mui/material";
import { tokens } from "../theme";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphChart,
  CanvasRenderer,
]);

const ChordDiagram = ({ isDashboard = false }) => {
  const chartRef = useRef(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    myChart.showLoading();

    if (graph && graph.categories && graph.nodes && graph.links) {
      myChart.hideLoading();

      graph.nodes.forEach((node) => {
        node.label = {
          show: node.symbolSize > 30,
        };
      });

      const option = {
        title: {
          text: "Chord Diagram",
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
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "Les Miserables",
            type: "graph",
            layout: "circular",
            circular: {
              rotateLabel: true,
            },
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: "right",
              formatter: "{b}",
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
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: isDashboard ? "100%" : "500%" }}
    />
  );
};

export default ChordDiagram;
