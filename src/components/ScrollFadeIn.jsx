import { useEffect, useRef } from 'react'

export default function ScrollFadeIn({ children, className = '', style = {}, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay + 's'
          el.classList.add('vis')
          observer.unobserve(el)
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fi ${className}`} style={style}>
      {children}
    </div>
  )
}
