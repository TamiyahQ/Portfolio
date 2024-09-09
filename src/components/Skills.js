const Skills = () => {
    const skills = [
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'Next.js', level: 'Beginner' },
      { name: 'Bootstrap', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Beginner' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
    ];
  
    return (
      <section id="skills" className="pb-32 mx-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Skills</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg hover:bg-cyan-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-black">{skill.name}</h3>
                <p className="text-pink-300 mt-2">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  