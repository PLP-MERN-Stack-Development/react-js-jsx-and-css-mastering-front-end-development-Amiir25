import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { fetchPosts } from "../utils/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPosts(page);
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [page]);

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Public Posts 📚</h2>

        <div className="mb-6 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        {loading && <Loader />}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} title={post.title}>
                <p className="text-gray-600">{post.body}</p>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="secondary"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="font-medium">Page {page}</span>
          <Button variant="secondary" onClick={() => setPage((p) => p + 1)}>
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
