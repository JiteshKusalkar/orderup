import Image from "next/image";
import { ReactElement } from "react";
import { SettingsLayout } from ".";
import Button from "../../components/Button";
import useTranslate from "../../hooks/useTranslate";
import nestLayout, { NextPageWithLayout } from "../../utils/nestLayout";
import EmptyImage from "../../web/assets/illustrations/empty.svg";

import styles from "./inventory.module.css";

const Inventory: NextPageWithLayout = () => {
  const t = useTranslate();

  return (
    <main className="p-4 min-h-screen flex flex-col">
      <div className={styles.headline}>
        <h1 className="text-2xl">{t("settings.inventory.headline")}</h1>
        <Button onClick={() => null}>
          {t("settings.inventory.addInventory.buttonLabel")}
        </Button>
      </div>

      <div className={styles.noData}>
        <Image
          src={EmptyImage}
          alt={t("settings.inventory.addInventory.imageAlt")}
          width={256}
          height={256}
        />
        <p className="text-lg">
          {t("settings.inventory.addInventory.noDataMessage")}
        </p>
      </div>
    </main>
  );
};

const getLayout = (page: ReactElement) => page;

export const InventoryLayout = nestLayout(SettingsLayout, getLayout);

Inventory.getLayout = InventoryLayout;

export default Inventory;
