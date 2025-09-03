#!/usr/bin/perl
#
# Test writing PNG images when 16bit support is enabled
#
# Contributed by Bob Friesenhahn <bfriesen@simple.dallas.tx.us>
#
BEGIN { $| = 1; $test=1; print "1..5\n"; }
END {print "not ok $test\n" unless $loaded;}

use Image::Magick;
$loaded=1;

require 't/subroutines.pl';

chdir 't/png' || die 'Cd failed';

#
# 1) Test pseudocolor image
#
testReadWrite( 'input_256.png',
  'output_256.png',
  q/quality=>54/,
  '5798b9623e5922d3f6c0e87ae76ccc5a69568258e557613f20934f2de6ee2d35' );

#
# 2) Test truecolor image
#
++$test;
testReadWrite( 'input_truecolor.png',
  'output_truecolor.png',
  q/quality=>55/,
  'eb9adaa26f3cda80273f436ddb92805da2cb88dd032d24380cd48cf05432a326' );

#
# 3) Test monochrome image
#
++$test;
testReadWrite( 'input_mono.png',
  'output_mono.png', '',
  'fa43f8c3d45c3efadab6791a6de83b5a303f65e2c1d58e0814803a4846e68593' );

#
# 4) Test Multiple-image Network Graphics
#
++$test;
testReadWrite( 'input.mng',
  'output.mng',
  q/quality=>55/,
  '65c0eacf6e060b9fb8467eaa0f74e2dcc3ef72d06577f06a506bd0546b01fb61' );

#
# 5) Test 16-bit Portable Network Graphics
# 
++$test;
testReadWrite( 'input_16.png',
  'output_16.png',
  q/quality=>55/,
  '593d0b64579cbeb07a2f4d5fcc3ab77a320204580442a8b6a95ef141030427de',
  '2d30a8bed1ae8bd19c8320e861f3140dfc7497ca8a05d249734ab41c71272f08');


