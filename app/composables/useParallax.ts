import { ref, onMounted, onUnmounted } from "vue"

export const useParallax = (speed = 0.4, zoom = 0.1) => {
  const el = ref<HTMLElement | null>(null)

  const offset = ref(0)
  const scale = ref(1)

  let ticking = false

  const update = () => {
    if (!el.value) return

    const rect = el.value.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const center = rect.top + rect.height / 2
    const viewportCenter = windowHeight / 2

    const distance = center - viewportCenter

    // PARALLAX (gerak atas bawah)
    offset.value = distance * speed * -0.2

    // ZOOM (semakin ke tengah makin zoom)
    const progress = 1 - Math.abs(distance) / windowHeight
    const rawScale = 1 + progress * zoom

    // clamp biar ga lebay
    scale.value = Math.min(1.15, Math.max(1, rawScale))

    ticking = false
  }

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update)
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll)
    update()
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })

  return { el, offset, scale }
}