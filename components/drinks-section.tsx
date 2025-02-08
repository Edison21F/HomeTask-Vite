"use client"

import { motion } from "framer-motion"
import { Beer, Wine, CoffeeIcon as Cocktail, Flame } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const drinks = [
  {
    title: "Beers",
    icon: Beer,
    items: ["National", "Imported", "Craft"],
  },
  {
    title: "Micheladas",
    icon: Wine,
    items: ["Classic", "Special", "Rock&Reilly's"],
  },
  {
    title: "Cocktails",
    icon: Cocktail,
    items: ["Mojito", "Margarita", "Long Island"],
  },
  {
    title: "Shots",
    icon: Flame,
    items: ["Tequila", "Jägermeister", "Whiskey"],
  },
]

export function DrinksSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        className="wood-pattern rounded-lg p-8 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-white">Drinks</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card-bg border-primary card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <drink.icon className="h-6 w-6" />
                    {drink.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {drink.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        className="text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
