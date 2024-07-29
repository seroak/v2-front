import { http, HttpResponse } from "msw";
import successForAndPrintResponseBody from "./samples/successForAndPrintResponseBody.json";

interface User {
  userId: string;
  userPassword: string;
}

export const handlers = [
  http.post("/v1/python", () => {
    return HttpResponse.json(successForAndPrintResponseBody);
  }),
  http.post("http://localhost:8000/login", async ({ request }) => {
    const { userId, userPassword } = (await request.json()) as User;

    // 간단한 인증 로직을 구현
    if (userId === "test" && userPassword === "test") {
      return HttpResponse.json(
        {
          success: true,
          message: "로그인 성공",
          user: { id: userId, name: "테스트 사용자" },
        },
        { status: 200 }
      );
    } else {
      return HttpResponse.json(
        {
          success: false,
          message: "아이디 또는 비밀번호가 잘못되었습니다",
        },
        { status: 401 }
      );
    }
  }),
];
