import { NextResponse } from "next/server";
import { connectDB, User } from "@/lib/db";
import { userSchema } from "@/schemas/user";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 验证数据
    const validatedData = userSchema.parse(body);
    
    // 连接数据库
    await connectDB();
    
    // 创建新用户
    const user = await User.create(validatedData);
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("API错误:", error);
    return NextResponse.json(
      { error: "提交失败，请检查输入数据" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    // 连接数据库
    await connectDB();
    
    // 获取所有用户
    const users = await User.find().sort({ createdAt: -1 });
    
    return NextResponse.json(users);
  } catch (error) {
    console.error("API错误:", error);
    return NextResponse.json(
      { error: "获取用户列表失败" },
      { status: 500 }
    );
  }
} 