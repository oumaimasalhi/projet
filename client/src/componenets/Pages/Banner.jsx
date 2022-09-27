import React from 'react'

function Banner() {
  return (
    <div>
        <div id="banner" class="with-transparent-header parallax background" style={{backgroundImage: "url('https://www.vasterad.com/themes/workscout_2019/images/banner-home-02.jpg')", backgroundAttachment: "fixed",backgroundSize: "1519.2px 1010.27px",backgroundPosition: "50% -466.795px;"}} data-img-width="2000" data-img-height="1330" data-diff="300">
	<div class="container">
		<div class="sixteen columns">
			
			<div class="search-container" style={{transform: "translateY(0px);"}}>

				<h2>Find Job</h2>
				<input type="text" class="ico-01" placeholder="job title, keywords or company name" value=""/>
				<input type="text" class="ico-02" placeholder="city, province or region" value=""/>
				<button><i class="fa fa-search"></i></button>

				<div class="browse-jobs">
					Browse job offers by <a href="browse-categories.html"> category</a> or <a href="#">location</a>
				</div>
		<div class="announce">
					We’ve over <strong>15 000</strong> job offers for you!
				</div>

			</div>

		</div>
	</div>
</div>
    </div>
  )
}

export default Banner