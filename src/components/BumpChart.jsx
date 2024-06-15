import React, { useEffect } from "react";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
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
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

const BumpChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);

    const countryNames = [
      "USA",
      "China",
      "India",
      "Japan",
      "Germany",
      "UK",
      "France",
      "Brazil",
      "Italy",
    ];
    const years = ["2001", "2002", "2003", "2004", "2005", "2006"];

    const shuffle = (array) => {
      let currentIndex = array.length;
      let randomIndex = 0;
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    };

    const generateRankingData = () => {
      const map = new Map();
      const defaultRanking = Array.from(
        { length: countryNames.length },
        (_, i) => i + 1
      );
      for (const _ of years) {
        const shuffleArray = shuffle(defaultRanking);
        countryNames.forEach((name, i) => {
          map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
        });
      }
      return map;
    };

    const generateSeriesList = () => {
      const seriesList = [];
      const rankingMap = generateRankingData();
      rankingMap.forEach((data, name) => {
        const series = {
          name,
          symbolSize: 20,
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          endLabel: {
            show: true,
            formatter: "{a}",
            distance: 20,
            color: colors.grey[100], // end label color
          },
          lineStyle: {
            width: 4,
          },
          data,
        };
        seriesList.push(series);
      });
      return seriesList;
    };

    const option = {
      title: {
        text: "Bump Chart (Ranking)",
        textStyle: {
          color: colors.grey[100], // title color
        },
      },
      tooltip: {
        trigger: "item",
      },
      grid: {
        left: 30,
        right: 110,
        bottom: 30,
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        splitLine: {
          show: true,
        },
        axisLabel: {
          margin: 30,
          fontSize: 16,
          color: colors.grey[100], // x axis label color
        },
        boundaryGap: false,
        data: years,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          margin: 30,
          fontSize: 16,
          formatter: "#{value}",
          color: colors.grey[100], // y axis label color
        },
        inverse: true,
        interval: 1,
        min: 1,
        max: countryNames.length,
      },
      series: generateSeriesList(),
    };

    myChart.setOption(option);

    window.addEventListener("resize", () => {
      myChart.resize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        myChart.resize();
      });
      myChart.dispose();
    };
  }, [theme.palette.mode, colors.grey]);

  return (
    <div
      id="main"
      style={{ width: "100%", height: isDashboard ? "100%" : "400%" }}
    ></div>
  );
};

export default BumpChart;
