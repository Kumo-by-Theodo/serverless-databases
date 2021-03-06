import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Builder } from './Builder';
import { Navigation } from './Navigation';
import { Solutions } from './Solutions';
import { Infrastructures } from './Infrastructures';
import { Home } from './Home';
import background from './images/background-dune.webp';

export enum QuestionId {
  AcessPatternsNumber = 'AccessPatternsNumber',
  AcessPatternsKnown = 'AccessPatternsKnown',
  Temperature = 'Temperature',
  Temporality = 'Temporality',
  Cache = 'Cache',
  Time = 'Time',
  RelationsCount = 'RelationsCount',
  DataInRelations = 'DataInRelations',
  SearchCatalogue = 'SearchCatalogue',
  MachineLearning = 'MachineLearning',
}

export enum Solution {
  DynamoDB = 'DynamoDB',
  AuroraServerless = 'AuroraServerless',
  QLDB = 'QLDB',
  Timestream = 'Timestream',
  Neptune = 'Neptune',
  AthenaS3 = 'AthenaS3',
  S3Select = 'S3Select',
  DocumentDB = 'DocumentDB',
  OpenSearch = 'OpenSearch',
  Redshift = 'Redshift',
  EMR = 'EMR',
}

const questions = [
  // {
  //   id: QuestionId.Cache,
  //   question: 'Does your data need to be in persistent storage?',
  //   answers: [
  //     { label: 'Yes', conclusion: 'I need a database', nextQuestionId: QuestionId.Temperature },
  //     { label: 'No', conclusion: 'I need a cache system', solution: Solution.DynamoDB },
  //   ],
  // },
  {
    id: QuestionId.Temperature,
    question: 'What is the more frequent operations on your data?',
    answers: [
      { label: 'Write operations', conclusion: 'I need an OTLP solution', nextQuestionId: QuestionId.Temporality },
      { label: 'Read operations', conclusion: 'I need an OLAP solution', nextQuestionId: QuestionId.MachineLearning },
    ],
  },
  {
    id: QuestionId.Temporality,
    question: 'Is history an important part of your data?',
    answers: [
      { label: 'Yes', conclusion: 'Data history is important', nextQuestionId: QuestionId.Time },
      { label: 'No', conclusion: 'Data history is not important', nextQuestionId: QuestionId.AcessPatternsKnown },
    ],
  },
  {
    id: QuestionId.AcessPatternsKnown,
    question: 'Do you already know the access patterns for your data?',
    answers: [
      { label: 'Yes', conclusion: 'I know the acess patterns for my data', nextQuestionId: QuestionId.AcessPatternsNumber },
      { label: 'No', conclusion: 'I do not know the acess patterns for my data', nextQuestionId: QuestionId.SearchCatalogue },
    ],
  },
  {
    id: QuestionId.SearchCatalogue,
    question: 'Will you be searching through large catalog of data?',
    answers: [
      { label: 'Yes', conclusion: "I'm looking for a searchable catalog solution", solution: Solution.OpenSearch },
      { label: 'No', conclusion: "I don't need a searchable catalog", solution: Solution.DocumentDB },
    ],
  },
  {
    id: QuestionId.AcessPatternsNumber,
    question: 'Do you have more than 20 access patterns on a single entity?',
    answers: [
      { label: 'Yes', conclusion: 'I have more than 20 access patterns to my data', nextQuestionId: QuestionId.RelationsCount },
      { label: 'No', conclusion: 'I have less than 20 access patterns to my data', solution: Solution.DynamoDB },
    ],
  },
  {
    id: QuestionId.RelationsCount,
    question: 'Do you have a lot of relations between your entities',
    answers: [
      { label: 'Yes', conclusion: 'I have a lot of relations between my entities', nextQuestionId: QuestionId.DataInRelations },
      { label: 'No', conclusion: 'I do not have a lot of relations between my entities', solution: Solution.DocumentDB },
    ],
  },
  {
    id: QuestionId.DataInRelations,
    question: 'Is the relation between my entites the valuable part of my data?',
    answers: [
      { label: 'Yes', conclusion: 'I am looking for a Graph DB', solution: Solution.Neptune },
      { label: 'No', conclusion: 'I am looking for an SQL DB', solution: Solution.AuroraServerless },
    ],
  },
  {
    id: QuestionId.Time,
    question: 'Is your data a series of timestamped data points?',
    answers: [
      { label: 'Yes', conclusion: 'I need a time series database', solution: Solution.Timestream },
      { label: 'No', conclusion: 'I need a database with an immutable history log', solution: Solution.QLDB },
    ],
  },
  {
    id: QuestionId.MachineLearning,
    question: 'Will I run machine learning processes on my data?',
    answers: [
      { label: 'Yes', conclusion: 'I will run machine learning process on my data', solution: Solution.EMR },
      { label: 'No', conclusion: 'I have no machine learning application for my data', solution: Solution.S3Select },
    ],
  },
];

function App() {
  return (
    <>
      <CssBaseline />
      <Paper
        variant="elevation"
        elevation={0}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <BrowserRouter basename="/serverless-databases">
          <Navigation />
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/builder"
                element={<Builder questions={questions} />}
              />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/infrastructures" element={<Infrastructures />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Paper>
    </>
  );
}

export default App;
