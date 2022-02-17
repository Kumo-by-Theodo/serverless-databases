import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FunctionComponent } from "react";
import { Solution as SolutionType } from "./App";

interface SolutionDescription {
    name: string;
    src: string;
    description: string;
    documentationUrl: string;
    awesomeUrl: string;
    implementationUrl: string;
}

const solutionDescriptions: Record<SolutionType, SolutionDescription> = {
    "DynamoDB": {
        name: "DynamoDB",
        src: "src/icons/dynamodb.svg",
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
    const { name, src, description, documentationUrl, awesomeUrl, implementationUrl } = solutionDescriptions[solution];
    return (
        <Stack direction="row" spacing={4}>
            <Avatar alt={name} src={src} variant="square" sx={{ marginTop: 2, height: 120, width: 120 }}/>
            <Stack spacing={2}>
                <Typography variant="h2">{name}</Typography>
                <Typography variant="body1">{description}</Typography>
                <Stack direction="row" spacing={4}>
                    <Button variant="contained" href={documentationUrl}>Documentation</Button>
                    <Button variant="contained" href={awesomeUrl}>Awesome Repository</Button>
                    <Button variant="contained" href={implementationUrl}>Implementation example</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
