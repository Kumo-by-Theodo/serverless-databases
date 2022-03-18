import type React from 'react';
import Box from '@mui/material/Box';
import { solutionDescriptions } from './Solution';
import { Avatar, Paper } from '@mui/material';

export const Home: React.FunctionComponent = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                columnGap: 10,
                rowGap: 10,
                marginTop: 10,
            }}
        >
            {Object.entries(solutionDescriptions).map(([_, {name, src}]) => {
                return (
                    <Paper elevation={8}>
                        <Avatar
                            alt={name}
                            src={src}
                            variant="rounded"
                            sx={{ height: 120, width: 120, margin: 1 }}
                        />
                    </Paper>
                )
            })}
        </Box>
    )
}
