import { useEffect, useRef, useState } from "react"

const tracks = [
  {
    title: "Морг",
    description: "Открывающий трек. Жёсткий, ледяной, без предупреждения. Добро пожаловать.",
    number: "01",
  },
  {
    title: "Последний звонок",
    description: "О тех, кому не позвонил. Тихий гитарный перебор и голос на грани срыва.",
    number: "02",
  },
  {
    title: "Формалин",
    description: "Воспоминания, законсервированные в янтаре. Они не гниют — они просто мертвы.",
    number: "03",
  },
  {
    title: "Сигнал",
    description: "Последний трек. Один долгий тон, который медленно растворяется в тишине.",
    number: "04",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Треклист
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Что внутри
          </h2>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-terracotta text-xs tracking-widest uppercase mb-6 font-sans">
                {track.number}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{track.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
