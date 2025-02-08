"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const categories = ["All", "Appetizers", "Main Dishes", "Burgers", "Others"]

const menuItems = [
  {
    name: "Chile with Beef",
    price: "$6.99",
    category: "Appetizers",
    description: "150g of chili with beef, melted cheese, and crispy nachos.",
    image: "/comida/chile-con-carne.jpg",
  },
  {
    name: "Chicken Fingers",
    price: "$4.50",
    category: "Appetizers",
    description: "4 pieces with fries and ranch or golf sauce.",
    image: "/comida/deditos-pollo.avif",
  },
  {
    name: "Filet Mignon",
    price: "$10",
    category: "Main Dishes",
    description: "250g of filet with fries and salad (green or coleslaw).",
    image: "/comida/lomo-fino.jpg",
  },
  {
    name: "BBQ Burger",
    price: "$7.99",
    category: "Burgers",
    description: "Artisan bun, 180g beef patty, BBQ sauce, bacon, cheese, lettuce, tomato, and fries.",
    image: "/comida/hamburguesa-BBQ.jpg",
  },
  {
    name: "Picaña",
    price: "$10.99",
    category: "Others",
    description: "American-style beef cut with fresh salad and fries.",
    image: "/comida/picaña.jpg",
  },
  {
    name: "Nachos",
    price: "$7.99",
    category: "Others",
    description: "Nachos with beef, melted cheese, bean paste, pico de gallo, and guacamole.",
    image: "/comida/nachos.jpg",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const animationItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredItems = menuItems.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        className="wood-pattern rounded-lg p-8 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-white">Our Menu</h2>

        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <motion.div key={category} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-lg transition-colors duration-300"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" animate="show">
          {filteredItems.map((item) => (
            <motion.div key={item.name} variants={animationItem}>
              <Card className="bg-card-bg border-primary overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`Image of the dish ${item.name}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg text-white text-center">{item.description}</p>
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
