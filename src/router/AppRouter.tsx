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
        <Sidebar key={'sidebar'} />
        <AboutScreen key={'about'}/>
        <ObjetivosScreen key={'objetivos'}/>
        <MisionScreen key={'mision'}/>
        <ServiciosScreen key={'servicios'}/>
        <ContactoScreen key={'contacto'}/>
        <Footer key={'footer'}/>
        {/* <LoadingScreen key={'loading'}/> */}
    </AnimatePresence>
  )
}
