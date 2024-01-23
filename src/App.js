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
      <StepMessage step={step}>{messages[step - 1]}</StepMessage>
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

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
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
      <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
        <span>👈</span>
        Previous
      </Button>
      <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
        Next
        <span>👉</span>
      </Button>
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{
        color: textColor,
        background: bgColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
