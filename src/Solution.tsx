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
import auroraServerless from "./icons/auroraServerless.svg";
import qldb from "./icons/qldb.svg";
import timestream from "./icons/timestream.svg";
import neptune from "./icons/neptune.svg";
import athenaS3 from "./icons/athenaS3.svg";
import s3 from "./icons/s3.svg";

interface SolutionDescription {
    name: string;
    src: string;
    releaseDate: string;
    tags: string[];
    pricing?: SolutionPrice;
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
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    documentationUrl:
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/index.html",
    awesomeUrl: "https://github.com/alexdebrie/awesome-dynamodb",
    implementationUrl:
      "https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",
  },
  AuroraServerless: {
    name: "Aurora Serverless",
    src: auroraServerless,
    releaseDate: "2018",
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. It enables you to run your database in the cloud without managing any database capacity.",
    documentationUrl:
      "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",
    implementationUrl:
      "https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",
  },
  QLDB: {
    name: "Quantum Ledger Database",
    src: qldb,
    releaseDate: "2019",
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    documentationUrl:
      "https://docs.aws.amazon.com/qldb/latest/developerguide/index.html",
    awesomeUrl: "https://github.com/mlewis7127/awesome-qldb",
    implementationUrl: "https://www.google.com",
  },
  Timestream: {
    name: "Timestream",
    src: timestream,
    releaseDate: "2020",
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    documentationUrl:
      "https://docs.aws.amazon.com/timestream/latest/developerguide/index.html",
    awesomeUrl: "https://github.com/awslabs/amazon-timestream-tools",
    implementationUrl: "https://www.google.com",
  },
  Neptune: {
    name: "Neptune",
    src: neptune,
    releaseDate: "2018",
    tags: ["VPC needed"],
    pricing: SolutionPrice.Cheap,
    description:
      "Graph-oriented AWS managed database. Its query processing engine is optimized for leading graph query languages, Apache TinkerPop™ Gremlin and the W3C’s RDF SPARQL.",
    documentationUrl:
      "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",
    implementationUrl: "https://github.com/dabit3/cdk-appsync-neptune",
  },
  AthenaS3: {
    name: "Athena with S3",
    src: athenaS3,
    releaseDate: "2016",
    tags: ["Pay per use"],
    pricing: SolutionPrice.Cheap,
    description:
      "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.",
    documentationUrl:
      "https://docs.aws.amazon.com/athena/latest/ug/what-is.html",
    implementationUrl:
      "https://github.com/theodo/serverless-databases/tree/main/athena",
  },
  S3Select: {
    name: "S3 Select",
    src: s3,
    releaseDate: "2018",
    tags: ["Pay per use"],
    pricing: SolutionPrice.Cheap,
    description:
      "S3 Select enables applications to retrieve only a subset of data from an object by using simple SQL expressions.",
    documentationUrl:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/selecting-content-from-objects.html",
    implementationUrl:
      "https://aws.amazon.com/fr/blogs/developer/introducing-support-for-amazon-s3-select-in-the-aws-sdk-for-javascript/",
  }
};

interface SolutionProps {
    solution: SolutionType
}

export const Solution: FunctionComponent<SolutionProps> = ({ solution }) => {
    const { name, src, releaseDate, pricing, description, documentationUrl, awesomeUrl, implementationUrl, tags } = solutionDescriptions[solution];
    return (
      <Stack direction="row" spacing={4}>
        <Avatar
          alt={name}
          src={src}
          variant="square"
          sx={{ marginTop: 2, height: 120, width: 120 }}
        />
        <Stack spacing={2}>
          <Typography variant="h2">{name}</Typography>
          <Stack direction="row" spacing={2}>
            <Chip icon={<EventIcon />} label={releaseDate} variant="outlined" />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Chip
              icon={<EuroIcon />}
              label={pricing}
              color={pricing === SolutionPrice.Cheap ? "success" : "error"}
              variant="outlined"
            />
            <Chip
              icon={<LanguageIcon />}
              label="Parti-QL compatible"
              color="success"
              variant="outlined"
            />
            {tags.map((tag) => (
              <Chip
                label={tag}
                color="secondary"
                variant="outlined"
              />
            ))}
          </Stack>
          <Typography variant="body1">{description}</Typography>
          <Stack direction="row" spacing={4}>
            <Button variant="contained" target="_blank" href={documentationUrl}>
              Documentation
            </Button>
            {awesomeUrl !== undefined && (
              <Button variant="contained" target="_blank" href={awesomeUrl}>
                Awesome Repository
              </Button>
            )}
            <Button
              variant="contained"
              target="_blank"
              href={implementationUrl}
            >
              Implementation example
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
}
