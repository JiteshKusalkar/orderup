import { useCallback, useState } from "react";
import { FormProvider, SubmitHandler } from "react-hook-form";
import { Tenant } from "../../api/tenant";
import Button from "../../components/Button";
import useTranslate from "../../hooks/useTranslate";
import styles from "./tenant-manager.module.css";
import TenantFormModal from "./TenantFormModal";
import TenantList from "./TenantList";
import useTenantForm, { TenantFormData } from "./useTenantForm";

const tenants = [
  {
    id: "1",
    name: "Coffee & Coconuts Co.",
    config: {},
  },
  {
    id: "2",
    name: "Twenty Eight Co.",
    config: {},
  },
];

function TenantManager() {
  const t = useTranslate();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const methods = useTenantForm();

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
    setIsEditMode(false);
    methods.reset({ name: "" });
  }, [methods]);

  const handleRowClick = useCallback(
    (tenant: Tenant) => {
      methods.reset({ name: tenant.name });
      setIsEditMode(true);
      setIsOpen(true);
    },
    [methods]
  );

  const handleSubmit: SubmitHandler<TenantFormData> = useCallback((data) => {
    console.log("data submitted", data);
    methods.reset({ name: "" });
    setIsEditMode(false);
    setIsOpen(false);
  }, [methods]);

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h1 className="text-2xl">
          {t("dashboard.tenantManager.addTenant.headline")}
        </h1>
        <Button onClick={toggleModal}>
          {t("dashboard.tenantManager.addTenant.buttonLabel")}
        </Button>
      </div>
      <TenantList tenants={tenants} onRowClick={handleRowClick} />
      <FormProvider {...methods}>
        <TenantFormModal
          isOpen={isOpen}
          isEditMode={isEditMode}
          onSubmit={handleSubmit}
          onClose={toggleModal}
        />
      </FormProvider>
    </div>
  );
}

export default TenantManager;
