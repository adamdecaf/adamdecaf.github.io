
	<article>
		<h2>Meta</h2>
		<p>
			You can follow me on
			[
        <a href="https://facebook.com/adamdecaf">Facebook</a> |
        <a href="http://github.com/adamdecaf">Github</a> |
				<a href="https://twitter.com/adamdecaf">Twitter</a>
			]

			<br /><br />

			This page was last modified on
				<?php
					// Get the last modified date.
					$file = filemtime("index.php");
					echo @date("F j, Y", $file) . ', ';
				?>
			and is about
				<?php
					// Get the creation time
					$start_time = explode(' ', $start_time);
					$end_time = explode(' ', microtime());

						$time = round((($end_time[0] + $end_time[1]) - ($start_time[0] + $start_time[1])), 5) . '++';
							echo '<span id="load-time">' . substr($time, 0, 6) . '</span> old.';
				?>

				<span id="counter" style="display:none;">0</span>
		</p>
	</article>

<!-- Custom JS -->
<script>
window.onload = function () {
	// Grab the load-time element
	var elm = document.getElementById('load-time'),
		counter = document.getElementById('counter');

		// Set the interval
		window.setInterval(function () {

			// Increase the count.
			// 1) We are subtracing a negative amount so that we add a
			//    numeric value and not add to the string (.innerHTML).
			// 2) We then change the proposed amount into a string, this
			//    this will allow us to only show a specified amount of
			//    numbers.
			// Note: The "+ (Math.random() / 1000)" is just for fun, it's NOT accurate!
			var tmp = parseFloat(counter.innerHTML) + 1.00001 + (Math.random() / 200);
			var _m = _s = '';

				// Now we can check for time details.
				if (tmp > 60) {

					var seconds = parseInt(tmp % 60, 10, 10).toString(),
						minutes = parseInt(tmp / 60, 10, 10).toString();

						// Check to see if we should make them plural.
						(parseInt(seconds) != 1) ? _s = 's' : _s = '';
						(parseInt(minutes) != 1) ? _m = 's' : _m = '';

					elm.innerHTML = minutes + ' minute' + _m + ' and ' + seconds + ' second' + _s;
					counter.innerHTML = tmp;

				} else {

					elm.innerHTML = tmp.toString().substr(0, 6) + ' seconds';
					counter.innerHTML = tmp;
				}


		}, 1000, elm, counter);
};
</script>

<!-- Google Analytics -->
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-11236244-1");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>
