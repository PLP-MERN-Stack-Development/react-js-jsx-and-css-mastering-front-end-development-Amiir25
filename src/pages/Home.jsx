import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Welcome Home 🏠</h2>
        <Card title="Reusable Components Demo">
          <p className="text-gray-600 mb-4">This card uses reusable components.</p>
          <div className="flex space-x-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
