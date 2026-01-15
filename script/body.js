import { projectDetails } from "../data/project.js";

const aboutMe=[`I am an undergraduate student in Manufacturing Science & Engineering at IIT Kharagpur, driven by a curiosity-first approach to learning and problem-solving. My academic journey has been shaped by a strong inclination toward understanding how things work beneath the surface—whether it’s engineering systems, computational logic, or decision-making frameworks. I enjoy exploring beyond formal coursework, constantly pushing myself to connect concepts across disciplines rather than viewing them in isolation.
               `,`My approach to problems is grounded in strong fundamentals, structured reasoning, and systems thinking. I believe good solutions emerge from breaking complex problems into simpler components, analyzing constraints, and designing with scalability in mind. With a solid foundation in data structures, algorithms, and Java-based problem solving, I focus not just on getting correct answers, but on building efficient, elegant, and explainable solutions. I value clarity in thought, precision in execution, and learning through iteration.`,
`What motivates me most is working on problems that have depth, long-term relevance, and real impact. I am particularly interested in areas that lie at the intersection of engineering, research, and entrepreneurship, where rigorous thinking meets practical application. Whether through advanced technical work, research-oriented exploration, or building scalable ideas from the ground up, my goal is to create work that is meaningful, well-thought-out, and capable of making a difference beyond the immediate context.`]

generateProject();
function generateProject()
{
      projectDetails.forEach((item) =>
      {
           const project=document.querySelector(".js-project");
           project.innerHTML+=`
                     <div class="p1">
                           <div>
                              <div class="header1">${item.title}</div>
                              <p>${item.body}</p>
                              </div>
                              <div>
                                    <img src="${item.image}" alt="Projet-Photo">
                              </div>
                     </div>
            `
      });
}

readmore();
 function readmore()
{
       const about=document.querySelector('.js-aboutMe');
       console.log(window.innerWidth);
       about.innerHTML='';
       if(window.innerWidth<=700)
       {
            for(var i=0;i<1;i++)
            {
                about.innerHTML+=`<div class="about-section-content">${aboutMe[i]}</div>`;
            }
            about.innerHTML+=`<button class="readmore"  > &#8595; </button>`;
            const readmorebtn=document.querySelector('.readmore');
            readmorebtn.addEventListener('click',expansion);
            
       }
       else
       {
           aboutMe.forEach((item,i) =>
           {
               about.innerHTML+=`<div class="about-section-content">${item}</div>`;
           })
       }
      } 

 function expansion(){
            const about=document.querySelector('.js-aboutMe');
            console.log(about);
            about.innerHTML='';
            aboutMe.forEach((item,i) =>
            {
                about.innerHTML+=`<div class="about-section-content">${item}</div>`;
            }) 
            about.innerHTML+=`<button class="readmore"> <a href='#about' class='readmore' >&#8593; </a></button>`;
            const readmorebtn=document.querySelector('.readmore');
            readmorebtn.addEventListener('click',readmore);
       }



