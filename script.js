// Get references to the necessary elements
var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.03, // Adjust for smoothness (lower = smoother)
  endY: 0, // Target scroll position
  currentY: 0, // Current rendered position
  resizeRequest: 1, // Trigger resize handling
  scrollRequest: 0, // Trigger scroll handling
};

var requestId = null;

// Initialize the scroller
function initScroller() {
  updateScroller();
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", onScroll);
}

// Update the scroller position
function updateScroller() {
  var resized = scroller.resizeRequest > 0;

  // Handle resizing
  if (resized) {
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }

  // Get the current scroll position
//  var scrollY =
  scroller.endY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;;

  // Smoothly interpolate to the target scroll position
  scroller.currentY += (scroller.endY - scroller.currentY) * scroller.ease;

  // Stop updating when the difference is minimal
  if (Math.abs(scroller.endY - scroller.currentY) < 0.05 || resized) {
    scroller.currentY = scroller.endY;
    scroller.scrollRequest = 0;
  }

  // Apply the transform to the scrolling container
  scroller.target.style.transform = `translateY(-${scroller.currentY}px)`;

  // Continue the animation loop if needed
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

// Handle scroll events
function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

// Handle resize events
function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

// Initialize everything on page load
window.addEventListener("load", initScroller);
