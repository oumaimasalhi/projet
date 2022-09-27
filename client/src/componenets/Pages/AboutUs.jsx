import React from 'react'

function AboutUs() {
	setTimeout(() => {
		
		let sliderContainer = document.querySelector('.slick-list');
		let innerSlider = document.querySelector('.slick-track');
		
		let pressed = false;
		let startX;
		let x;
		sliderContainer.addEventListener("mousedown", (e) => {
			pressed = true;
			startX = e.offsetX - innerSlider.offsetLeft;
			sliderContainer.style.cursor = "grabbing";
		});
		sliderContainer.addEventListener("mouseenter", () => {
			sliderContainer.style.cursor = "grab";
		});
		sliderContainer.addEventListener("mouseup", () => {
			sliderContainer.style.cursor = "grab";
			pressed = false;
		});
		sliderContainer.addEventListener("mousemove", (e) => {
			if (!pressed) return;
			e.preventDefault();
		
			x = e.offsetX;
			console.log(x)
			console.log(startX)
			innerSlider.style.transform = `translate3d(${x - startX}px, 0px, 0px)`;
			checkBoundary();
		});
		const checkBoundary = () => {
			let outer = sliderContainer.getBoundingClientRect();
			let inner = innerSlider.getBoundingClientRect();
			
			// console.log(inner.x)
			if (parseInt(innerSlider.style.left) > 0) {
				// innerSlider.style.left = "0px";
			}
		
			if (inner.right < outer.right) {
				// innerSlider.style.left = `-${inner.width - outer.width}px`;
			}
			
		};
	}, 700);

	const carouselHandler = (event) =>{
		const left = event.target.parentNode.parentNode.parentNode.getBoundingClientRect()
		const right = event.target.parentNode.parentNode.parentNode.getBoundingClientRect()
		
		
		
	}
  return ( 

    <section class="fullwidth-testimonial margin-top-15">
	<div class="container">
		<div class="sixteen columns">
			<h3 class="headline centered">
				What Our Users Say 😍
				<span class="margin-top-25">We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!</span>
			</h3>
		</div>
	</div>

	<div class="fullwidth-carousel-container margin-top-20">
		<div  class="testimonial-carousel testimonials slick-initialized slick-slider slick-dotted" role="toolbar">
			
			
			<div aria-live="polite" class="slick-list draggable" style={{padding: "0px 34%"}}>
				<div onMouseDown={carouselHandler} class="slick-track" role="listbox" style={{opacity: "1", width: "3409px", transform: "translate3d('-974px, 0px, 0px')"}}>
				<div class="fw-carousel-review slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabIndex="-1" style={{width: "447px"}}>
				<div class="testimonial-box">
					<div class="testimonial">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud content.</div>
				</div>
				
			    
			
				<div class="testimonial-author">
					<img src="https://www.vasterad.com/themes/workscout_2019/images/resumes-list-avatar-02.png" alt=""/>
					<h4>Jennie Smith <span>Jobseeker</span></h4>
				</div>
			</div>



			    <div class="fw-carousel-review slick-slide slick-current slick-active slick-center" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: "447px"}}>
				
				<div class="testimonial-box">
					<div class="testimonial">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view.</div>
				</div>
            
				<div class="testimonial-author">
					<img src="https://www.vasterad.com/themes/workscout_2019/images/resumes-list-avatar-01.png" alt=""/>
					<h4>Jack Paden <span>Jobseeker</span></h4>
				</div>
			    </div>



				<div class="fw-carousel-review slick-slide  slick-cloned" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{width: "447px"}}>

				<div class="testimonial-box">
					<div class="testimonial">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close.</div>
				</div>
				
				<div class="testimonial-author">
					<img src="https://www.vasterad.com/themes/workscout_2019/images/resumes-list-avatar-03.png " alt=""/>
					<h4>Tom Baker <span>HR Specialist</span></h4>
				</div>
			    </div>
				<div/>

				
				<div class="fw-carousel-review slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{width: "447px"}}>
				<div class="testimonial-box">
					<div class="testimonial">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud content.</div>
				</div>
				
				<div class="testimonial-author">
					<img src="https://www.vasterad.com/themes/workscout_2019/images/resumes-list-avatar-02.png" alt=""/>
					<h4>Jennie Smith <span>Jobseeker</span></h4>
				</div>
			</div></div></div>

			
			

		<ul class="slick-dots" style={{display: "block"}} role="tablist"><li class="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation00" id="slick-slide00">
			<button type="button" data-role="none" role="button" tabindex="0">1</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation01" id="slick-slide01">
			<button type="button" data-role="none" role="button" tabindex="0">2</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation02" id="slick-slide02">
			<button type="button" data-role="none" role="button" tabindex="0">3</button></li>
		</ul></div>
	
	    <div/>
		</div>
		  
</section>
)}

export default AboutUs