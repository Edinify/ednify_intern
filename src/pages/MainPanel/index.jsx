import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./mainPanel.scss";
import "../../styles/grid.scss";
import MainPanelTeacherTable from "../../components/MainPanelTeacherTable";
import MainPanelControls from "../../components/MainPanelControls";
import MainPanelStudentTable from "../../components/MainPanelStudentTable";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}

    {...other}
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainPanel = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);
  return (
    <>
      <div className="main-panel" >

     
       <div className="tab-header">
        <div className="tab-container">
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Teacher" {...a11yProps(0)} className={`${value==0?"active-tab":"inactive-tab"} tab-element col-1`}/>
            <Tab label="Student" {...a11yProps(1)} className={`${value==1?"active-tab":"inactive-tab"} tab-element col-1`}/>
          </Tabs>
        </div>
        </div>
        <div className="tab-wrapper">
        <div className="tab-container">
          <CustomTabPanel value={value} index={0} className="tab-panel">
          <MainPanelControls
  onApply={(filters) => {
    console.log("Apply filters:", filters);
  }}
  onClear={() => {
    console.log("Clear filters");
    
  }}
/>
        <MainPanelTeacherTable/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} className="tab-panel">
          <MainPanelControls
  onApply={(filters) => {
    console.log("Apply filters:", filters);
  }}
  onClear={() => {
    console.log("Clear filters");
    
  }}
/>
        <MainPanelStudentTable/>
          </CustomTabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPanel;
