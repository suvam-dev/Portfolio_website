import { projectDetails } from "../data/project.js";
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

