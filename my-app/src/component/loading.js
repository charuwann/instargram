import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function Loading({...props}) {
  return (<LinearProgress variant="indeterminate" sx={{height: "100%", width: "100%", ...props}}/>);
}

export default Loading;