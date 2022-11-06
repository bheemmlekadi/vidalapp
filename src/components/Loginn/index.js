// import Home from '../Home';
import * as React from 'react'
import {Component} from 'react'
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

class Loginn extends Component {
    state = {
       policyNum: '',
       tpaId: '',
       showPolicyNumError: false,
       showTpaIdError: false,
       isFormSubmitted: false,
   }





    onBlurTpaId = () => {
        const isValidTpaId = this.validateTpaId()
    
        this.setState({showTpaIdError: !isValidTpaId})
      }

    onChangeTpaId=  event => {
        const {target} = event
        const {value} = target
    
        this.setState({
          tpaId: value,
        })
      }




    onBlurPolicyNum = () => {
        const isValidPolicyNum = this.validatePolicyNum()
    
        this.setState({showPolicyNumError: !isValidPolicyNum})
      }

    onChangePolicyNum=  event => {
        const {target} = event
        const {value} = target
    
        this.setState({
            policyNum: value,
        })
      }

    validateTpaId = () => {
        const {showTpaIdError} = this.state
    
        return showTpaIdError !== ''
      }
    
      validatePolicyNum = () => {
        const {showPolicyNumError} = this.state
    
        return showPolicyNumError !== ''
      }
    
      onClickSubmit = event => {
        const {showPolicyNumError,showTpaIdError,isFormSubmitted} = this.state
        event.preventDefault()
        const isValidPolicyNum = this.validatePolicyNum()
        const isValidTpaId = this.validateTpaId()
    
        if (isValidPolicyNum && isValidTpaId) {
          this.setState({isFormSubmitted: true})
        } else {
          this.setState({
            showPolicyNumError: !showPolicyNumError,
            showTpaIdError: !showTpaIdError,
            isFormSubmitted: false,
          })
        }
      }



   handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
   card =  (
    <React.Fragment>
      <CardContent>
        <div className="user-label">
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom mr={2} size='small'>
            UserName:
          </Typography>
          <TextField size='small' 
          value={policyNum}
          onChange={this.onChangePolicyNum}
          onBlur={this.onBlurPolicyNum} required/>
        </div>
       </CardContent>
     </React.Fragment>
  )
    ;
 
   card1 = (
    <React.Fragment>
      <CardContent>
        <div className="user-label">
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom mr={2} size='small'>
           UserName:
          </Typography>
          <TextField size='small'   value={tpaId}
          onChange={this.onChangeTpaId}
          onBlur={this.onBlurTpaId}  required/>
        </div>
      </CardContent>
    </React.Fragment>
  );
 
  render() {
    const {isFormSubmitted} = this.state

    return (
        <div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered textColor="secondary">
          <Tab label="Policy No."  />
          <Tab label="Vidal Health Insurance TPA Id."/>
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
    <Button variant="outlined"  onClick={this.onClickSubmit}>Submit</Button>
    <p>Note : Please do not use Corporate ID to login </p>
    </div>
    )
  }
    

}

export default Loginn;