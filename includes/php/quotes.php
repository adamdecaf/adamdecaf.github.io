<?php/** * Adam Shannon's Personal Site * MIT LICENSE * 08/15/2009 * Adam Shannon */ /** * @name: random_quote * This function will return a random quote. * * @parm: null * @return: string */function random_quote() {	// Load the random quotes	$quotes = array(		0 => 'Open web standards or bust!',		# 1 => 'The quick brown fox jumps over the lazy dogs back.',		# 2 => 'Hello World!',		# 3 => 'This is a random quote.',	);		// Pick a random number	$rand = floor(rand(0, count($quotes) - 1));	return ' -- &quot;' . $quotes[$rand] . '&quot;';}?>