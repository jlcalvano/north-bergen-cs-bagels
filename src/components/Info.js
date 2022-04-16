import React from 'react'
import {Field} from 'formik'

export default function Info() {
  return (
    <React.Fragment>
        <div className="mb-3">
        <label className="form-label">First Name, Last Inital</label>
        <Field type="text" className="form-control" name="name" aria-describedby="nameHelp" />
        <div id="nameHelp" className="form-text">example: James C., Bobby S.</div>
    </div>
    <div className="mb-3">
        <label className="form-label">Email</label>
        <div className="input-group ">
        <Field type="text" className="form-control" name="email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span className="input-group-text" id="basic-addon2">@northbergen.k12.nj.us</span>
        </div>
    </div>

    <div className="form-check">
        <Field className="form-check-input" type="radio" name="bagel" value="Yes" />
        <label className="form-check-label">
        Bagel
        </label>
    </div>
    <div className="form-check">
        <Field className="form-check-input" type="radio" name="bagel" value="No" />
        <label className="form-check-label">
        Nah, I am okay
        </label>
    </div>
  </React.Fragment>
  )
}
