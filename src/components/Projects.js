import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className="bg-white text-black w-full text-center pb-32 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 py-4 heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Dev Journey Site</h3>
            <a href='https://dev-journey-site.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\devj.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">Used Material UI components to build this landing page on React Framework.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Pokemon Fetcher</h3>
            <a href='https://pokemon-fetcher.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\poke.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">This website is built using API fetching on a React Framework.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Nexcent Site</h3>
            <a href='https://nextcent-site.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\nex.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">This landing page is built using React and Bootstrap.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Daily Task Tracker</h3>
            <a href='https://daily-task-tracker76-99.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\TaskT.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">React Hooks are used to build this task tracker.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Creatify</h3>
            <a href='https://creatify-site.vercel.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\creat.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">This full-stack website is made using Next.js, MongoDB and OAuth Configurations.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Simple Form</h3>
            <a href='https://responsive-interactive-form.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\form.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">Simple landing page created using HTML, CSS and JavaScript. </p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Tailwind Project</h3>
            <a href='https://tailwind-css-responsive-web.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\tailw.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">This a website's landing page built using Tailwind CSS, and is fully responsive across all screens.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Bootstrap Project</h3>
            <a href='https://bootstrap-web-dev.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\boot.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">This project was built focusing mainly on Bootstrap, utilizing most of its properties.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">CSS Flexbox Project</h3>
            <a href='https://flexbox-project-lp.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\flex.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">I utilized CSS Flexbox mainly to build and make this landing page responsive.</p>
          </div>
          <div className="rounded-3xl shadow-lg p-4">
            <h3 className="text-2xl font-bold py-4">Recipe Page</h3>
            <a href='https://recipe-page356.netlify.app/'
            target="_blank" 
            rel="noopener noreferrer">
            <img src='.\images\rec.png' alt='project preview'/></a>
            <p className="text-md py-4 text-start">This is a simple Recipe Page I created using simple HTML and CSS only.</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;

