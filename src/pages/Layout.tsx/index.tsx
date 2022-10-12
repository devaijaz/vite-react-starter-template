import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export function AppLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="h-[calc(100vh_-_88px)] min-h-[30rem] p-2">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
