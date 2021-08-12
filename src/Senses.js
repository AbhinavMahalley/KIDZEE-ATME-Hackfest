import React, { useEffect, useState } from "react";

const Senses = () => {
    const questions = [
		{
			questionText: 'The food today was delicious,which sense is used ?',
			answerOptions: [
				{ answerText: 'Smell', isCorrect: false },
				{ answerText: 'Taste', isCorrect: true },
				{ answerText: 'Touch', isCorrect: false },
				{ answerText: 'Hearing', isCorrect: false },
			],
		},
{
			questionText: 'There is a bad smell in the room, which sense is used?',
			answerOptions: [
				{ answerText: 'Touch', isCorrect: false },
				{ answerText: 'Taste', isCorrect: false },
				{ answerText: 'Hearing', isCorrect: false },
				{ answerText: 'Smell', isCorrect: true},
			],
		},
{
			questionText: 'The dog is barking outside, which sense is used?',
			answerOptions: [
				{ answerText: 'Hearing', isCorrect: true },
				{ answerText: 'Touch', isCorrect: false },
				{ answerText: 'Sight', isCorrect: false },
				{ answerText: 'Smell', isCorrect: false },
			],
		},
{
			questionText: 'Today I saw the sunrise, which sense is used?',
			answerOptions: [
				{ answerText: 'Taste', isCorrect: false },
				{ answerText: 'Hearing', isCorrect: false },
				{ answerText: 'Sight', isCorrect: true },
				{ answerText: 'Touch', isCorrect: false },
			],
		},
{
			questionText: 'The pan was very hot, which sense is used?',
			answerOptions: [
				{ answerText: 'Touch', isCorrect: true },
				{ answerText: 'Hearing', isCorrect: false },
				{ answerText: 'Smell', isCorrect: false},
				{ answerText: 'Sight', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div  className='learnm'>
             <h2 className="center3 bgcolr">Quizes</h2>
			 <div id="Sense" className="Sense center">
			{showScore ? (
				<div className='score-section center2'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section center2'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span> / <span>{questions.length}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section center2'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			</div>
		</div>
	);
}
 
export default Senses;