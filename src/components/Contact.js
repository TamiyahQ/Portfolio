import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="pb-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg">
          You can reach me via email at: 
        </p>
        <p className="text-lg">
        <a href="mailto:tamiyahqazi356@gmail.com" className="text-pink-400"> tamiyahqazi356@gmail.com</a>
        </p>
      </div>
      <div className="flex justify-center space-x-6 p-4">
      <a href="https://www.linkedin.com/in/tamiyah-qazi-099248266/" className="text-black text-3xl hover:text-cyan-400">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/TamiyahQ" className="text-black text-3xl hover:text-pink-400">
        <i className="fab fa-github"></i>
      </a>
    </div>
    </section>
  );
};

export default Contact;
