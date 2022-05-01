import React from 'react';
import { Field } from 'formik';

export default function DemoQuestionnaire(values) {
  return (
    <React.Fragment>

        <label className="block text-gray-700 text-lg font-bold mb-2">What would you rather see?</label>
        <div className="form-check py-2">
            <Field className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="demoType" value="Phone Text Bot"/>
            <label className="form-check-label inline-block text-gray-800 text-xl">
              Text Message Bot (Twilio API)
            </label>
        </div>
        <div className="form-check py-2">
            <Field className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="demoType" value="Domino's Pizza Ordering Bot" />
            <label className="form-check-label inline-block text-gray-800 text-xl" >
              Domino's Pizza Ordering Bot (Domino's API)
            </label>
        </div>
        <div className="form-check py-2">
            <Field className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="demoType" value="Instagram Like Bot" />
            <label className="form-check-label inline-block text-gray-800 text-xl" >
              Instagram Like Bot (Webscraping)
            </label>
        </div>
        <div className="text-red-600">{values.errors.demoType}</div>
    </React.Fragment>
  )
}
