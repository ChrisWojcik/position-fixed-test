# position-fixed-test

"position:fixed" has inconsistent browser support and is difficult to test. It is 
currently listed as an [undetectable](https://github.com/Modernizr/Modernizr/wiki/Undetectables)
in the [Modernizr](https://github.com/Modernizr/Modernizr) feature detection library.

This test relies on UserAgent-sniffing and explicitly blacklists browsers/devices where 
"position:fixed" is known to be unsupported or where support is incomplete or buggy. 
While UA-sniffing is generally not considered a best practice by most sources, it 
may be appropriate in some cases where a reliable feature test is unavailable.

## Goals
My goal in writing this test was to provide a UA-sniffing approach that was simple, 
easy to understand, and maintainable going forward. "position:fixed" is well-supported 
by most desktop browsers. Mobile support is much more inconsistent. Position fixed is supported 
by iOS 5.0 and Android 3.0 and above (2.1 - 2.3 support it but user-scalable must be set to no). 
I wanted a solution that would allow in these latest versions (as well as any future ones) 
without the need to double check a feature-detection test in new devices. I also 
needed something I could maintain on my own without access to a wide range of devices to test on.

Because Android and iOS have such large market shares, I was much more aggressive in 
"blacklisting" other mobile browsers/devices, sometimes without regard to version. However, if 
I could find good evidence that a browser/device provided strong support for "position:fixed" 
I tried to account for that. I don't have access to all of the listed devices, so 
in some cases I had to resort to using online references. Any help on making the test 
more accurate would be greatly appreciated.

## Some Major Major Caveats
The obvious downside to this approach is that as new devices come out, the list of userAgents 
will need to be maintained. New devices could easily slip through. However, from my 
research it appeared that many of the attempts at feature detection needed to bring 
in some UA-sniffing anyway to prevent false positives. Mobile support for position:fixed *appears* to 
be getting better, so hopefully this will become less of an issue in the future.

A much better approach might be to do feature detection and then add in the minimal amount 
of UA-sniffing to remove a few known false positives. See the Filament Group's [fixed-fixed](https://github.com/filamentgroup/fixed-fixed) 
for an approach along those lines. I ended up not using theirs because I wanted a test that 
completed at document.ready.

The real best practice is to be aware of the fact that position:fixed is inconsistently supported,
don't rely on it as a must-have feature. Use it, but be aware of the limitations.

By no means do I recommend this code to anyone and everyone. Your mileage may vary. I've included a few
other position:fixed tests I've seen floating around the interwebs that you should definitely check out. But 
from my reading, there were a few false positives produced.

## References
* [Awesome article by Brad Frost on using position:fixed](http://bradfrostweb.com/blog/mobile/fixed-position/)
* [Modernizr Open Issue discussing feature-detection of position:fixed](https://github.com/Modernizr/Modernizr/issues/167)
* http://caniuse.com/css-fixed
* http://html5please.com/#position:fixed
* http://mobilehtml5.org/
* [Worldwide mobile browser stats for 2012](http://gs.statcounter.com/#mobile_browser-ww-monthly-201112-201212)

## Some other (Better?) Approaches
* https://github.com/filamentgroup/fixed-fixed
* http://kangax.github.com/cft/#IS_POSITION_FIXED_SUPPORTED
* https://gist.github.com/1221602