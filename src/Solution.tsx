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
    pricing?: SolutionPrice;
    tags: string[];
    description: string;
    documentationUrl: string;
    awesomeUrl?: string;
    implementationUrl: string;
}

enum SolutionPrice {
    Cheap = "Cheap",
    Expensive = "Expensive",
}

const solutionDescriptions: Record<SolutionType, SolutionDescription> = {
  DynamoDB: {
    name: "DynamoDB",
    src: dynamodb,
    releaseDate: "2012",
    pricing: SolutionPrice.Cheap,
    tags: ["Pay per use"],
    description: "Key-Value AWS managed database.",
    documentationUrl:
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
    awesomeUrl: "https://github.com/alexdebrie/awesome-dynamodb",
    implementationUrl:
      "https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",
  },
  AuroraServerless: {
    name: "Aurora Serverless",
    src: "src/icons/auroraServerless.svg",
    releaseDate: "2020 (v2)",
    tags: [],
    description:
      "Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. It enables you to run your database in the cloud without managing any database capacity.",
    documentationUrl:
      "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",
    implementationUrl:
      "https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",
  },
  Neptune: {
    name: "Neptune",
    src: "src/icons/neptune.svg",
    releaseDate: "2018",
    tags: ["VPC needed"],
    description: "Graph-oriented AWS managed database.",
    documentationUrl:
      "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",
    implementationUrl: "",
  },
};

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
                    { awesomeUrl !== undefined && <Button variant="contained" target="_blank"href={awesomeUrl}>Awesome Repository</Button>}
                    <Button variant="contained" target="_blank" href={implementationUrl}>Implementation example</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
