import Layout from "../components/Layout";
import Card from "../components/Card";

const About = () => {
    return (
        <Layout>
            <Card title="About This App">
            <p className="text-gray-600">
                This app demonstrates reusable React components, props, and layout management.
            </p>
            </Card>
        </Layout>
    )
}

export default About;
