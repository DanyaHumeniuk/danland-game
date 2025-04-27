import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="relative top-32">
        <motion.div className="text-white flex items-center justify-center text-2xl md:text-4xl sm:text-3xl font-thin tracking-tight">
            Welcome to DanLand!
        </motion.div>
    </div>
  )
}

export default Navbar