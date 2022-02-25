import { Navigation } from './Navigation';
import { Builder } from './Builder';
import { CssBaseline } from '@mui/material';
import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Solutions } from './Solutions';

export enum QuestionId {
  AccessPatterns = "AccessPatterns",
  Fast = "Fast",
  Cache = "Cache",
  Time = "Time",
}

export enum Solution {
  DynamoDB = "DynamoDB",
  AuroraServerless = "AuroraServerless",
  QLDB = "QLDB",
  Timestream = "Timestream",
  Neptune = "Neptune",
  AthenaS3 = "AthenaS3"
}

const questions = [
  {
    id: QuestionId.AccessPatterns,
    question: "Do you have more than 5 access patterns to your data?",
    answers: [
        { label: "Yes", conclusion: "I have more than 5 access patterns to my data", nextQuestionId: QuestionId.Fast },
        { label: "No", conclusion: "I have less than 5 access patterns to my data", nextQuestionId: QuestionId.Cache },
    ]
  },
  {
    id: QuestionId.Fast,
    question: "Do you need fast access?",
    answers: [
        { label: "Yes", conclusion: "I need speed", solution: Solution.DynamoDB },
        { label: "No", conclusion: "I need slow", solution: Solution.Neptune },
        { label: "Timestreams", conclusion: "I need slow", solution: Solution.DynamoDB },
    ]
  },
  {
    id: QuestionId.Cache,
    question: "Do you need cache?",
    answers: [
        { label: "Yes", conclusion: "I need cache", solution: Solution.AuroraServerless },
        { label: "No", conclusion: "I don't know", solution: Solution.DynamoDB },
    ]
  },
  {
    id: QuestionId.Time,
    question: "Is your data a serie of timestamped data points?",
    answers: [
        { label: "Yes", conclusion: "I need a time series database", solution: Solution.Timestream },
        { label: "No", conclusion: "I don't know", solution: Solution.DynamoDB },
    ]
  }
];

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter basename="/serverless-databases">
          <Navigation />
          <Container maxWidth="md" >
            <Routes>
              <Route path="/" element={<h1>hello, this is the home</h1>} />
              <Route path="/builder" element={<Builder questions={questions} />} />
              <Route path="/solutions" element={<Solutions />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
