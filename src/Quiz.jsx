import React, { useState } from 'react';
import {
  Card,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Badge,
} from 'reactstrap';
import './App.css';

const Quiz = ({
  color,
  question,
  correct_answer,
  listAnswer,
  difficulty,
  category,
  onCalScore,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCheckQuestion = (e) => {
    if (e.target.value === correct_answer) {
      onCalScore(10);
    } else {
      onCalScore(0);
    }
    setIsDisabled(true);
  };

  return (
    <Card body color={color} outline className="mt-5">
      <div className="custom-card">
        <CardTitle tag="h5">{question}</CardTitle>
        <div className="custom-info">
          <div className="custom-info__difficulty">
            <Badge pill>{difficulty}</Badge>
          </div>
          <div className="custom-info__category">
            <Badge color="primary">{category}</Badge>
          </div>
        </div>
      </div>
      <Form>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
            disabled={isDisabled}
            value={correct_answer}
            onChange={handleCheckQuestion}
          />{' '}
          <Label check>{correct_answer}</Label>
        </FormGroup>
        {listAnswer
          ? listAnswer.map((answer, index) => (
              <FormGroup check key={index}>
                <Input
                  name="radio1"
                  type="radio"
                  disabled={isDisabled}
                  value={answer}
                  onChange={handleCheckQuestion}
                />{' '}
                <Label check>{answer}</Label>
              </FormGroup>
            ))
          : ''}
      </Form>
    </Card>
  );
};

export default Quiz;
