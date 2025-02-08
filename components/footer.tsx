"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Music2, CreditCard } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/rockandreillys2018/", delay: 0.1 },
  { icon: Instagram, href: "https://www.instagram.com/rockandreillys2018/", delay: 0.2 },
]

export function Footer() {
  return (
    <footer className="wood-pattern mt-12">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <Music2 className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-primary">Rock&Reilly's</h2>
          </motion.div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: social.delay }}
                whileHover={{ scale: 1.2 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <CreditCard className="h-6 w-6 text-secondary" />
            </motion.div>
          </div>

          <motion.div
            className="text-center text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>We accept all credit cards</p>
            <p className="mt-2">© 2025 Rock&Reilly's - Contributed by YEC</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
