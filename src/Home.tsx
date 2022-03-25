import type React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import {
  Avatar, Button, Paper, Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { solutionDescriptions } from './Solution';

export const Home: React.FunctionComponent = () => (
  <>
    <Typography
      variant="h3"
      sx={{
        textAlign: 'center', fontWeight: 600, textTransform: 'uppercase', padding: 5,
      }}
    >
      Choosing the right database for your serverless stack is just a few clicks away!
    </Typography>
    <Stack sx={{ padding: 5, justifyContent: 'space-around' }}>
      <Button component={Link} to="/builder" variant="contained" size="large">
        Try it now
      </Button>
    </Stack>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        columnGap: 5,
        rowGap: 10,
      }}
    >
      {Object.entries(solutionDescriptions).map(([_, { name, src }]) => (
        <Paper elevation={8}>
          <Avatar
            alt={name}
            src={src}
            variant="rounded"
            sx={{ height: 80, width: 80, margin: 1 }}
          />
        </Paper>
      ))}
    </Box>
  </>
);
