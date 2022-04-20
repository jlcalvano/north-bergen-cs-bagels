 // Render Prop
 import React, {useState} from 'react';
 import { Formik, Form } from 'formik';
 

 import Info from './components/Info';
 import Bagel from './components/Bagel';
 import DemoQuestionnaire from './components/DemoQuestionnaire';
 
 const steps = ['Info', 'Bagel', 'DemoQuestionnaire', 'Done'];

 function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Info/>;
    case 1:
      return <Bagel/>;
    case 2:
      return <DemoQuestionnaire/>;
    default:
      return <div>Not Found</div>;
  }
}

 export default function Basic() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  async function _submitForm(values, actions) {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
      setActiveStep(activeStep + 1);
    }, 400);
    

  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions)
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);

    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }


  return (
  <div className="md:container md:mx-auto">
     <h1 className="text-3xl font-bold underline">NBHS Period 2 - Intro to Comp Sci Bagel Order</h1>
     <Formik
       initialValues={{ name: '', email: '' }}
       onSubmit={_handleSubmit}
     >
       {({ isSubmitting }) => (
        <Form className="py-10">
        {_renderStepContent(activeStep)}
        <div className="block py-10">
            
                  {activeStep !== 0 && (
                    <button type="button" onClick={_handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Back
                    </button>
                  )}
            
            <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" disabled={isSubmitting}>
              {isLastStep ? 'Done' : 'Next'}
            </button>

        </div>
        </Form >
       )}
     </Formik>
   </div>
 )};
