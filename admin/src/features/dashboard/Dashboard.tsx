import TenantManager from "./TenantManager";
import styles from "./dashboard.module.css";
import Button from "../../components/Button";
import useAuth from "../../store/auth";

function Dashboard() {
  const setUser = useAuth((state) => state.setUser);

  const handleLogout = () => setUser(null);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className="text-xl">Order up admin</h1>
        <Button variant="default" className="text-white" onClick={handleLogout}>
          Logout
        </Button>
      </header>
      <TenantManager />
    </main>
  );
}

export default Dashboard;
