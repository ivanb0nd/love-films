import React from 'react';
import { Lazy, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import './FootageSlider.css';

const FootageSlider = ({ footageData }) => {
	return (
		<Swiper
			// install Swiper modules
			freeMode={true}
			modules={[Lazy, Navigation]}
			navigation
			lazy={true}
			className='footageSlider'
			spaceBetween={20}
			slidesPerView={4}
			breakpoints={{
				0: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				780: {
					slidesPerView: 3,
					spaceBetween: 15
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 20
				}

			}}
		>
			{footageData.map(footage => <SwiperSlide>
				<div className='footageItem'>

					<img
						className="footageImage swiper-lazy"
						data-src={footage.previewUrl} />
				</div>
			</SwiperSlide>)}
		</Swiper>
	);
}

export default FootageSlider