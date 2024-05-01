import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }: Readonly<{children: React.ReactNode;}>) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    // const isLogged = useSelector((state: any) => state.auth.isLogged);

    useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
    else {
        setLoading(false);
    }
  }, []);

   return <>{loading ? null : children}</>;
};

export default PrivateRoute;
