import type { FunctionComponent } from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from "@mui/material/Stack";
import { useSet } from '@react-hookz/web/esnext';

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

const isFinalAnswer = (answer: Answer): answer is FinalAnswer => {
    return (answer as FinalAnswer).solution !== undefined;
}

export const Builder: FunctionComponent<BuilderProps> = ({questions}) => {
  const { control } = useForm<Inputs>();
  const visibleQuestionIds = useSet([QuestionId.AccessPatterns]);
  const [solution, setSolution] = useState<SolutionType>()

  const addQuestion = (id: QuestionId) => {
    visibleQuestionIds.add(id);
  }

  const processAnswer = (answer: Answer) => {
      if (isFinalAnswer(answer)) {
        setSolution(answer.solution);
        return;
      }

      addQuestion(answer.nextQuestionId);
  }

  return (
        <form>
            <Stack spacing={2}>
                {questions.filter(({ id }) => visibleQuestionIds.has(id)).map(({ id, question, answers }) => 
                    <Controller
                        key={id}
                        name={id}
                        control={control}
                        render={({ field }) =>
                            field.value ? <span>{answers.find(({ label }) => label === field.value)?.conclusion}</span> : (
                            <FormControl {...field} >
                                    <FormLabel id="demo-radio-buttons-group-label" >{question}</FormLabel>
                                    <RadioGroup row >
                                        {answers.map((answer) =>
                                            <FormControlLabel key={answer.label} value={answer.label} control={<Radio />} onClick={() => processAnswer(answer)} label={answer.label} />
                                        )}
                                    </RadioGroup>
                            </FormControl>)
                        }
                    />
                )}
            </Stack>
            {solution && <Solution solution={solution} />}
    </form>
  );
}
