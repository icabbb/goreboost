"use client"
import NavBoost from '@/components/navbar';
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

function Page() {
    return (
        <div>
            <NavBoost />
            <div className="h-20" />

            <GameCarouselSection />
        </div>
    );
}

export default Page;

function GameCarouselSection() {
    return (
        <section className="w-full relative h-full">
            <GameCarouselHeader />
            <Carousel className="container px-4 sm:px-6 lg:px-8 z-10 relative">
                <GameCarouselContent />
                <CarouselPrevious className="bg-purple-500 border-main" />
                <CarouselNext className="bg-purple-500 border-main" />
            </Carousel>
        </section>
    );
}

function GameCarouselHeader() {
    return (
        <div className="pb-10 z-10">
            <h1 className="text-3xl font-bold text-center text-white to-purple-500">
                Recomendaciones
            </h1>
        </div>
    );
}

function GameCarouselContent() {
    return (
        <CarouselContent>
            <CarouselItemWithImage imageUrl="/recomendaciones/9.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/10.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/11.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/15.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/16.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/17.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/18.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/19.webp" title="Recomendaciones" />
            <CarouselItemWithImage imageUrl="/recomendaciones/20.webp" title="Recomendaciones" />
        </CarouselContent>
    )
}

function CarouselItemWithImage({ imageUrl, title }: { imageUrl: string, title: string }) {
    return (
        <CarouselItem>
            <div className="p-0 relative">
                <motion.div
                    className="w-full border rounded-sm border-main"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[900px] object-fill"
                    />
                    <motion.div
                        className="absolute inset-0 font-mono flex items-center justify-center p-4 text-3xl text-white bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {title}
                    </motion.div>
                </motion.div>
            </div>
        </CarouselItem>
    );
}