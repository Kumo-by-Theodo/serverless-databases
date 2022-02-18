import { Navigation } from './Navigation';
import { Builder } from './Builder';
import { CssBaseline } from '@mui/material';

export enum QuestionId {
  AccessPatterns = "AccessPatterns",
  Fast = "Fast",
  Cache = "Cache",
}

export enum Solution {
  DynamoDB = "DynamoDB",
  AuroraServerless = "AuroraServerless",
  QLDB = "QLDB",
  Timestream = "Timestream",
  Neptune = "Neptune"
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
    ]
  },
  {
    id: QuestionId.Cache,
    question: "Do you need cache?",
    answers: [
        { label: "Yes", conclusion: "I need cache", solution: Solution.AuroraServerless },
        { label: "No", conclusion: "I don't know", solution: Solution.DynamoDB },
    ]
  }
];

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Navigation />
        <Builder questions={questions} />
      </div>
    </>
  )
}

export default App
