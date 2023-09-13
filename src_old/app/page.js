import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Sidebar from "@/components/layout/Sidebar"
import "./page.css"

const Home = () => {
  return (
    <>
    <Header/>
    <div id = "sidebar">
    <Sidebar/>
    <h1>Olá Mudo</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Home