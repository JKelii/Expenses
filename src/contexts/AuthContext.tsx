// import { useState, createContext } from "react";

// type AuthContextType = {
//   email: string | undefined;
//   setUser: (user: { email: string; accessToken: string }) => void;
//   accessToken: string | undefined;
// };
// export const AuthContext = createContext<undefined | AuthContextType>(
//   undefined
// );

// export const AuthProvider = ({ children }: { children: JSX.Element }) => {
//   const [auth, setAuth] = useState<
//     | {
//         email: string;
//         accessToken: string;
//       }
//     | undefined
//   >(undefined);
//   const setUser = (user: { email: string; accessToken: string }) => {
//     setAuth(user);
//   };
//   return (
//     <AuthContext.Provider value={{ setUser, ...auth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
