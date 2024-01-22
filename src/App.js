import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      <Close setisOpen={setisOpen} />
      {isOpen ? <Steps /> : null}
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  return (
    <div className="steps">
      <Numbers step={step} />
      <Message step={step} />
      <Buttons setStep={setStep} />
    </div>
  );
}

function Close({ setisOpen }) {
  const handleClick = () => {
    setisOpen((d) => !d);
  };
  return (
    <button className="close" onClick={handleClick}>
      &times;
    </button>
  );
}

function Numbers({ step }) {
  return (
    <div className="numbers">
      {messages.map((_, i) => (
        <Step i={i + 1} active={step > i} key={i + 1} />
      ))}
    </div>
  );
}
function Step({ i, active }) {
  return <div className={`step-${i} ${active ? "active" : ""}`}>{i}</div>;
}

function Message({ step }) {
  return (
    <p className="message">
      Step {step}: {messages[step - 1]}
    </p>
  );
}

function Buttons({ setStep }) {
  const loop = (n, a) => {
    return a % n === 0 ? n : a % n;
  };
  const handlePrevious = () => {
    setStep((a) => loop(messages.length, a - 1));
  };
  const handleNext = () => {
    setStep((a) => loop(messages.length, a + 1));
  };
  return (
    <div className="buttons">
      <button className="previous" onClick={handlePrevious}>
        Previous
      </button>
      <button className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
