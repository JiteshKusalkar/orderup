import { useMemo } from "react";
import { CellProps, Column } from "react-table";
import Table from "../../components/Table";
import useTranslate from "../../hooks/useTranslate";
import styles from "./tenant-list.module.css";

interface Tenant {
  id: string;
  name: string;
  config: Record<string, string>;
}

interface TenantListProps {
  tenants: Tenant[];
}

function TenantList({ tenants }: TenantListProps) {
  const t = useTranslate();
  const columns: Array<Column<Tenant>> = useMemo(
    () => [
      {
        accessor: "id",
        Header(): JSX.Element {
          return <span className={styles.serialNumber}>Sr No</span>;
        },
        Cell(props: CellProps<Tenant>): JSX.Element {
          return (
            <span className={styles.serialNumber}>{props.row.index + 1}</span>
          );
        },
        maxWidth: 100,
      },
      {
        Header: "Tenant",
        accessor: "name",
      },
      {
        Header: "",
        accessor: "config",
        Cell(): JSX.Element {
          return <span>Edit</span>;
        },
        maxWidth: 100,
      },
    ],
    []
  );

  return tenants?.length > 0 ? (
    <Table data={tenants} columns={columns} />
  ) : (
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
  );
}

export default TenantList;
