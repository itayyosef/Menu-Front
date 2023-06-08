import React from 'react'
import '../App.css'
import { Button, Typography ,Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ForkKnife from '../images/ForkKnifeIcon.png'
import ShopBagIcon from '../images/ShopBagIcon.png'

function Mainpage() {
  return (
    <div className='bg'>
      <div className='content'>
        <Typography variant='h5' mt={3} sx={{color:'red',fontWeight:"bold"}}>Quick Restaurant</Typography>
        </div>
        <Typography className='content' variant='h5' mt={17} sx={{color:'white',fontWeight:"bold"}}>Skip the line &</Typography>
        <Typography className='content' variant='h2' sx={{color:'red',fontWeight:"bold"}}>ORDER</Typography>
        <Typography className='content' variant='h1' sx={{color:'red',fontWeight:"bold"}}>HERE</Typography>
        <Typography className='content' variant="h6" mt={30} sx={{fontWeight:'bold',color:'white',mb:'3px'}}>
            Welcome , how can we serve you today?
        </Typography>
      <Box className='content'>
        <Button variant="">
            <Link to="/category/1" 
              style={{
                color:'black',
                backgroundColor:'white',
                width:'450px',
                border:'1px solid white',
                borderRadius:"15%"}}>
                <span style={{float:'left',marginLeft:"5px"}}>
                  <img src={ForkKnife} alt="fork icon" className="icons"/>
                </span>
                <span style={{fontSize:'30px',float:'left',marginLeft:'10px',fontWeight:"bold"}}>Eat in</span>
                <span style={{fontSize:'30px',float:'right',marginRight:'20px'}}>{"> "}</span>
            </Link>
        </Button>
      </Box>
      <Box className='content'>
        <Button variant="">
            <Link to="/category/1" 
              style={{
                color:'black',
                backgroundColor:'white',
                width:'450px',
                border:'1px solid white',
                borderRadius:"15%"}}>
                <span style={{float:'left',marginLeft:"5px"}}>
                  <img src={ShopBagIcon} alt="bag icon" className="icons"/>
                </span>
                <span style={{fontSize:'30px',float:'left',marginLeft:'10px',fontWeight:"bold"}}>TAKE OUT</span>
                <span style={{fontSize:'30px',float:'right',marginRight:'20px'}}>{"> "}</span>
            </Link>
        </Button>
      </Box>
      </div>  
  );
}

export default Mainpage