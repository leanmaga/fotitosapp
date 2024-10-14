// pages/index.js
import { useEffect, useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); // Llama a tu API
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>HOME PAGE</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Bio: {user.bio}</p>
            {user.profile_picture && (
              <img src={user.profile_picture} alt={user.name} width={100} />
            )}
            <div>
              {user.social_links && (
                <>
                  {user.social_links.twitter && (
                    <a
                      href={user.social_links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  )}
                  {user.social_links.instagram && (
                    <a
                      href={user.social_links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  )}
                  {user.social_links.facebook && (
                    <a
                      href={user.social_links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
