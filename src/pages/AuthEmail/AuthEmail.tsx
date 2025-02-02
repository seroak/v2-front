import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_APP_BACKEND_BASE_URL;
const AuthEmail = () => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      // 쿼리 스트링에서 값을 추출
      const email = searchParams.get("email");
      if (!email) {
        console.error("No email found in query string");
        return;
      }

      try {
        // 쿼리 스트링 값을 fetch 요청에 포함
        const response = await fetch(`${BASE_URL}/edupi-user/v1/account/activate`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        if (!response.ok) {
          throw await response.json();
        }
        /*
         * TODO: 백앤드 코드가 변경되어 json응답이 오면아래 코드를 활성화합니다.
         */
        // const result = await response.json();

        // 데이터가 성공적으로 받아졌다면 리다이렉트
        navigate("/login");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default AuthEmail;
