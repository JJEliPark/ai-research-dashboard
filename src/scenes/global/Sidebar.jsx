import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { ReactComponent as NetworkIcon } from "../../assets/network-chart.svg";
import { ReactComponent as AreaChartOutlinedIcon } from "../../assets/area-chart.svg";
import { ReactComponent as ChordOutlinedIcon } from "../../assets/chord-diagram.svg";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import InfoIcon from "@mui/icons-material/Info";
import "react-pro-sidebar/dist/css/styles.css";
import "../../App.css"; // 애니메이션을 위한 CSS 파일

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === to}
      style={{ color: colors.mainBlue[600] }}
      onClick={() => setSelected(to)}
      icon={icon}
      className="menu-item"
    >
      <Typography variant="h6">{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const handleToggle = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setIsCollapsing(true);
      setTimeout(() => setIsCollapsing(false), 300);
    } else {
      setIsCollapsed(true);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        "& .pro-sidebar-inner": {
          background: `${colors.mainBlue[200]} !important`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#E1E2FE !important",
        },
        "& .pro-menu-item.active": {
          color: `${colors.mainBlue[200]} !important`,
          backgroundColor: `#FFFFFF !important`,
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        className={`${isCollapsed ? "" : "expanded"} ${
          isCollapsing ? "collapsing" : ""
        }`}
        style={{ height: "100vh", position: "relative" }}
      >
        <Menu iconShape="square">
          {/*LOGO AND MENU ICON*/}
          <MenuItem
            onClick={handleToggle}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "0 0 20px 0", color: colors.mainBlue[600] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h7" color={colors.mainBlue[600]}>
                  2024
                </Typography>
                <IconButton
                  onClick={handleToggle}
                  style={{ color: colors.mainBlue[600] }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <MenuItem>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <a
                    href="https://snu-viba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      alt="profile-user"
                      weight="100px"
                      height="100px"
                      src={`../../assets/vivalogo.png`}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </a>
                </Box>
              </MenuItem>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[800]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Visualization
                </Typography>
                <Typography variant="h5" color={colors.grey[800]}>
                  pkmon1d@snu.ac.kr
                </Typography>
              </Box>
            </Box>
          )}
          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Divider sx={{ borderColor: colors.mainBlue[600] }} />
            <Typography
              variant="h5"
              color={colors.grey[800]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Dataset"
              to="/data"
              icon={<FolderCopyIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Methodology"
              to="/methods"
              icon={<PrecisionManufacturingIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Divider sx={{ borderColor: colors.mainBlue[600] }} />
            <Typography
              variant="h5"
              color={colors.grey[800]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Chord Chart"
              to="/chord"
              icon={<ChordOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bubble Chart"
              to="/bubble"
              icon={<BubbleChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bump Chart"
              to="/bump"
              icon={<SsidChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Area Chart"
              to="/area"
              icon={<AreaChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Network Chart"
              to="/network"
              icon={<NetworkIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Divider sx={{ borderColor: colors.grey[800] }} />
            <Item
              title="About"
              to="/about"
              icon={<InfoIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
