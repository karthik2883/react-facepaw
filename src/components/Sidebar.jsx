import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import {Inbox, Drafts} from '@mui/icons-material'

export const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box sx={{position:"fixed"}}>
       <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
</Box>
    </Box>
  )
}
