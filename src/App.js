 // Render Prop
 import React, {useState} from 'react';
 import { Formik, Form } from 'formik';
 

 import Info from './components/Info';
 import Bagel from './components/Bagel';

 const steps = ['Info', 'Bagel', 'Demo', 'Done'];

 function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Info/>;
    case 1:
      return <Bagel/>;
    default:
      return <div>Not Found</div>;
  }
}

 export default function Basic() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  function _handleSubmit(values, actions) {
    if (isLastStep) {

    } else {
      
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setActiveStep(activeStep + 1);
        actions.setSubmitting(false);
        
      }, 400);
    }
  }



  return (
  <div className="container">
     <h1 style={{paddingBottom:'50px',paddingTop:'10px'}}>NBHS Period 2 - Intro to Comp Sci Bagel Order</h1>
     <Formik
       initialValues={{ name: '', email: '' }}
       onSubmit={_handleSubmit}
     >
       {({ isSubmitting }) => (
        <Form>
        {_renderStepContent(activeStep)}
        <div className="mb-3" style={{paddingTop:'100px'}}>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isLastStep ? 'Done' : 'Next'}
            </button>
        </div>
        </Form >
       )}
     </Formik>
   </div>
 )};
