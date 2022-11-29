import { useMemo } from "react";
import { CellProps, Column } from "react-table";
import { Tenant } from "../../api/tenant";
import Table from "../../components/Table";
import useTranslate from "../../hooks/useTranslate";
import styles from "./tenant-list.module.css";

interface TenantListProps {
  tenants: Tenant[];
  onRowClick: (tenant: Tenant) => void;
}

function TenantList({ tenants, onRowClick }: TenantListProps) {
  const t = useTranslate();
  const columns: Array<Column<Tenant>> = useMemo(
    () => [
      /* {
        accessor: "config",
        Header(): JSX.Element {
          return <span className={styles.serialNumber}>Sr No</span>;
        },
        Cell(props: CellProps<Tenant>): JSX.Element {
          return (
            <span className={styles.serialNumber}>{props.row.index + 1}</span>
          );
        },
        maxWidth: 100,
      }, */
      {
        Header: "Tenant",
        accessor: "name",
      },
      {
        Header: "",
        accessor: "id",
        Cell(props: CellProps<Tenant>): JSX.Element {
          return (
            <div
              className="cursor-pointer"
              onClick={() => {
                onRowClick(props.row.original);
              }}
            >
              Edit
            </div>
          );
        },
        maxWidth: 100,
      },
    ],
    [onRowClick]
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
