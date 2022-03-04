import { FunctionComponent } from "react";
import { InfrastructureType } from "./enums";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Infrastructure } from "./Infrastructure";

export const Infrastructures: FunctionComponent = () => {

    return (
      <Stack>
        {Object.values(InfrastructureType)
          .sort((a, b) => a.localeCompare(b))
          .map((infrastructure) => (
            <Card sx={{ marginBottom: 2, marginTop: 2, padding: 2 }}>
              <Infrastructure infrastructure={infrastructure} />
            </Card>
          ))}
      </Stack>
    );
};
