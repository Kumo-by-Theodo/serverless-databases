import type { FunctionComponent } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

import { Solution as SolutionType } from "./App";
import { solutionDescriptions } from './Solution';
import { Link, List, ListItem } from '@mui/material';

export const SideNavigation: FunctionComponent = () => {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {Object.values(SolutionType).sort((a, b) => a.localeCompare(b)).map((solution) => {
            const { name, src } = solutionDescriptions[solution];
            return (
              <ListItem>
                <Link href={`#${solution}`} underline="none" color="inherit">
                  <Box display="flex" flexDirection="row">
                  <ListItemIcon>
                    <Avatar alt={name} src={src} sx={{ width: 24, height: 24 }} variant="square" />
                  </ListItemIcon>
                <ListItemText>{name}</ListItemText>
                  </Box>
                </Link>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  );
}
