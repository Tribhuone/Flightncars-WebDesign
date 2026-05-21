
import { useEffect, useRef, useState } from "react";

const heroImages = ["/hero-banner.png", "/hero.webp", "/3rd-Hero.webp"];

export default function HeroSection() {
    const [activeImage, setActiveImage] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = setInterval(() => {
            setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
        }, 3000);

        return () => clearInterval(slider);
    }, []);

    const showPreviousImage = () => {
        setActiveImage((currentImage) => (
            currentImage === 0 ? heroImages.length - 1 : currentImage - 1
        ));
    };

    const showNextImage = () => {
        setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    };

    const handlePointerDown = (event) => {
        dragStartX.current = event.clientX;
        setIsDragging(true);
        setDragOffset(0);
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event) => {
        if (!isDragging) return;

        setDragOffset(event.clientX - dragStartX.current);
    };

    const handlePointerUp = () => {
        if (!isDragging) return;

        const sliderWidth = sliderRef.current?.offsetWidth ?? 0;
        const swipeThreshold = Math.max(48, sliderWidth * 0.18);

        if (dragOffset > swipeThreshold) {
            showPreviousImage();
        } else if (dragOffset < -swipeThreshold) {
            showNextImage();
        }

        setIsDragging(false);
        setDragOffset(0);
    };

    return (

        <div
            ref={sliderRef}
            className="cursor-grab overflow-hidden rounded-3xl touch-pan-y select-none active:cursor-grabbing"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            <div
                className={`flex ease-out ${isDragging ? "" : "transition-transform duration-700"}`}
                style={{ transform: `translateX(calc(-${activeImage * 100}% + ${dragOffset}px))` }}
            >
                {heroImages.map((image) => (
                    <img
                        key={image}
                        src={image}
                        width={1000}
                        height={400}
                        alt=""
                        draggable="false"
                        className="w-full min-w-full"
                    />
                ))}
            </div>
        </div>
    );
}
