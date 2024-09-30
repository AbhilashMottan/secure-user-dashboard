import { useAuthStore } from '../store/authStore';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h1>Welcome to the Dashboard, {user?.email}</h1>
    </div>
  );
};

export default Dashboard;
