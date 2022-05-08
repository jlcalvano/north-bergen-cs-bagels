 // Render Prop
 import React, {useState} from 'react';
 import { Formik, Form } from 'formik';
 
 import { db } from './firebase.config';
 import {where, query, getDocs, collection, addDoc, doc, updateDoc, serverTimestamp} from "firebase/firestore";

 import validations from './validations';

 import Info from './components/Info';
 import Bagel from './components/Bagel';
 import DemoQuestionnaire from './components/DemoQuestionnaire';
 import Done from './components/Done';
 
 const steps = ['Info', 'Bagel', 'DemoQuestionnaire', 'Done'];

 function _renderStepContent(step, values, errors) {
  switch (step) {
    case 0:
      return <Info values={values} errors={errors} />;
    case 1:
      return <Bagel values={values} errors={errors} />;
    case 2:
      return <DemoQuestionnaire values={values} errors={errors}/>;
    case 3:
      return <Done props={values} />;
    default:
      return <div>Not Found</div>;
  }
}


 export default function Basic() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipSteps, setSkipSteps] = useState([]);
  const [submission, setSubmission] = useState('Not Submitted');
  const currentValidationSchema = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  
  async function getData(passcode) {
    //console.log("running query");
    const passcodesCollectionRef = collection(db, "passcodes");
    const q = query(passcodesCollectionRef, where('pass',"==", passcode));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size> 0){
      return querySnapshot.docs[0].id;
    } else {
      return 0;
    }
   
  }

  async function  _submitForm(values, actions) {
      let docRef;
      const passcodesCollectionRef = collection(db, "passcodes");
      const q = query(passcodesCollectionRef, where('pass',"==", values.passcode));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size> 0){

        // Create Submission
        try {
          docRef = await addDoc(collection(db, "submissions"),{...values, docId: querySnapshot.docs[0].id, submittedDate: serverTimestamp()});
        } catch {
          setSubmission('already used!!');
          console.log('already used!!');
          return 
        }

        // Update Passcode to Used
        await updateDoc(doc(db, "passcodes", querySnapshot.docs[0].id), {
          used: true
        });
        
        actions.setSubmitting(false);
        setSubmission('Submitted Successfully!');
        console.log('Submitted Successfully!');
        return

      } else {
        setSubmission('Invalid Passcode');
        console.log('Invalid Passcode');
        return 
      }

  }

  function _handleSubmit(values, actions) {
    //console.log(values);
    let numSteps = 1;

    if (values.bagel !== 'Yes' && activeStep === 0) {  
      if (skipSteps.includes(1)) {
        //console.log('[Submit Button] Deleting Previous Results');
        setSkipSteps([]);
      } else {
        //console.log('Adding Skipped Page');
        setSkipSteps([1]);
        numSteps = 2;
      }

      values.bagelType = ''
      values.spreadType = ''
      

      setActiveStep(activeStep + numSteps);
      actions.setTouched({});
      actions.setSubmitting(false);
      
    }



    if(activeStep === 0) {
      getData(values.passcode).then(res => {

        const docId = res;
        //console.log(docId);
        values.docId = docId;
        setActiveStep(activeStep + numSteps);
        actions.setTouched({});
        actions.setSubmitting(false);

      })

    } else {
      if (!isLastStep) {
        setActiveStep(activeStep + numSteps);
        actions.setTouched({});
        actions.setSubmitting(false);
      }
    }

    if (isLastStep) {
      _submitForm(values, actions);
      actions.setTouched({});
      actions.setSubmitting(false);
    }



  }

  function _handleBack() {
    
    let numSteps = 1;
    if (skipSteps.includes(activeStep - 1 )) {
      numSteps = 2;
      setSkipSteps([]);
    }

    setActiveStep(activeStep - numSteps);
    
  }

  
  return (
  <>
  <div className="container bg-white shadow-lg mx-auto w-full max-w-4xl px-10 bg-slate-100 rounded-xl py-10 mt-10">
     <h1 className="text-3xl font-bold underline">NBHS Period 2 - Web Development, Animations and Games</h1>
          <Formik
             initialValues={{ name: '',passcode: '', docId: '', bagel:'', bagelType:'', spreadType:'',demoType:''}}
             onSubmit={_handleSubmit}
             validationSchema={currentValidationSchema}
            
          >
          {(formikProps) => {
          const { values, errors } = formikProps;
          return (
            <Form className="py-5">
              {_renderStepContent(activeStep,values, errors)}
              <div className="block py-10 space-x-1 space-y-5">
                  {activeStep !== 0 && (
                    <button type="button" onClick={_handleBack} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Back
                    </button>
                  )}
      
                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  {isLastStep ? 'Done' : 'Next'}
                </button>
                <div>
                  {isLastStep ? submission: '' }
                </div>

            </div>
              
            </Form>
          );
        }}

       </Formik>
   </div>
   </>
 )};
