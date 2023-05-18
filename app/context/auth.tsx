import { useRouter, useSegments } from "expo-router";
import React from "react";

type AuthContext = {
  signIn: () => void;
  signOut: () => void;
} | null;

const AuthContext = React.createContext<AuthContext>(null);
// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: boolean) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

export function Provider(props: { children: React.ReactNode }) {
  const [user, setAuth] = React.useState(false);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn:  () => {
          console.log("running sign in");
          setAuth(true);
        },
        signOut: () => setAuth(false),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
