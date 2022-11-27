import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface LoginFormData {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required("Required!"),
  password: yup.string().required("Required!"),
});

function useLoginForm() {
  return useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });
}

export default useLoginForm;
