const About = () => {
    return (
        <section id="about" className="bg-white text-black w-full text-center pb-24 pt-12">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="p-4">
              <img src=".\images\hero (1).png" />
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-bold">About <span className="text-pink-400">Me</span></h3>
              <p className="text-md flex text-start justify-start p-4">
                I am Tamiyah Qazi an aspiring full-stack developer passionate 
                about creating innovative and efficient web solutions. With
                 a strong foundation in JavaScript and React, I am skilled 
                 in building responsive and user-friendly applications, 
                 leveraging modern and sleek designs. My 
                 approach to development is driven by problem-solving and
                  a desire to continuously learn new technologies. I am 
                  dedicated to crafting unique digital experiences, whether
                   it's through implementing clean code or designing 
                   intuitive user interfaces. Enthusiastic about growth,
                    I am committed to mastering both frontend and backend 
                    technologies to deliver comprehensive solutions.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  