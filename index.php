<?php
/**
 * Adam Shannon's Personal Site
 * Public Domain
 * 08/15/2009
 * Adam Shannon
 */

// Start the counter.
$start_time = microtime();

// Set some funny headers.
$headers = array(
	'Pencil and paper are great debuggers.',
	'What do you mean you don\'t have a compiler in your head?!?!',
	'The sooner you start coding a program, the longer it will take.',
	'My program is only slow because the hardware sucks.',
	'( True + True ) == 2;',
	'The glass is neither half-full or half-empty thanks to the IEEE.',
	'My shopping list is scoped by indentation.',
	'null'
);

header("Random-Saying: " . $headers[rand(0,count($headers)-1)]);
header("X-The-Magical-Number: 09-F9-11-02-9D-74-E3-5B-D8-41-56-C5-63-56-88-C0");

// Load the main docs
require "includes/html/html.php";
require "includes/html/header.php";

?>

	<article>
		<h2>Hello!</h2>
		<p>
			I am <em style="text-decoration:underline;">Adam Shannon</em>: developer and college student.

			<br /><br />

      I'm currently working at
        <a href="http://t8webware.com">T8 Webware</a>
      and for
				<a href="http://www.uni.edu/nisg" title="UNI Northern Iowa Student Government Webmaster">UNI's Student Government</a>.
			<br /><br />

			I believe very strongly that freedom, science, and reason are the best tools that we have. Other ideologies come and go
			but rational and critical thougth have been most truthful.
		</p>
	</article>

	<article>
		<h2>About Me</h2>
		<p>
			I love to: work with the new <a href="http://whatwg.org/html5">HTML 5 specification</a>, Scala, discuss mathematics,
      and pretty much any topic in detail.

			<br /><br />

			Currently I am attending <a href="http://www.uni.edu/" title="The University of Northern Iowa">UNI</a>,
			and I'm studying Computer Science and Mathematics.

		</p>
	</article>

	<article>
		<h2>Contact Me</h2>
		<p>
			If you are looking to contact me feel free to email me with the details in the upper right of this page.

			<br /><br />

			Here is my <a href="resume.php" title="My personal R&#233;sum&#233;">r&#233;sum&#233;</a>.
		</p>
	</article>

<?php
// Load the footer
require "includes/html/footer.php";
?>
