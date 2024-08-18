import { services } from '@/lib/constants'

const PortfolioPage = () => {
  return (
    <main className='mt-[80px] min-h-[80vh]'>
      <h1 className='text-center text-3xl font-bold uppercase'>Our <span>Portfolio</span></h1>
      <div className="mx-auto my-3 grid max-w-6xl grid-cols-[repeat(auto-fit,300px)] justify-center gap-3 px-3">
        {
          // services.map(service => (
          //   <article key={service.title} className='group/service relative max-h-max cursor-pointer overflow-hidden rounded-md border border-primary p-3 transition-all hover:max-h-[300px]'>
          //     <div className='relative mx-auto h-[200px] w-[80%]'>
          //       <Image src={service.img} alt='' fill className='aspect-square object-contain' />
          //     </div>
          //     <h6 className='text-center'>{service.title}</h6>
          //     <div className='absolute bottom-0 left-0 grid h-0 w-0 place-content-center overflow-hidden rounded-tr-full bg-primary-medium transition-all duration-500 group-hover/service:bottom-0 group-hover/service:left-0 group-hover/service:h-[100%] group-hover/service:w-[100%] group-hover/service:rounded-tr-none'>
          //       <p className='text-balance px-3 text-white delay-500 duration-500 group-hover/service:top-0'>
          //         {service.description}
          //       </p>
          //     </div>
          //   </article>
          // ))
        }
      </div>
    </main>
  )
}

export default PortfolioPage