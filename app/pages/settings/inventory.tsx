import { ReactElement } from "react";
import { SettingsLayout } from ".";
import nestLayout, { NextPageWithLayout } from "../../utils/nestLayout";

const Inventory: NextPageWithLayout = () => {
  return <div>Inventory</div>;
};

const getLayout = (page: ReactElement) => page;

export const InventoryLayout = nestLayout(SettingsLayout, getLayout);

Inventory.getLayout = InventoryLayout;

export default Inventory;
