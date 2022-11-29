import { SubmitHandler, useFormContext } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import useTranslate from "../../hooks/useTranslate";
import { TenantFormData } from "./useTenantForm";

interface TenantFormProps {
  isOpen: boolean;
  isEditMode: boolean;
  onSubmit: SubmitHandler<TenantFormData>;
  onClose: () => void;
}

function TenantFormModal({
  isOpen,
  isEditMode,
  onClose,
  onSubmit,
}: TenantFormProps) {
  const t = useTranslate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<TenantFormData>();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      header={<div>{isEditMode ? "Edit" : "Add"} tenant</div>}
      footer={
        <Button form="tenant" type="submit" className="self-end">
          {isEditMode ? "Save" : "Submit"}
        </Button>
      }
    >
      <pre>{JSON.stringify(isEditMode, null, 2)}</pre>
      <form
        id="tenant"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3"
      >
        <Input
          label={t("dashboard.tenantManager.modal.form.name")}
          type="text"
          id="name"
          required
          {...register("name")}
          error={errors.name?.message}
        />
      </form>
    </Modal>
  );
}

export default TenantFormModal;
