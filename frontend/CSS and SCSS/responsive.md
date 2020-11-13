General responsive:	
		- Always use relative sizes. If you put max width and height 100% you prevent ur image be bigger than your father.
		- alway test the following different devices:
			4k monitors: 3840×2160
			FullHD monitors: 1920×1080	
			HDready monitors: 1366×768, 1440×900, 1680×1050
				Older models: 1280×720
				Tablets and smartphones:
				iPad PRO and top Android tablets: up to 1024×1366
				older iPads and Android tablets: 768×1024
				top iPhone and Android phones: up to 420×800
				mid-range iPhone and Android phones: 360×640 to 375×800
				older iPhone and Android phones: down to 320×500
				It would make no sense to create a responsive breakpoint for each screen resolution listed above. Therefore, we’ll try to cover as many resolutions as possible with each breakpoint. For a good, experience proven responsive design, we suggest the following solution:				
				420px maximum width: cover all smartphones in portrait mode
				421px to 767px width: most smartphones in landscape mode
				768px to 1023px: most Android tablets and iPads in portrait mode
				1024px to 1365px: most Android tablets and iPads in landscape mode, older desktop/laptop monitors
				1366px and above: iPad PRO, HDready and FullHD desktop laptop monitors
Responsive types:
	Mostly Fluid:
	Column Drop:
	Layout shifter:
	Tiny Tweaks:
	Off Canva:
Responsive images:
	tips:
		- use srcset when you have a lot of files for the same image
		- picture for css and sources and media
		- take care of uploading in png. In general they are 2 or 3 times bigger. Instead use svg, but in mobiles it could have problems
		- use imageset in css or srcset
