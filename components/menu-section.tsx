"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const categories = ["Todo", "Entradas", "Platos Fuertes", "Hamburguesas", "Varios"]

const menuItems = [
  {
    name: "Chile con Carne",
    price: "$6.99",
    category: "Entradas",
    description: "150gr de chile con carne, queso gratinado + nachos",
    image: "/comida/chile-con-carne.jpg",
  },
  {
    name: "Deditos de Pollo",
    price: "$4.50",
    category: "Entradas",
    description: "4 unidades, Papas Fritas, salsa golf o rach",
    image: "/comida/deditos-pollo.avif",
  },
  {
    name: "Lomo Fino",
    price: "$10",
    category: "Platos Fuertes",
    description: "250gr de lomo, Papas Fritas, Ensalada(verde o col)",
    image: "/comida/lomo-fino.jpg",
  },
  {
    name: "Hamburguesa BBQ",
    price: "$7.99",
    category: "Hamburguesas",
    description: "Pan, 180gr de carne, salsa BBQ, Tocino, Queso, Lechuga, Tomate, Papas Fritas ",
    image: "/comida/hambuergesa-BBQ.jpg",
  },
  {
    name: "Picaña",
    price: "$10.99",
    category: "Varios",
    description: "Corte de carne americano, acompañado de ensalda, y Papas Fritas",
    image: "/comida/picaña.jpg",
  },
  {
    name: "Nachos",
    price: "$7.99",
    category: "Varios",
    description: "Nachos, Carne, Queso, Pasta de Frejol,Pico de Gallo, Guacamole",
    image: "/comida/nachos.jpg",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const animationItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todo")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const filteredItems = menuItems.filter((item) => selectedCategory === "Todo" || item.category === selectedCategory)

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        className="wood-pattern rounded-lg p-8 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-white">Nuestro Menú</h2>

        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-lg"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.name}
              variants={animationItem}
              onHoverStart={() => setHoveredItem(item.name)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Card className="bg-card-bg border-primary overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-white/80 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
                      hoveredItem === item.name ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-lg text-black text-center">{item.description}</p>
                    <p className="text-2xl font-bold text-primary mt-2">{item.price}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-center">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">{item.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

