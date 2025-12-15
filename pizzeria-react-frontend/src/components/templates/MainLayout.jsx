import Navbar from "../organisms/Navbar";

function MainLayout({ children }) {
  return (
    <div className="w-full">
      <Navbar />

      <main className="pt-28 px-2">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
