import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", backgroundColor: "#fff", padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
