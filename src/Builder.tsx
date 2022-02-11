import type { FunctionComponent } from "react";
import { useForm, Controller } from "react-hook-form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useSet } from '@react-hookz/web/esnext';

import { QuestionId } from './App';

type Inputs = Record<QuestionId, string> & { recommendedEngine: string };

interface BuilderProps {
    questions: {
        id: QuestionId,
        question: string,
        answers: { label: string, conclusion: string, nextQuestionId: QuestionId }[]
    }[];
}
export const Builder: FunctionComponent<BuilderProps> = ({questions}) => {
  const { control } = useForm<Inputs>();
  const visibleQuestionIds = useSet([QuestionId.AccessPatterns]);

  const addQuestion = (id: QuestionId) => {
    visibleQuestionIds.add(id);
  }

  return (
    <Container maxWidth="md" >
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
                                        {answers.map(({ label, nextQuestionId }) =>
                                            <FormControlLabel key={label} value={label} control={<Radio />} onClick={() => addQuestion(nextQuestionId)} label={label} />
                                        )}
                                    </RadioGroup>
                            </FormControl>)
                        }
                    />
                )}
            </Stack>
    </form>
    </Container>
  );
}
