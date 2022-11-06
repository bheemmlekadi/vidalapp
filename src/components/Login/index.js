import * as React from 'react';
// import Home from '../Home';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


import './index.css';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Login () {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const submit=()=>{
    if(1===''){
        alert("Please enter username")
    }
  }
  
  const card = (
    <React.Fragment>
      <CardContent>
        <div className="user-label">
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom mr={2} size='small'>
            UserName:
          </Typography>
          <TextField size='small' />
        </div>
       </CardContent>
     </React.Fragment>
  );
 
  const card1 = (
    <React.Fragment>
      <CardContent>
        <div className="user-label">
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom mr={2} size='small'>
           UserName:
          </Typography>
          <TextField size='small'    />
        </div>
      </CardContent>
    </React.Fragment>
  );
 
    return (
        <div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered textColor="secondary">
          <Tab label="Policy No." {...a11yProps(0)} />
          <Tab label="Vidal Health Insurance TPA Id." {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ width: 300, height: 300, }}>
            <Card variant="outlined" centered>{card1}</Card>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{  width: 300, height: 300, }}>
            <Card variant="outlined" centered>{card}</Card>
        </Box>
      </TabPanel>
      
    </Box>
    <Button variant="outlined"  onClick={submit}>Submit</Button>
    <p>Note : Please do not use Corporate ID to login </p>
    </div>
    )

}

