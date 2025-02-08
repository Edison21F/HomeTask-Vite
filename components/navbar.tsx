"use client"

import { Music2 } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 wood-pattern"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <Music2 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-primary">Rock&Reilly's</h1>
        </motion.div>
        <motion.div
          className="text-lg font-semibold text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ¡Bienvenidos!
        </motion.div>
      </div>
    </motion.nav>
  )
}

