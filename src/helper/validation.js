import * as yup from "yup";

export const mySchema = yup.object().shape({
  name: yup.string().typeError("Must be a string!").required("Required"),
  secondName: yup
    .string()
    .typeError("Must be a string!")
    .required("Required"),
  password: yup
  .string()
  .typeError("Must be a string!")
  .min(6, "Password is too short - should be 6 chars and more!")
  .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must be the same!")
    .required("Required"),
});

