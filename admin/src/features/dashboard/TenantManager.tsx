import Button from "../../components/Button";
import useTranslate from "../../hooks/useTranslate";
import styles from "./tenant-manager.module.css";

function TenantManager() {
  const t = useTranslate();

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h1 className="text-2xl">
          {t("dashboard.tenantManager.addTenant.headline")}
        </h1>
        <Button>{t("dashboard.tenantManager.addTenant.buttonLabel")}</Button>
      </div>
      <div className={styles.noData}>
        <img
          src="/assets/illustrations/empty.svg"
          alt={t("dashboard.tenantManager.addTenant.imageAlt")}
          className="w-64 h-64"
        />
        <p className="text-lg">
          {t("dashboard.tenantManager.addTenant.noDataMessage")}
        </p>
      </div>
    </div>
  );
}

export default TenantManager;
