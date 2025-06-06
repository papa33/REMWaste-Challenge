import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

interface StepperProps {
}

export const AppStepper: React.FC<StepperProps> = ({ }) => {
    const steps = ['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date','Payment'];
  
  return (
    <Stepper
      activeStep={2}
      alternativeLabel
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
