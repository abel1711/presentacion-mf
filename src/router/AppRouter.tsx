import { AnimatePresence } from "framer-motion"
import { Sidebar } from "../components/sidebar/Sidebar"
import { AboutScreen } from "../pages/about/AboutScreen"
import { ContactoScreen } from "../pages/contacto/ContactoScreen"
import { Footer } from "../pages/footer/Footer"
import { LoadingScreen } from "../pages/loading/LoadingScreen"
import { MisionScreen } from "../pages/mision/MisionScreen"
import { ObjetivosScreen } from "../pages/objetivos/ObjetivosScreen"
import { ServiciosScreen } from "../pages/servicios/ServiciosScreen"

export const AppRouter = () => {
  return (
    <AnimatePresence>
        <Sidebar />
        <AboutScreen />
        <ObjetivosScreen />
        <MisionScreen />
        <ServiciosScreen />
        <ContactoScreen />
        <Footer />
        {/* <LoadingScreen /> */}
    </AnimatePresence>
  )
}
