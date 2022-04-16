import React from 'react';
import { Field } from 'formik';

export default function Bagel() {
  return (
    <React.Fragment>
        <div>
            <label>Type of Bagel</label>
            <Field as="select" name="bagelType" className="form-select" aria-label="Default select example">
                <option defaultValue>Plain</option>
                <option>Egg</option>
                <option>Whole Wheat</option>
                <option>Onion</option>
            </Field>
            <label>Type of Spread</label>
            <Field as="select" name="spreadType" className="form-select" aria-label="Default select example">
                <option defaultValue>Cream Cheese</option>
                <option>Butter</option>
            </Field>
        </div>

    </React.Fragment>
    
  )
}