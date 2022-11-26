import TenantManager from "./TenantManager";
import styles from './dashboard.module.css';

function Dashboard() {
  return (
    <main className="min-h-screen">
      <header className={styles.header}>
        <h1 className="text-xl">Order up admin</h1>
      </header>
      <TenantManager />
    </main>
  );
}

export default Dashboard;
