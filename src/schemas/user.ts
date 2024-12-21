import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, {
    message: "姓名至少需要2个字符",
  }),
  email: z.string().email({
    message: "请输入有效的邮箱地址",
  }),
  phone: z.string().regex(/^1[3-9]\d{9}$/, {
    message: "请输入有效的手机号码",
  }),
  age: z.number().min(1).max(120, {
    message: "请输入有效的年龄（1-120岁）",
  }).nullable().transform((val) => val || null),
  occupation: z.string().optional(),
  hobbies: z.string().optional(),
});

export type UserFormData = z.infer<typeof userSchema>; 