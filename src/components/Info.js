import React from 'react'
import { Field } from 'formik'

import { db } from '../firebase.config';
import { collection, where, query, getDocs} from "firebase/firestore";


async function getData(passcode) {
  console.log("running query");
  console.log(passcode)
  const passcodesCollectionRef = collection(db, "passcodes")
  const q = query(passcodesCollectionRef, where('pass',"==", passcode));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size> 0){
    return querySnapshot.docs[0].id;
  } else {
    return 0;
  }
 
}

export default function Info(values) {
  console.log(values);
  return (
    
    <React.Fragment>
    <div className="space-y-8">
      <div className="w-full max-w-xs">
          <label className="block text-gray-700 text-lg font-bold mb-2">First Name, Last Inital</label>
          <Field type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="name" aria-describedby="nameHelp" />
          <div id="nameHelp" className="form-text">example: James C, Bobby S, Jane D</div>
          <div className="text-red-600">{values.errors.name }</div>
      </div>
      <div className="max-w-xs">
          <label className="block text-gray-700 text-lg font-bold mb-2">Special Code</label>
          <div className="flex flex-row space-x-4">
            <Field type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="passcode" aria-label="code" aria-describedby="basic-addon2" />
            <button type="button" className="mt-1 border-red-30 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded" onClick={()=> getData(values.values.passcode).then(res => {
            alert(res);})}>Validate</button>
          </div>
          <div className="text-red-600">{values.errors.passcode}</div>
      </div>
        <div>
          <label className="block text-gray-700 text-lg font-bold mb-2">Would you like a bagel?</label>
          <div>Order will be placed with <a rel="noreferrer" className ="font-medium hover:underline" href="https://www.hobokenhotbagels.com/" target="_blank">Hoboken Hot Bagels</a> </div>
          <div className="form-check py-2">
              <Field className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="bagel" value="Yes" />
              <label className="form-check-label inline-block text-gray-800 text-xl">
                Bagel
              </label>
          </div>
          <div className="form-check py-2">
              <Field className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="bagel" value="No" />
              <label className="form-check-label inline-block text-gray-800 text-xl">
                No, but thank you
              </label>
        </div>
        <div className="text-red-600">{values.errors.bagel}</div>
      </div>
    </div>
  </React.Fragment>
  )
}
