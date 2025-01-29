export default {
  mounted(el, binding) {

    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observe) => {
      if (entries[0].isIntersecting && binding.value.page < binding.value.limit) {
        console.log(observe)
        binding.value.handler()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  },
  name: 'intersection'
}
