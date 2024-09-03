
const navContainer = document.getElementById('scroll-nav-container');
navContainer.className = 'scroll-nav-container';

const style = document.createElement('style');
style.textContent = `
  .scroll-nav-container {
    display: flex;
    justify-content: center; /* Center the items */
    padding: 10px 0;
    background-color: #ffffff;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Hide scrollbar for Firefox */
  }
  .scroll-nav-container::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Edge */
  }
  .scroll-nav-item {
    flex: 0 0 auto;
    margin-right: 15px;
    text-align: center;
    width: 70px; /* Adjust based on design */
  }
  .scroll-nav-item img {
    width: 100%; /* Adjust the size to be responsive */
    display: block;
    margin: 0 auto 5px;
    border-radius: 50%; /* Make images circular */
    background-color:#F1EFEE;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .scroll-nav-item a {
    text-decoration: none;
    color: #000;
    font-family: Arial, sans-serif; /* Use a similar font */
    font-size: 12px; /* Adjust text size based on design */
  }
`;
document.head.appendChild(style);


const navItems = [
  { href: 'https://jamesmichelle.com/collections/jm-best-sellers', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png', text: 'Best Sellers' },
  { href: 'https://jamesmichelle.com/collections/jm-new-arrivals', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png', text: 'New' },
  { href: 'https://jamesmichelle.com/collections/necklaces', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png', text: 'Necklaces' },
  { href: 'https://jamesmichelle.com/collections/rings', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png', text: 'Rings' },
  { href: 'https://jamesmichelle.com/collections/bracelets', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png', text: 'Earrings' },
  { href: 'https://jamesmichelle.com/collections/personalized', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png', text: 'Personalized' },
  { href: 'https://jamesmichelle.com/collections/fine', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png', text: 'Fine' },
  { href: 'https://jamesmichelle.com/collections/clearance', src: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png', text: 'Clearance' },];

navItems.forEach(item => {
  const navItem = document.createElement('div');
  navItem.className = 'scroll-nav-item';
  
  const link = document.createElement('a');
  link.href = item.href;
  
  const img = document.createElement('img');
  img.src = item.src;
  link.appendChild(img);
  
  const text = document.createTextNode(item.text);
  link.appendChild(text);
  
  navItem.appendChild(link);
  navContainer.appendChild(navItem);
});

