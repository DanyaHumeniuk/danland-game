import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="relative lg:top-12 top-32">
        <motion.div className="text-white flex items-center justify-center text-4xl lg:text-6xl font-thin tracking-tight">
            Welcome to DanLand!
        </motion.div>
    </div>
  )
}

export default Navbar