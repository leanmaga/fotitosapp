import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";

async function loadUsers() {
  await connectDB();
  const users = await User.find();
  return users;
}

async function HomePage() {
  const users = await loadUsers();
  console.log(users);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default HomePage;
