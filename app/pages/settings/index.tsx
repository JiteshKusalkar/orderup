import { ReactElement } from "react";
import { NextPageWithLayout } from "../../utils/nestLayout";
import Sidebar from "../../web/features/settings/Sidebar";

export function SettingsLayout(page: ReactElement) {
  return (
    <div className="min-h-screen flex">
      <div className="w-[300px] bg-purple-700 text-white p-4">
        <Sidebar />
      </div>
      <div className="w-[calc(100vw_-_300px)]">{page}</div>
    </div>
  );
}

const Settings: NextPageWithLayout = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-[calc(100vw_-_300px)]">Content</div>
    </div>
  );
};

Settings.getLayout = SettingsLayout;

export default Settings;
