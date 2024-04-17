import { Suspense } from "react";
import { Footer, FooterLinks, Navbar, Preloader } from "@/components";

const ClientLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}>{children}</Suspense>

      <Suspense>
        <FooterLinks />
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </Suspense>
  );
};

export default ClientLayout;
