import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { 
    useForm, 
    FormProvider, 
    useFormContext, 
    Controller 
} from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal information",
    "Medical History",
    "Additional Data",
  ];
}

const PersonalInformation = () => {
    const { control } = useFormContext();
    return (
        <>
           <Controller
                control={control}
                name="age"
                render={({ field }) => (
                <TextField
                    type="number"
                    id="age"
                    label="Age"
                    variant="outlined"
                    placeholder="Enter Your Age"
                    fullWidth
                    margin="dense"
                    {...field}
                />
                )}
            />

            <Controller
              control={control}
              name="sex"
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" margin="dense">
                  <InputLabel id="sex-label">Sex</InputLabel>
                  <Select
                    labelId="sex-label"
                    id="sex"
                    label="Sex"
                    {...field}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="cp"
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" margin="dense">
                  <InputLabel id="cp-label">Chest Pain Type</InputLabel>
                  <Select
                    labelId="cp-label"
                    id="cp"
                    label="Chest Pain Type"
                    {...field}
                  >
                    <MenuItem value="Typical angina">Typical angina</MenuItem>
                    <MenuItem value="Atypical angina">Atypical angina</MenuItem>
                    <MenuItem value="Non-anginal pain">Non-anginal pain</MenuItem>
                    <MenuItem value="Asymptomatic">Asymptomatic</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="trestbps"
              render={({ field }) => (
                <TextField
                  type="number"
                  id="trestbps"
                  label="Resting Blood Pressure (trest bps in mm Hg)"
                  variant="outlined"
                  placeholder="Enter resting blood pressure"
                  fullWidth
                  margin="dense"
                  helperText={
                    field.value >= 130 && field.value <= 140
                      ? ""
                      : "Above 130-140 is typically cause for concern"
                  }
                  error={field.value > 140}
                  {...field}
                />
              )}
            />

            <Controller
                control={control}
                name="chol"
                render={({ field }) => (
                <TextField
                    type="number"
                    id="chol"
                    label="Serum Cholestoral (chol in mg/dL)"
                    variant="outlined"
                    placeholder="above 200 is cause for concern"
                    fullWidth
                    margin="dense"
                    {...field}
                />
                )}
            />
        </>
    )
};
const ContactInformation = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="fbs"
                render={({ field }) => (
                <TextField
                    type="number"
                    id="fbs"
                    label="Fasting Blood Sugar (fbs in mg/dL)"
                    variant="outlined"
                    placeholder="Above 160mg/dL signals Diabities"
                    fullWidth
                    margin="dense"
                    {...field}
                />
                )}
            />

            <Controller
              control={control}
              name="restecg"
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" margin="dense">
                  <InputLabel id="restecg-label">Resting Electrocardiographic Results</InputLabel>
                  <Select
                    labelId="restecg-label"
                    id="restecg"
                    label="Resting Electrocardiographic Results"
                    {...field}
                  >
                    <MenuItem value="Nothing to Note">Nothing to Note</MenuItem>
                    <MenuItem value="ST-T Wave abnormally">ST-T Wave abnormally</MenuItem>
                    <MenuItem value="Possible or definite left ventricular hypertrophy, Enlarged heart's main pumping">Possible or definite left ventricular hypertrophy, Enlarged heart's main pumping</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            
            <Controller
                control={control}
                name="thalach"
                render={({ field }) => (
                <TextField
                    type="number"
                    id="thalach"
                    label="Maximum Heart Rate Achieved (thalach)"
                    variant="outlined"
                    placeholder="Can have maximum value of 400"
                    fullWidth
                    margin="dense"
                    {...field}
                />
                )}
            />

            <Controller
              control={control}
              name="exang"
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" margin="dense">
                  <InputLabel id="exang-label">Exercise-Induced Pain (exanag)</InputLabel>
                  <Select
                    labelId="exang-label"
                    id="exang"
                    label="Exercise-Induced Pain (exanag)"
                    {...field}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Controller
                control={control}
                name="oldpeak"
                render={({ field }) => (
                <TextField
                    type="number"
                    id="oldpeak"
                    label="ST Depression Induced by Exercise (oldpeak)"
                    variant="outlined"
                    placeholder="Relative to rest typically ranges from 0.0 to 4.0"
                    fullWidth
                    margin="dense"
                    inputProps={{
                        min: 0.0,
                        max: 4.0,
                        step: 0.1
                    }}
                    {...field}
                />
                )}
            />
        </>
    )
};
const AdditionalData = () => {
    const { control } = useFormContext();
    return (
        <>       
            <Controller
              control={control}
              name="slope"
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" margin="dense">
                  <InputLabel id="slope-label">Slope of the Peak Exercise ST Segment</InputLabel>
                  <Select
                    labelId="slope-label"
                    id="slope"
                    label="Slope of the Peak Exercise ST Segment"
                    {...field}
                  >
                    <MenuItem value="Upsloping: better heart rate with exercise (uncommon)">Upsloping: better heart rate with exercise (uncommon)</MenuItem>
                    <MenuItem value="Flatsloping: minimal change (typical healthy heart)">Flatsloping: minimal change (typical healthy heart)</MenuItem>
                    <MenuItem value="Downsloping: signs of unhealthy heart">Downsloping: signs of unhealthy heart</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="ca"
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" margin="dense">
                  <InputLabel id="ca-label">Number of Major Vessels Colored by Fluoroscopy (ca)</InputLabel>
                  <Select
                    labelId="ca-label"
                    id="ca"
                    label="Number of Major Vessels Colored by Fluoroscopy (ca)"
                    {...field}
                  >
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="thal"
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" margin="dense">
                  <InputLabel id="thal-label">Thalium Stress Result (thal)</InputLabel>
                  <Select
                    labelId="thal-label"
                    id="thal"
                    label="Thalium Stress Result (thal)"
                    {...field}
                  >
                    <MenuItem value="Normal(1-3)">Normal(1-3)</MenuItem>
                    <MenuItem value="Fixed Defect: Used to be defect but OK now (around 6)">Fixed Defect: Used to be defect but OK now (around 6)</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="Reversible Defect: No proper blood movement when exercising (thal is 7)">Reversible Defect: No proper blood movement when exercising (thal is 7)</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
        </>
    )
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInformation />

    case 1:
      return <ContactInformation />
    case 2:
      return <AdditionalData />
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
        age: "",
        sex: "", // Default value is an empty string
        cp: "", // Default value is an empty string
        trestbps: "", // Default value is an empty string
        chol: "", // Default value is an empty string
        fbs: "",
        restecg: "",
        thalach: "",
        exang: "",
        oldpeak: "",
        slope: "",
        ca: "",
        thal: "",
    }
  });

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };


  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
        console.log(data);
    }
    console.log(data);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

//   const onSubmit = (data) => {
//     console.log("Data -> ", data);
//   }

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}
            <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
            >
                back
            </Button>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
            >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </form>
        </FormProvider>
          
        </>
      )}
    </div>
  );
};

export default LinaerStepper;