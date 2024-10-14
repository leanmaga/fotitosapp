import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";

async function loadUsers() {
  try {
    await connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
    return []; // Devuelve un arreglo vacío en caso de error
  }
}

async function HomePage() {
  const users = await loadUsers();
  return (
    <>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}

export default HomePage;
