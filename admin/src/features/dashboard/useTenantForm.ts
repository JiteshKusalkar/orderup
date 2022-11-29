import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface TenantFormData {
  name: string;
}

export const TENANT_NAME_MAX_LIMIT = 100;

const schema = yup.object({
  name: yup
    .string()
    .required("Required!")
    .test(
      "len",
      `Cannot exceed ${TENANT_NAME_MAX_LIMIT} characters`,
      (name: string | undefined): boolean =>
        (name || "").length < TENANT_NAME_MAX_LIMIT
    ),
});

function useTenantForm() {
  return useForm<TenantFormData>({
    defaultValues: { name: "" },
    resolver: yupResolver(schema),
  });
}

export default useTenantForm;
