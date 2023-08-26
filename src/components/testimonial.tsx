import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const TestimonialSlide = (testimonial: ITestimonial) => {
  return (
    <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-6 lg:px-6">
      <figure className="max-w-screen-md mx-auto">
        <svg className="h-12 mx-auto mb-3 text-cyan-700" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
        </svg>
        <blockquote>
          <p className="text-2xl font-medium text-gray-900">"{testimonial.reviewText}"</p>
        </blockquote>
        <figcaption className="mt-6">
          <div className="font-medium text-gray-900">{testimonial.reviewerName}</div>
        </figcaption>
      </figure>
    </div>
  )
};


const Testimonial = () => {
  const swiperRef: any = React.useRef();

  const testimonials: ITestimonial[] = [
    {
      reviewText: 'Soumyanil is one of the best freelancers I have worked with. Outsanding qualities from the deliverables and awesome communication. He sees the requirements beyond the documentation sent to him. He also advised if there\'s any improvement available in the current application.',
      reviewerName: 'Fatin Farhanah F'
    },
    {
      reviewText: 'Soumyanil is a superb developer and I can highly recommend him. Asked all the right questions at the start, delivered on time and to specification and overall is a great communicator. Will definitely use again.',
      reviewerName: 'Angus K'
    },
    {
      reviewText: 'First project with Soumyanil, he\'s a really good developer, really care about details. Intense communication, always available. I suggest him as freelancer for your jobs',
      reviewerName: 'Daniele B'
    },
    {
      reviewText: 'Superb. Soumyanil showed great pro activity and is clearly very intelligent and quick to pick up requirements. Excellent job! Thank you for going above and beyond in an extremely efficient manner.',
      reviewerName: 'Conor M'
    },
    {
      reviewText: 'Soumyanil delivered everything as discussed, keeping the same level of professionalism and quality that left us very much satisfied in the first project. We will absolutely hire Soumyanil again for future projects.',
      reviewerName: 'Built By Doctors E'
    }
  ]

  return (
    <section className="testimonial selection:bg-cyan-700 selection:text-white">
      <div className="container mx-auto px-4 py-24 lg:px-0">
        <div className="text-center mb-10">
          <h3 className="text-3xl tracking-tight font-bold mb-4">Testimonials</h3>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <TestimonialSlide reviewText={testimonial.reviewText} reviewerName={testimonial.reviewerName} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center">
          <button type="button" className="mr-4 fill-lavender" onClick={() => swiperRef.current?.slidePrev()} aria-label="previous">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button type="button" className="fill-lavender" onClick={() => swiperRef.current?.slideNext()} aria-label="next">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
};

export default Testimonial;

interface ITestimonial {
  reviewText: string;
  reviewerName: string;
}
