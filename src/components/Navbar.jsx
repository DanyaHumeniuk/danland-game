import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="relative top-32">
        <motion.div className="text-white flex items-center justify-center text-4xl font-thin tracking-tight">
            Welcome to DanLand!
        </motion.div>
    </div>
  )
}

export default Navbar