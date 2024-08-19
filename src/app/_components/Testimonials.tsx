import { testimonials } from '@/lib/constants'

const Testimonials = () => {
  return (
    <section id='testimonials' className='min-h-[80vh]'>
      <h1 className='text-center text-3xl font-bold uppercase'>TESTIMONIALS</h1>
      <h3 className='text-center'><span className='font-bold text-primary'>WHAT</span> Customers Say</h3>
      <div className="mx-auto my-3 grid max-w-6xl grid-cols-[repeat(auto-fit,300px)] justify-center gap-4 px-3">
        {
          testimonials.map(testimonial => (
            <article key={testimonial.name} className='relative max-h-max cursor-pointer space-y-3 overflow-hidden rounded-3xl border border-primary p-3 text-center'>
              <div className='relative mx-auto h-[80px] w-[80px]'>
                <img src={testimonial.img} alt='' className='aspect-square w-full object-contain' />
              </div>
              <h6 className='text-center font-semibold'>{testimonial.name}</h6>
              <p className='text-center font-medium uppercase'>{testimonial.subtitle}</p>
              <p className='px-3'>
                {testimonial.review}
              </p>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials