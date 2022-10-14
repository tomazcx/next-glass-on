import classNames from 'classnames';
import templateMain1 from '../assets/carousel/bg-img1.jpg'
import templateMain2 from '../assets/carousel/bg-img2.jpg'
import templateMain3 from '../assets/carousel/bg-img3.jpg'
import glass from '../assets/products/glass1.jpg'
import sunglass from '../assets/products/sunglass1.jpg'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { CarouselImg } from '../components/Home/CarouselImg';
import { Layout } from "../components/Sections/Layout"
import { Truck, Lock, CalendarBlank } from 'phosphor-react';
import Link from 'next/link'
import {ProductsHome} from '../components/Home/ProductsHome'
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {

  const [sunGlasses, setGlasses] = useState(false)

  return (
    <Layout>
      <main className='w-full z-0'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
        >
          <SwiperSlide ><CarouselImg template={templateMain1} text='Armações Tecnológicas' textButton='Confira' /></SwiperSlide>
          <SwiperSlide><CarouselImg template={templateMain2} text='Frete grátis para todo Brasil' textButton='Conheça' /></SwiperSlide>
          <SwiperSlide><CarouselImg template={templateMain3} text='Novos lançamentos toda semana' textButton='Explore' /></SwiperSlide>
        </Swiper>
        <section className='mb-12'>
          <div className='flex flex-col items-center gap-8'>
            <div className='flex items-center gap-12 w-full justify-center pb-4'>
              <strong
                className={classNames('uppercase text-2xl font-normal cursor-pointer', {
                  'border-b border-black': !sunGlasses
                })}
                onClick={() => setGlasses(false)}>De grau</strong>

              <strong className={classNames('uppercase text-2xl font-normal cursor-pointer', {
                'border-b border-black': sunGlasses
              })}
                onClick={() => setGlasses(true)}>De sol</strong>
            </div>
            {sunGlasses ? <ProductsHome img={[sunglass, sunglass, sunglass, sunglass]} /> : <ProductsHome img={[glass, glass, glass, glass]} />}

            <Link href={'/products'} passHref>
               <a className='text-2xl transition-colors hover:text-gray-700 py-2 border-black '>
                 Confira todos os produtos</a> 
            </Link>
          </div>

        </section>
        <section className='bg-gray-100 w-full grid grid-cols-1 md:grid-cols-3 text-sm'>
          <div className='flex flex-col items-center py-6 gap-2'>
            <Truck size={32} color="#000000" />
            <span className='font-bold uppercase'>Frete grátis para todo Brasil</span>
          </div>
          <div className='flex flex-col items-center py-6 gap-2' >
            <Lock size={32} color="#000000" />
            <span className='font-bold uppercase '>Check-out seguro</span>
          </div>
          <div className='flex flex-col items-center py-6 gap-2' >
            <CalendarBlank size={32} color="#000000" />
            <span className='font-bold uppercase'>Agendar visita loja física</span>
          </div>
        </section>

      </main>
    </Layout>
  )
}

export default Home