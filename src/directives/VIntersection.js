export default {
  mounted(el, binding) {
    console.log(binding)
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      console.log(observer)
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        binding.value()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  }
}
