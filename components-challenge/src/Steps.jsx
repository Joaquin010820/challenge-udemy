import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((val) => val - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((val) => val + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>

          <StepMessage step={step}>
            <p>{messages[step - 1]}</p>
          </StepMessage>

          <div className="buttons">
            <Button
              textColor="text-white"
              bgColor="bg-purple-700"
              handleClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>

            <Button
              textColor="text-white"
              bgColor="bg-purple-700"
              handleClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
