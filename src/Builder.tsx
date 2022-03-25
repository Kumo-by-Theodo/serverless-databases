import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useSet } from '@react-hookz/web/esnext';

import { Button, Divider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { QuestionId, Solution as SolutionType } from './App';
import { Solution } from './Solution';

type Inputs = Record<QuestionId, string> & { recommendedEngine: string };

interface BaseAnswer {
    label: string,
    conclusion: string,
}

type NextAnswer = BaseAnswer & {
    nextQuestionId: QuestionId,
}

type FinalAnswer = BaseAnswer & {
    solution: SolutionType,
}

type Answer = NextAnswer | FinalAnswer;

interface BuilderProps {
    questions: {
        id: QuestionId,
        question: string,
        answers: Answer[]
    }[];
}

const isFinalAnswer = (answer: Answer): answer is FinalAnswer => (answer as FinalAnswer).solution !== undefined;

export const Builder: FunctionComponent<BuilderProps> = ({ questions }) => {
  const { control } = useForm<Inputs>();
  const visibleQuestionIds = useSet([questions[0].id]);
  const [solution, setSolution] = useState<SolutionType>();

  const addQuestion = (id: QuestionId) => {
    visibleQuestionIds.add(id);
  };

  const processAnswer = (answer: Answer) => {
    if (isFinalAnswer(answer)) {
      setSolution(answer.solution);
      return;
    }

    addQuestion(answer.nextQuestionId);
  };

  const sendFeedbackEmail = () => {
    window.location.href = 'mailto:serverless-databases@theodo.fr'
      + `?subject=${encodeURIComponent(`Feeback on serverless database selector - ${solution}`)}`;
  };

  return (
    <Box sx={{ height: '100vh' }}>
      <form>
        <Stack spacing={2}>
          {questions.filter(({ id }) => visibleQuestionIds.has(id)).map(({ id, question, answers }) => (
            <Controller
              key={id}
              name={id}
              control={control}
              render={({ field }) => (field.value ? <span style={{ marginTop: 10 }}>{answers.find(({ label }) => label === field.value)?.conclusion}</span> : (
                <FormControl {...field}>
                  <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
                  <RadioGroup row>
                    {answers.map((answer) => <FormControlLabel key={answer.label} value={answer.label} control={<Radio />} onClick={() => processAnswer(answer)} label={answer.label} />)}
                  </RadioGroup>
                </FormControl>
              ))}
            />
          ))}
        </Stack>
      </form>
      {solution && (
        <Stack>
          <Divider sx={{ marginTop: 1 }} />
          <span style={{ fontWeight: 600, marginTop: 10 }}>You preffered solution for data storage is...</span>
          <Solution solution={solution} />
        </Stack>
      )}
      {solution && (
        <Stack direction="row-reverse" sx={{ padding: 10 }}>
          <Button startIcon={<SendIcon />} variant="contained" size="large" onClick={sendFeedbackEmail}>
            Send feedback
          </Button>
        </Stack>
      )}
    </Box>
  );
};
