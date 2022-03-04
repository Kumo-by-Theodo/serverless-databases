import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import type { FunctionComponent } from "react";
import { Solution } from "./Solution";
import { Solution as SolutionType } from "./App";
import { SideNavigation } from './SideNavigation';

export const Solutions: FunctionComponent = () => {
    return (
        <>
            <SideNavigation />
            <Stack>
                {Object.values(SolutionType).sort((a, b) => a.localeCompare(b)).map((solution) => (
                    <Card sx={{ marginBottom: 2, marginTop: 2, padding: 2 }} id={solution} >
                        <Solution solution={solution} />
                    </Card>
                ))}
            </Stack>
        </>
    )
}
