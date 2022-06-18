import { AnimatePresence } from "framer-motion"
import { AboutScreen } from "../pages/about/AboutScreen"
import { LoadingScreen } from "../pages/loading/LoadingScreen"
import { MisionScreen } from "../pages/mision/MisionScreen"
import { ObjetivosScreen } from "../pages/objetivos/ObjetivosScreen"
import { ServiciosScreen } from "../pages/servicios/ServiciosScreen"

export const AppRouter = () => {
  return (
    <AnimatePresence>
        {/* <AboutScreen />
        <ObjetivosScreen />
        <MisionScreen />
        <ServiciosScreen /> */}
        <LoadingScreen />
    </AnimatePresence>
  )
}
