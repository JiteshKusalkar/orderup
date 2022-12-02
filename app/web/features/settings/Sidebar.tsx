import NavLink from "../../../components/NavLink";
import Inventory from "../../assets/icons/Inventory";

const size = 16;

const Sidebar = () => {
  return (
    <section>
      <h3 className="text-lg text-purple-300 my-4">Settings</h3>
      <ul className="text-center">
        <li>
          <NavLink href="/settings/inventory" activeClassName="bg-purple-500">
            <div className="flex items-center rounded-md p-3">
              <Inventory width={size} height={size} fill="white" />
              <span className="text-sm ml-2">Inventory</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
