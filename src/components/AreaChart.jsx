import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

const AreaChart = ({ isDashboard = false }) => {
  const chartRef = useRef(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const getChartOptions = (mode) => ({
      title: {
        text: "Stacked Area Chart",
        textStyle: {
          color: colors.grey[100],
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        show: !isDashboard,
        top: isDashboard ? null : "40px",
        textStyle: {
          color: colors.grey[100],
        },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: isDashboard ? "0%" : "3%",
        right: isDashboard ? "0%" : "4%",
        bottom: isDashboard ? "0%" : "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: colors.grey[100],
            },
          },
          axisLabel: {
            color: colors.grey[100],
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          show: !isDashboard,
          axisLine: {
            lineStyle: {
              color: colors.grey[100],
            },
          },
          axisLabel: {
            color: colors.grey[100],
          },
        },
      ],
      series: [
        {
          name: "Email",
          type: "line",
          smooth: true,
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
          label: {
            show: false,
            position: "top",
            color: colors.grey[100], // 값 라벨 색상 변경
          },
        },
        {
          name: "Union Ads",
          type: "line",
          smooth: true,
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
          label: {
            show: false,
            position: "top",
            color: colors.grey[100], // 값 라벨 색상 변경
          },
        },
        {
          name: "Video Ads",
          type: "line",
          smooth: true,
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
          label: {
            show: false,
            position: "top",
            color: colors.grey[100], // 값 라벨 색상 변경
          },
        },
        {
          name: "Direct",
          type: "line",
          smooth: true,
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
          label: {
            show: false,
            position: "top",
            color: colors.grey[100], // 값 라벨 색상 변경
          },
        },
        {
          name: "Search Engine",
          type: "line",
          smooth: true,
          stack: "Total",
          label: {
            show: true,
            position: "top",
            color: colors.grey[100], // 값 라벨 색상 변경
          },
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    });

    chartInstance.setOption(getChartOptions(theme.palette.mode));

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, [theme.palette.mode, isDashboard]);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: isDashboard ? "100%" : "400px" }}
    ></div>
  );
};

export default AreaChart;
