import type { FunctionComponent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import EuroIcon from '@mui/icons-material/Euro';
import LanguageIcon from '@mui/icons-material/Language';
import EventIcon from '@mui/icons-material/Event';
import { Solution as SolutionType } from "./App";

import dynamodb from "./icons/dynamodb.svg";

interface SolutionDescription {
    name: string;
    src: string;
    releaseDate: string;
    pricing: SolutionPrice;
    description: string;
    documentationUrl: string;
    awesomeUrl: string;
    implementationUrl: string;
}

enum SolutionPrice {
    Cheap = "Cheap",
    Expensive = "Expensive",
}

const solutionDescriptions: Record<SolutionType, SolutionDescription> = {
    "DynamoDB": {
        name: "DynamoDB",
        src: dynamodb,
        releaseDate: "2012",
        pricing: SolutionPrice.Cheap,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        documentationUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
        awesomeUrl: "https://github.com/alexdebrie/awesome-dynamodb",
        implementationUrl: "https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",
    }
}

interface SolutionProps {
    solution: SolutionType
}

export const Solution: FunctionComponent<SolutionProps> = ({ solution }) => {
    const { name, src, releaseDate, pricing, description, documentationUrl, awesomeUrl, implementationUrl } = solutionDescriptions[solution];
    return (
        <Stack direction="row" spacing={4}>
            <Avatar alt={name} src={src} variant="square" sx={{ marginTop: 2, height: 120, width: 120 }}/>
            <Stack spacing={2}>
                <Typography variant="h2">{name}</Typography>
                <Stack direction="row" spacing={2}>
                    <Chip icon={<EventIcon />} label={releaseDate} variant="outlined" />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Chip icon={<EuroIcon />} label={pricing} color={ pricing === SolutionPrice.Cheap ? "success" : "error" } variant="outlined" />
                    <Chip icon={<LanguageIcon />} label="Parti-QL compatible" color="success" variant="outlined" />
                </Stack>
                <Typography variant="body1">{description}</Typography>
                <Stack direction="row" spacing={4}>
                    <Button variant="contained" target="_blank" href={documentationUrl}>Documentation</Button>
                    <Button variant="contained" target="_blank"href={awesomeUrl}>Awesome Repository</Button>
                    <Button variant="contained" target="_blank" href={implementationUrl}>Implementation example</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
