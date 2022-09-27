import { useState } from "react";

function NavBar() {
	const [show,setShow] = useState(false);
	window.addEventListener('scroll',()=> {
		if(window.scrollY >= 88){
			setShow(true)
		}else{
			setShow(false)
		}
	});
	return (
		
		<div >
<header className ="transparent sticky-header"	>
			<div className="container">

				<div className="sixteen columns">

					<div id="logo">
						<h1><a href="index.html"><img src="https://www.vasterad.com/themes/workscout_2019/images/logo2.png" alt="Work Scout" /></a></h1>
					</div>

					<nav id="navigation" className="menu sf-js-enabled sf-arrows">
						<ul id="responsive">

							<li><a href="index.html" className="sf-with-ul">Home</a></li> 
							<li ><a id="current" href="#" className="sf-with-ul">Job Listings</a></li>
							<li ><a href="#" className="sf-with-ul">About</a></li>
							<li><a href="#" className="sf-with-ul">Contact</a></li>
							<li><a href="#" className="sf-with-ul">Services</a></li>

						</ul>


						<ul className="responsive float-right">
							<li><a href="my-account.html#tab2"><i className="fa fa-user"></i> Sign Up</a></li>
							<li><a href="my-account.html"><i className="fa fa-lock"></i> Sign In</a></li>
						</ul>

					</nav>

					<div id="mobile-navigation">
						<a href="#menu" className="menu-trigger"><i className="fa fa-reorder"></i> Menu</a>
					</div>
					

				</div>
			</div>
		</header>
		<header class={!show ? "sticky-header cloned headroom headroom--top headroom--not-bottom": "sticky-header cloned headroom headroom--not-bottom headroom--not-top headroom--pinned"}>
<div class="container">
	<div class="sixteen columns">
	
	
	<div id="logo">
						<h1><a href="index.html"><img src="https://www.vasterad.com/themes/workscout_2019/images/logo.png" alt="Work Scout" /></a></h1>
					</div>

					<nav id="navigation" className="menu sf-js-enabled sf-arrows">
						<ul id="responsive">

							<li><a href="index.html" className="sf-with-ul">Home</a></li> 
							<li ><a id="current" href="#" className="sf-with-ul">Job Listings</a></li>
							<li ><a href="#" className="sf-with-ul">About</a></li>
							<li><a href="#" className="sf-with-ul">Contact</a></li>
							<li><a href="#" className="sf-with-ul">Services</a></li>

						</ul>


						<ul className="responsive float-right">
							<li><a href="my-account.html#tab2"><i className="fa fa-user"></i> Sign Up</a></li>
							<li><a href="my-account.html"><i className="fa fa-lock"></i> Sign In</a></li>
						</ul>

					</nav>

					<div id="mobile-navigation">
						<a href="#menu" className="menu-trigger"><i className="fa fa-reorder"></i> Menu</a>
					</div>
					
	</div>
</div>
</header>
		</div>
	);
}

export default NavBar
