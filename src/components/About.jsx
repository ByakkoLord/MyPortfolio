function About(){
    return(
        <section id='About' className='flex-col md:h-screen md:flex-row
        flex justify-evenly items-center overflow-hidden w-full h-auto shadowBox tertiaryColor p-10'>
        <article className='w-96 h-96 quaternaryColor roundedPers1 shadowBox'>
          <h3 className='primaryColor font-semibold text-4xl text-center mt-12'>Who am i?</h3>
          <p className='text-white font-semibold text-xl text-center mt-8 ml-6 mr-6'>Hello, I'm ByakkoLoad or Guilherme Fonseca, I'm 19 years old, I'm a Front-End programmer, currently familiar with technologies (HTML, CSS and JavaScript) and I try to keep evolving according to the market and its front.</p>
        </article>
        <article className='flex flex-col justify-center items-center w-96 h-96'>
          <ul>
            <li className='borderAbout pl-5 mb-5 text-white'>He completed the technical course in electrotechnics during high school at ETEC.</li>
            <li className='borderAbout pl-5 mb-5 text-white'>Currently studying Bachelor of Science in Computer Science.</li>
            <li className='borderAbout pl-5 mb-5 text-white'>Currently making all awesome things in the world</li>
            <li className='borderAbout pl-5 mb-5 text-white'>In Progress</li>
          </ul>
        </article>
      </section>
    )
}

export default About