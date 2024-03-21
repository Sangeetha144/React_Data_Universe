import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './MetrixCard.css'
function CustomCard({ title, imageSrc, value, color, headcolor }) {
    return (
      <Card sx={{ width: 200, height: 95, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', marginBottom: 3 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '90%', padding: 0 }}>
          <Box sx={{ backgroundColor: headcolor, padding: 1, margin: 0, height: '18px' }}>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'start', marginBottom: 1 }}>{title}</Typography>
          </Box>
          <Box sx={{ display: 'flex', fontWeight: 'bold',alignItems: 'center', justifyContent:'space-between', padding: 2,color:'white',fontSize:'25px', backgroundColor: color, height: '50px' }}>
            <img src={imageSrc} alt="icon" height="37px" />
            <Typography sx={{ fontWeight: 'bold' }}>{value}</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
  
  
  
  
  
  
  
  

function MetrixCard() {
  return (
   
      <div className="card-container">
        <CustomCard title="Active Users" imageSrc="/assets/cardimg/Group 399.png" value={1000} color="rgb(225, 225, 132)" headcolor="rgb(239, 243, 207)" />
        <CustomCard title="Active Product" imageSrc="/assets/cardimg/Group-1.png" value={9} color="rgb(127, 175, 184)" headcolor="rgb(194, 222, 228)" />
        <CustomCard title="Frequently Used Product" imageSrc="/assets/cardimg/Group 422.png" value="Vendormate" color="rgb(66, 190, 155)" headcolor="rgb(165, 243, 221)" />
        <CustomCard title="Minimal Used Product" imageSrc="/assets/cardimg/Group.png" value="E-Pay" color="rgba(32, 217, 241, 0.936)" headcolor="rgb(191, 245, 245)"/>
      </div>
    
  );
}

export default MetrixCard;
