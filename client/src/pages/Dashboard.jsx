import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-64">
        <h1 className="text-4xl font-extrabold text-gray-900 pb-4">Welcome</h1>
        <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400 pb-4">
          This is your dashboard. You can see your courses Analytics here and
          also your progress.{" "}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
