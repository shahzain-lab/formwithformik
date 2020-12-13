import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
///signup
import Signup from '../SignUp/SignUp';
////Payment
import Payment from '../Payment/Payment';
///Subscription
import Subscription from '../subscription/Subscription';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background:"transparent"
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  background:{
    background: 'transparent'
  }
}));

function getSteps() {
  return ['Signup account', 'Payment account', 'Subscription'];
}

function getStepContent(stepIndex:any,setStep:any) {
  switch (stepIndex) {
    case 0:
      return <Signup submit={setStep} />;
    case 1:
      return <Payment submit={setStep} />;
    case 2:
      return <Subscription submit={setStep} />;
    default:
      return 'Unknown stepIndex';
  }
}

export function MultiStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper className={classes.background} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        getStepContent(activeStep,setActiveStep )
      }
    </div>
  );
}
