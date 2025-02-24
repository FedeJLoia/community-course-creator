
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("section-padding overflow-hidden", className)}
    >
      {children}
    </section>
  );
};
