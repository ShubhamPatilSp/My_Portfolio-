function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          I am  passion for programming and my BCA background make you a standout candidate. Your enthusiasm and dedication are exactly what we're looking for. I'm confident you'll make a significant impact on our team.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
          
            <a
              href="https://github.com/ShubhamPatilSp"
              className="hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-patil-8494982b0"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/x.shuubham?igsh=MTIzd3FodmVxdGQ2ag%3D%3D"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Maharashtra, India</p>
          <p>Jalgaon Amalner</p>
          <p>Email: xshuubhampatil@gmail.com</p>
          <p>Phone: +918421518624</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
