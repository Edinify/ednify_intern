import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FeedbackTeacher from "../../components/FeedbackTeacher";
import { useTranslation } from "react-i18next";
import "./../../i18n.js";
import "./feedbacks.scss";
import FeedbackStudent from "../../components/FeedbackStudent";
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

const Feedbacks = () => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }} className="main-panel">
        <Box sx={{ borderBottom: 1, border: "none" }} className="tab-header">
          <div className="tab-container">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label={t("Teacher")}
                {...a11yProps(0)}
                className={`${
                  value == 0 ? "active-tabS" : "inactive-tabS"
                } tab-element col-1`}
              />
              <Tab
                label={t("Student")}
                {...a11yProps(1)}
                className={`${
                  value == 1 ? "active-tabS" : "inactive-tabS"
                } tab-element col-1`}
              />
            </Tabs>
          </div>
        </Box>
        <Box className="tab-wrapper">
          <div className="tab-containerS">
            <CustomTabPanel value={value} index={0} className="tab-panel">
              <FeedbackTeacher />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className="tab-panel">
              <FeedbackStudent />
            </CustomTabPanel>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Feedbacks;
