import Button from "../../components/Button";
import useTranslate from "../../hooks/useTranslate";

function TenantManager() {
  const t = useTranslate();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>{t("dashboard.tenantManager.addTenant.headline")}</h1>
        <Button>{t("dashboard.tenantManager.addTenant.buttonLabel")}</Button>
      </div>
    </div>
  );
}

export default TenantManager;
