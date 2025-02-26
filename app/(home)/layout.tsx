
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

async function HomeLayout({
      children,
}:{
      children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
