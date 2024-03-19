import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CloseIcon from '@mui/icons-material/Close';

const actions = [
  { image: '/assets/supporticons/icon1.png', name: 'Documentation' },
  { image: '/assets/supporticons/icon5.png', name: 'FAQ' },
  { image: '/assets/supporticons/icon3.png', name: 'Help' },
  { image: '/assets/supporticons/icon4.png', name: 'Take a Tour' },
];

function Support() {
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState('/assets/supporticons/icon2.png');

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    setIcon((prevIcon) => open ? '/assets/supporticons/icon2.png' :'/assets/supporticons/icon6.png');
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<img src={icon} alt="icon" style={{ width: 24, height: 24 }} />}
        onClick={handleClick}
        open={open}
        TooltipProps={{ style: { color: 'white', backgroundColor: 'black' } }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={<img src={action.image} alt={action.name} style={{ width: 24, height: 24 }} />}
            tooltipTitle={action.name}
            
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default Support;
