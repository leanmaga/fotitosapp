import { connectDB } from "@/libs/mongodb";
import user from "@/models/user";

async function loadUsers() {
  await connectDB();
  const users = await user.find();
  return users;
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
