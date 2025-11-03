import Layout from "../components/Layout";
import TaskManager from "../components/TaskManager";

const Home = () => (
  <Layout>
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-4">Task Management 📝</h2>
      <TaskManager />
    </div>
  </Layout>
);

export default Home;
