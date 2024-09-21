const Experience = () => {
    const experiences = [
      {
        role: 'Fellowship',
        company: 'Bytewise Limited',
        duration: 'June 2024 - September 2024',
        description:
          "I had the opportunity to dive deep into modern web development practices, focusing on React.js and Next.js. I developed proficiency in building interactive and responsive user interfaces using React, implementing best practices in state management and component-driven development. The fellowship also provided hands-on experience with Next.js, allowing me to explore server-side rendering (SSR) and static site generation (SSG).Throughout this experience, I worked on various projects and gained insights into how scalable, applications are built and deployed. This fellowship solidified my understanding of web development.",
      },
      {
        role: 'MLSA NUML Team Member',
        company: 'Microsoft Learn Student Ambassadors - NUML',
        duration: 'Dec 2023 - Present',
        description:
          '',
      },
      {
        role: 'Web Developer Intern',
        company: 'CodSoft',
        duration: 'March 2024',
        description:
          "During my internship, I created user interfaces using HTML, CSS, and JavaScript that performed basic functions enhancing the user's experience, fixed bugs in the code, and learned about UI/UX design principles.",
      },
    ];
  
    return (
      <section id="experience" className="bg-white pb-32 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Experience</h2>
          
          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-left hover:bg-cyan-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-black">{experience.role}</h3>
                <p className="text-pink-400">{experience.company} | {experience.duration}</p>
                <p className="mt-4 text-black">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  
