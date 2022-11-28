import Button from "../../components/Button";
import useTranslate from "../../hooks/useTranslate";
import styles from "./tenant-manager.module.css";
import TenantList from "./TenantList";

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

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h1 className="text-2xl">
          {t("dashboard.tenantManager.addTenant.headline")}
        </h1>
        <Button>{t("dashboard.tenantManager.addTenant.buttonLabel")}</Button>
      </div>
      <TenantList tenants={tenants} />
    </div>
  );
}

export default TenantManager;
