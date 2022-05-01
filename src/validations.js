import * as Yup from 'yup';

export default [Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .matches(/^.*\s\w.$/, 'First Name, Last Inital')
      .max(50, 'Too Long!')
      .required('Required'),
    passcode: Yup.string()
      .min(4, 'Too Short!')
      .max(4, 'Too Long!')
      .required('Required'),
    bagel: Yup.string()
          .required('Selection Required')
  }),
  Yup.object().shape({
    bagelType: Yup.string()
      .required('Required')
      .notOneOf(["Select an option"],'Selection Required'),
    spreadType: Yup.string()
      .required('Required')
      .notOneOf(["Select an option"],'Selection Required'),
  }),
  Yup.object().shape({
    demoType: Yup.string()
      .required('Required')
  })
]
  