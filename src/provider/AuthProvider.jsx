import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
import { Center, Spinner } from "@chakra-ui/react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  useEffect(() => {
    const tokenFromCookie = cookies.jwt;
    if (tokenFromCookie) {
      setToken(tokenFromCookie);
      try {
        const decoded = jwtDecode(tokenFromCookie);
      } catch (err) {
        <Center w="100vw" h="100vh">
          <Spinner />
        </Center>;
      }
    }
  }, [cookies]);

  const login = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const decoded = jwtDecode(tokenStr);
      setUser(decoded);

      const currentTime = Math.floor(Date.now() / 1000);
      const expiresIn = decoded.exp - currentTime;

      if (expiresIn > 0) {
        setCookie("jwt", tokenStr, {
          path: "/",
          maxAge: expiresIn,
          sameSite: true,
          secure: true,
        });
      } else {
        logout();
      }
      return;
    }

    logout();
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookie("jwt", { path: "/" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
