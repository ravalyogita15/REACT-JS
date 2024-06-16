function Header() {
  return (
    <div>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="navbar">
        <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Srvice</a></li>
        </ul>
        </div>
       <div>
        <ul>
          <li><a href=""><i class="ri-shopping-cart-fill"></i></a></li>
          <li><a href=""><i class="ri-user-fill"></i></a></li>
          <li><a href=""><i class="ri-heart-line"></i></a></li>
          <li><a href=""><i class="ri-wallet-3-line"></i></a></li>
        </ul>
       </div>
       
        </div>
      </body>
    </div>
  );
}

export default Header;
