import { services } from '@/lib/constants'

const Services = () => {
    return (
        <section id='services' className='min-h-[80vh]'>
            <h1 className='text-center text-3xl font-bold uppercase'>Our <span>Services</span></h1>
            <div className="mx-auto my-3 grid max-w-6xl grid-cols-[repeat(auto-fit,300px)] justify-center gap-5 px-3">
                {
                    services.map(service => (
                        <article key={service.title} className='group/service relative cursor-pointer space-y-2 overflow-hidden rounded-md border border-primary p-3 transition-all'>
                            <div className='relative mx-auto w-[80%]'>
                                <img src={service.img} alt={service.title} className='aspect-square w-full object-contain' />
                            </div>
                            <h6 className='text-center'>{service.title}</h6>
                            <div className='absolute bottom-0 left-0 grid h-0 w-0 place-content-center overflow-hidden rounded-tr-full bg-primary-medium/80 backdrop-blur-sm transition-all duration-500 group-hover/service:h-[100%] group-hover/service:w-[100%] group-hover/service:rounded-tr-none'>
                                <p className='text-balance px-3 text-white opacity-0 transition-opacity delay-500 duration-500 group-hover/service:opacity-100'>
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Services