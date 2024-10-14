import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    console.log("Conexión a la base de datos exitosa");

    const users = await User.find();
    console.log("Usuarios encontrados:", users);

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error en la ruta GET:", error);
    return NextResponse.json(
      { error: "Error al obtener usuarios" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await connectDB();
  const data = await request.json();

  const users = await User.create(data);
  return NextResponse.json(users);
}
