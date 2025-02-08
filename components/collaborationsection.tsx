"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const collaborations = [
  { name: "Rock&Reilly's", logo: "/sellos/local.png" },
  { name: "Instituto Yavirac", logo: "/sellos/intituto.png" },
  { name: "YEC", logo: "/sellos/Yec.png" },
]

export function CollaborationSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        className="bg-black/90 rounded-xl p-8 space-y-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-white">Collaboration</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborations.map((collab, index) => (
            <motion.div
              key={collab.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border border-gray-500/50 bg-black/30 rounded-xl h-56 flex flex-col justify-center items-center transition-transform hover:scale-105 shadow-md">
                <CardContent className="flex justify-center items-center">
                  <Image
                    src={collab.logo || "/placeholder.svg"}
                    alt={`Logo de ${collab.name}`}
                    width={140}
                    height={140}
                    className="object-contain rounded-lg"
                  />
                </CardContent>
                <CardHeader className="text-center pt-2">
                  <CardTitle className="text-white text-sm opacity-85">{collab.name}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
