source/
|
|  |- index.html _____________________ # Examples of all the contained styles and plugins
|  |- config.rb _____________________ # Compass required to compile SASS
|  |- gulpfile.js _____________________ # Gulp build configuration
|  |- package.json _____________________ # Defines gulp dependencies
|
|- scss/
|  |- global.scss _____________________ # Custom website styles
|
|  |- grid/
|    |- _equal-grid.scss _______________ # Full width equal sections
|    |- _block-grid.scss _______________ # Zurb Foundation 5 block Grid
|    |- _flex-video.scss _______________ # Responsive video container
|    |- _grid.scss _______________ # Zurb Foundation 5 grid
|
|  |- modules/
|    |- _buttons.scss _______________ # Button styles
|    |- _forms.scss _______________ # Form styles
|    |- _pricing-plans.scss _______________ # Pricing plan styles
|    |- _slanted.scss _______________ # Slanted div styles
|    |- _frame.scss _______________ # Web browser frame styles
|    |- _svg-icons.scss _______________ # SVG icons style
|    |- _type.scss _______________ # Typographic styles
|
|  |- plugins/
|    |- _accordion.scss _________________ # Styles for Accordion plugin
|    |- _box-shadow.scss _________________ # Styles for performant box shadow animation
|    |- _lightbox.scss _________________ # Styles for Lightbox plugin
|    |- _modal.scss _________________ # Styles for Modal plugin
|    |- _responsive-nav.scss _________________ # Styles for Responsive Navigation plugin
|    |- _smart-underline.scss _________________ # Styles for smart underlines
|    |- _social-buttons.scss _________________ # Styles for Twitter and Facebook buttons plugin
|    |- _swipe.scss _________________ # Styles for Swipe slider plugin
|    |- _tabs.scss _________________ # Styles for Tabs plugin
|    |- _tooltip.scss _________________ # Styles for Tooltip
|
|- js/
|  |- plugins/
|    |- accordion.js _______________ # Toggle open/close accordion
|    |- animations.js _______________ # Helper for queued CSS animations
|    |- echo.js _______________ # Lazy load images
|    |- fastclick.min.js _______________ # Eliminate tap delay on mobiles
|    |- flowtype.native.js _______________ # Resize text to maintain readable line lengths
|    |- instantclick.min.js _______________ # Preload content behind a link before clicking
|    |- lightbox.js _______________ # A simple image lightbox
|    |- picture-fill.min.js _______________ # Load image src depending on window size
|    |- responsive-nav.min.js _______________ # Collapse navigation to a hamburger for mobile
|    |- scroll-events.js _______________ # Highlight menu items as they are scrolled to
|    |- smooth-scroll.js _______________ # Animate scroll to anchor
|    |- social-buttons.js _______________ # Twitter and Facebook like counts
|    |- swipe.min.js _______________ # Touch slider
|    |- tooltip.js _______________ # Simple tooltips
|    |- tabs.js _______________ # Responsive tabs
|    |- type-improvements.js _______________ # Take care of ragged paragraphs and orphans
|
|- js/
|  |- vendors/
|    |- classie.js _______________ # Add/remove class helper functions
|    |- jquip.min.js _______________ # Lightweight alternative to jQuery
|    |- prism.js _______________ # For code syntax highlighting only
|
|- images/
|  |- favicon.png _______________ # Replace with your own favicon
|  |- img.png _______________ # Used as placeholder image for Echo lazy load
|  |- star.svg _______________ # Used for 2.6 Fancy Divider
|  |- spinner.gif _______________ # Used for Lightbox plugin
|  |- tooltip.svg _______________ # Used for the Tooltip background
|
|- components/ _______________ # Examples of all the plugins
|
|- layouts/ _______________ # Some sample layouts