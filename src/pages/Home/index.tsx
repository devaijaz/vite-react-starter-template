import { useFetch } from "./api";

function HomePage() {
  const { loading, error, users } = useFetch("https://jsonplaceholder.typicode.com/users");
  if (error) {
    return <p className="text-red-600 text-2xl">{error}</p>;
  }
  if (loading) {
    return <h2 className="text-4xl">Loading.... </h2>;
  }
  return (
    <div className="container" data-testid="home-page">
      <h1>React Vite Template</h1>
      <table width="100%" border={1}>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default HomePage;
