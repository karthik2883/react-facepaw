import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {Pets} from "@mui/icons-material"
import MailIcon from '@mui/icons-material/Mail'; 
import { Box } from '@mui/system';

const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});
const Search = styled("div")(({theme })=>({
 backgroundColor:"white",
 padding:"0 10px",
 borderRadius: theme.shape.borderRadius,
 width:"40%"  

}));
const Icons = styled( Box )(({theme })=>({
    display:"flex",
    gap:"20px",
    alignContent:"center"
      
     
}));  
export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>PAWBOOK</Typography>
        <Pets  sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase  placeholder='...search   '/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon   />
          </Badge>
          <Avatar sx={{width:"30px",height:"30px"}} src="./../assets/i.jpeg" />
         </Icons> 
    </StyledToolBar>
    </AppBar> 
  )
}
