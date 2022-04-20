import React from 'react'
import {Field} from 'formik'

export default function Info() {
  return (
    <React.Fragment>
    <div className="w-full max-w-xs">
        <label className="block text-gray-700 text-lg font-bold mb-2">First Name, Last Inital</label>
        <Field type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="name" aria-describedby="nameHelp" />
        <div id="nameHelp" className="form-text">example: James C., Bobby S.</div>
    </div>
    <div className="w-full max-w-xs py-6">
        <label className="block text-gray-700 text-lg font-bold mb-2">Email</label>
        <div className="input-group ">
        <Field type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span className="input-group-text" id="basic-addon2">@northbergen.k12.nj.us</span>
        </div>
    </div>

    <label className="block text-gray-700 text-lg font-bold mb-2">Would you like a bagel?</label>
    <div className="form-check py-2">
        <Field className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="bagel" value="Yes" />
        <label className="form-check-label inline-block text-gray-800 text-xl">
          Bagel
        </label>
    </div>
    <div className="form-check py-2">
        <Field className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="bagel" value="No" />
        <label className="form-check-label inline-block text-gray-800 text-xl">
          No, but thank you
        </label>
    </div>
  </React.Fragment>
  )
}
