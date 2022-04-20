import React from 'react';
import { Field } from 'formik';

export default function Bagel() {
  return (
    <React.Fragment>
        <div className="flex-col space-y-10 ">
            <div>
              <label>Type of Bagel</label>
              <Field as="select" name="bagelType" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" aria-label="Default select example">
                  <option defaultValue>Select an option</option>
                  <option>Plain</option>
                  <option>Egg</option>
                  <option>Whole Wheat</option>
                  <option>Onion</option>
              </Field>
            </div>
            <div>
              <label>Type of Spread</label>
              <Field as="select" name="spreadType" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" aria-label="Default select example">
                  <option defaultValue>Select an option</option>
                  <option>Cream Cheese</option>
                  <option>Butter</option>
              </Field>
            </div>
        </div>

    </React.Fragment>
    
  )
}