import React, { useEffect, useRef } from 'react';
import html_icon from "../../Image/html_icon.png";
import css_icon from "../../Image/css_icon.png";
import javascript_icon from "../../Image/javascript_icon.png";
import react_icon from "../../Image/react_icon.png";
import nextjs_icon from "../../Image/nextjs_icon.png";
import python_icon from "../../Image/python_icon.png";
import Go_icon from "../../Image/Go-icon.png";
import supabase_icon from "../../Image/Supabase_icon.png";
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';



gsap.registerPlugin(Observer);

export const SkillsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel= carouselRef.current;
    if (!carousel) return;
    const images = gsap.utils.toArray<HTMLDivElement>('.carousel-image', carousel);
    
    const radius = 242;
    const progress = { value: 0 };

    //Observer.createの結果を変数に保存
    const observerInstance = Observer.create({
      target: carousel,
      type: "wheel,pointer",
      onPress: () => {
        carousel.style.cursor = 'grabbing';
      },
      onRelease: () => {carousel.style.cursor = 'grab';},
      onChange: (self) => {
        gsap.killTweensOf(progress);
        const p = self.event.type === 'wheel' ? self.deltaY * -0.0005 : self.deltaX * 0.05;
        gsap.to(progress, {
          duration: 2,
          ease: 'power4.out',
          value: `+=${p}`
        });
      }
    });

    const animate = () => {
      images.forEach((image, index) => {
        const theta = index / images.length - progress.value;
        const x = -Math.sin(theta * Math.PI * 2) * radius;
        const y = Math.cos(theta * Math.PI * 2) * radius;
        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
        const c = Math.floor(index / images.length * 360);
        image.style.background = `hsla(${c}, 90%, 50%, .5)`;
      });
    };
    gsap.ticker.add(animate);
    
    return () => {
      gsap.ticker.remove(animate);
      observerInstance.kill(); 
    }
  }, []);


  return(
    <div className="Skill-container">
        <section id="skill">
          <div className="carousel" ref={carouselRef}>
            <div className="carousel-image">
              <img src={html_icon} alt="HTML" />
            </div>
            <div className="carousel-image">
              <img src={css_icon} alt="CSS" />
            </div>
            <div className="carousel-image">
              <img src={javascript_icon} alt="JavaScript" />
            </div>
            <div className="carousel-image">
              <img src={react_icon} alt="React" />
            </div>
            <div className="carousel-image">
              <img src={nextjs_icon} alt="Next.js" />
            </div>
            <div className="carousel-image">
              <img src={supabase_icon} alt="Supabase" />
            </div>
            <div className="carousel-image">
              <img src={Go_icon} alt="Go" />
              <p className="Schedule">学習予定</p>
            </div>
            <div className="carousel-image">
              <img src={python_icon} alt="Python" />
              <p className="Schedule">学習予定</p>
            </div>
          </div>
        </section>
    </div>
  );
}