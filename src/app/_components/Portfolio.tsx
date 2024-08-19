import { portfolioData, services } from '@/lib/constants'

const Portfolio = () => {
  return (
    <section id='portfolio' className='min-h-[80vh]'>
      <h1 className='text-center text-3xl font-bold uppercase'>Our <span>Portfolio</span></h1>
      <div className="mx-auto my-3 grid max-w-6xl grid-cols-[repeat(auto-fit,300px)] justify-center gap-5 px-3">
        {
          portfolioData.map(portfolio => (
            <article key={portfolio.title} className='group/portfolio relative cursor-pointer overflow-hidden rounded-md border border-primary p-3 transition-all'>
              <div className='mx-auto w-[90%]'>
                <img src={portfolio.img} alt='' className='mb-4 mt-2 h-full w-full object-contain' />
              </div>
              <h5 className='text-center font-medium uppercase'>{portfolio.title}</h5>
              <h6 className='text-center text-sm font-medium uppercase text-primary-medium'>{portfolio.subtitle}</h6>
              <div className='absolute left-0 right-0 top-[100%] h-[100%] w-[100%] overflow-hidden rounded-t-[100px] bg-primary-medium/80 backdrop-blur-sm transition-all duration-500 group-hover/portfolio:top-0 group-hover/portfolio:rounded-t-none'>
                <div className='grid h-[100%] w-[100%] place-content-center space-y-3 opacity-0 transition-opacity delay-500 duration-500 group-hover/portfolio:opacity-100'>
                  <p className='px-3 text-center text-white'>
                    {portfolio.description}
                  </p>
                  <a href={portfolio.link} target='_blank' className='mx-auto inline-block border-2 border-white px-2 py-1 text-white transition-colors hover:bg-white hover:text-primary'>
                    SEE PROJECT
                  </a>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio