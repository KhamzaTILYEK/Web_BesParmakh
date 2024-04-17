import { useEffect, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider, FilterProvider, LayoutProvider } from "@/context";
const ShopProvider = lazy(() => import("@/context/useShoppingContext"));

const AppProvidersWrapper = ({ children }) => {
  const handleChangeTitle = () => {
    if (document.visibilityState == "hidden")
      document.title = "Please come back to Bes Parmakh";
    else
      document.title = "Bes Parmakh";
  };

  useEffect(() => {
    import("preline");

    document.addEventListener("visibilitychange", handleChangeTitle);
    return () => {
      document.removeEventListener("visibilitychange", handleChangeTitle);
    };
  }, []);

  return (
    <HelmetProvider>
      <LayoutProvider>
        <AuthProvider>
          <ShopProvider>
            <FilterProvider>{children}</FilterProvider>
          </ShopProvider>
        </AuthProvider>
      </LayoutProvider>
    </HelmetProvider>
  );
};
export default AppProvidersWrapper;
