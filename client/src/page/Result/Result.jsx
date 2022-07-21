import React, {useContext }from 'react';
import { AnswerDataContext } from '../App';

const Result = () => {
   const { answerData } = useContext(AnswerDataContext)
    return (
            <div>{answerData}</div>
    );
}

export default Result;
