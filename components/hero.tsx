"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center wood-pattern rounded-lg p-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">Rock&Reilly's Ecuador</h2>
          <p className="text-lg">
            Bienvenidos a Rock&Reilly's, donde la buena música se encuentra con la mejor comida. Un espacio único en
            Quito que combina el ambiente rockero con una experiencia gastronómica excepcional.
          </p>
          <p className="text-secondary">📍 Cóndor Ñan Oe2-283 y Rupay Esq. Sector Quitumbe, Quito Ecuador</p>
        </div>
        <Carousel className="w-full max-w-lg mx-auto">
          <CarouselContent>
            {["/carrusel/imagen1.jpg", "/carrusel/imagen2.jpg", "/carrusel/imagen3.jpg"].map((src, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={src}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
