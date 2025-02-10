"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center wood-pattern rounded-lg p-8">
        {/* Contenido de texto */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary">Rock&Reilly's Ecuador</h2>
          {/* Logo centrado debajo del título */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/sellos/local.png"
              alt="Rock&Reilly's Logo"
              className="w-45 h-auto"
            />
          </div>
          <p className="text-lg">
            Welcome to Rock&Reilly's, where great music meets the best food. A unique space in
            Quito that combines a rock atmosphere with an exceptional gastronomic experience.
          </p>
          <br />
          <a className="text-secondary" href="https://maps.app.goo.gl/oC2wEgQAuF6UMTiTA">
            📍 Cóndor Ñan Oe2-283 y Rupay Esq. Sector Quitumbe, Quito Ecuador
          </a>
        </div>

        {/* Carrusel de imágenes */}
        <Carousel className="w-full max-w-lg mx-auto">
          <CarouselContent>
            {["/carrusel/imagen1.jpg", "/carrusel/imagen2.jpg", "/carrusel/imagen3.jpg"].map(
              (src, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
