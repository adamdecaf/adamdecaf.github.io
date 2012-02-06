
<body>

	<!--[if lt IE 7]>  
		<div style='border: 1px solid #F7941D; background: #FEEFDA; text-align: center; clear: both; height: 75px; position: relative;'> 
			<div style='position: absolute; right: 3px; top: 3px; font-family: courier new; font-weight: bold;'>
				<a href='#' onclick='javascript:this.parentNode.parentNode.style.display="none"; return false;'>
					<img src='images/ie/cornerx.jpg' style='border: none;' alt='Close this notice'/>
				</a>
			</div>
			<div style='width: 640px; margin: 0 auto; text-align: left; padding: 0; overflow: hidden; color: black;'> 
				<div style='width: 75px; float: left;'>
					<img src='images/ie/warning.jpg' alt='Warning!'/>
				</div>
				<div style='width: 275px; float: left; font-family: Arial, sans-serif;'> 
					<div style='font-size: 14px; font-weight: bold; margin-top: 12px;'>
						You are using an outdated browser
					</div> 
					<div style='font-size: 12px; margin-top: 6px; line-height: 12px;'>
						For a better experience using this site, please upgrade to a modern web browser.
					</div>
				</div>
				<div style='width: 75px; float: left;'>
					<a href='http://www.firefox.com' target='_blank'>
						<img src='images/ie/firefox.jpg' style='border: none;' alt='Get Firefox 3.5'/>
					</a>
				</div>
				<div style='width: 75px; float: left;'>
					<a href='http://www.browserforthebetter.com/download.html' target='_blank'>
						<img src='images/ie/ie8.jpg' style='border: none;' alt='Get Internet Explorer 8'/>
					</a>
				</div>
				<div style='width: 73px; float: left;'>
					<a href='http://www.apple.com/safari/download/' target='_blank'>
						<img src='images/ie/safari.jpg' style='border: none;' alt='Get Safari 4'/>
					</a>
				</div> 
				<div style='float: left;'>
					<a href='http://www.google.com/chrome' target='_blank'>
						<img src='images/ie/chrome.jpg' style='border: none;' alt='Get Google Chrome'/>
					</a>
				</div> 
			</div>
		</div>  
	<![endif]-->

	<nav>
		
		<aside>
			Email: <img src="images/adam_personal.png" alt="adam[AT]ashannon.us" title="My personal email" />
		</aside>
		
		<h1>
			<a href="index.php" title="Go To The Home Page">Adam Shannon</a>
			<span>
				<?php
					// Load the quotes
					include "includes/php/quotes.php";
					echo random_quote();
				?>
			</span>
		</h1>

	</nav>
