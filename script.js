// Get all links with hashes  
const links = document.querySelectorAll('a[href*="#"]');  
  
// Loop through each link  
links.forEach((link) => {  
   // Add an event listener to the link  
   link.addEventListener('click', (e) => {  
      // Prevent the default link behavior  
      e.preventDefault();  
  
      // Get the href attribute of the link  
      const href = link.getAttribute('href');  
  
      // Get the element with the id that matches the href  
      const element = document.querySelector(href);  
  
      // Scroll to the element  
      element.scrollIntoView({  
        behavior: 'smooth',  
      });  
   });  
});
