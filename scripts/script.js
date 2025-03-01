

document.getElementById("complete-btn-1").addEventListener("click",function(){
    alert("Board Updated Successfully")

 let taskCountElement=document.getElementById("task-count");
 let completedCountElement=document.getElementById("completed-count");

 let currentTaskCount=parseInt(taskCountElement.innerText);
 let currentCompletedCount=parseInt(completedCountElement.innerText);

 if(currentTaskCount>0){           
     taskCountElement.innerText=currentTaskCount - 1;
             }
    completedCountElement.innerText=currentCompletedCount + 1;
    
   let activityLog = document.getElementById("activity-log"); 
   let newParagraph=document.createElement("p");
   newParagraph.textContent="you have completed a task at"+new Date().toLocaleTimeString();

   newParagraph.style.color="green";
   activityLog.appendChild(newParagraph) ;                       
                          

       this.disabled=true;
       this.style.opacity="0.5";
      
     })

     document.getElementById("complete-btn-2").addEventListener("click",function(){
        alert("Board Updated Successfully")
        let taskCountElement=document.getElementById("task-count");
        let completedCountElement=document.getElementById("completed-count");
       
        let currentTaskCount=parseInt(taskCountElement.innerText);
        let currentCompletedCount=parseInt(completedCountElement.innerText);
       
        if(currentTaskCount>0){           
            taskCountElement.innerText=currentTaskCount - 1;
                    }
           completedCountElement.innerText=currentCompletedCount + 1;
           
   let activityLog = document.getElementById("activity-log"); 
   let newParagraph=document.createElement("p");
   newParagraph.textContent="you have completed a task at"+new Date().toLocaleTimeString();

   newParagraph.style.color="green";
   activityLog.appendChild(newParagraph) ;                       
                          
       
              this.disabled=true;
              this.style.opacity="0.5";
             
            })

            document.getElementById("complete-btn-3").addEventListener("click",function(){
                alert("Board Updated Successfully")
                let taskCountElement=document.getElementById("task-count");
                let completedCountElement=document.getElementById("completed-count");
               
                let currentTaskCount=parseInt(taskCountElement.innerText);
                let currentCompletedCount=parseInt(completedCountElement.innerText);
               
                if(currentTaskCount>0){           
                    taskCountElement.innerText=currentTaskCount - 1;
                            }
                   completedCountElement.innerText=currentCompletedCount + 1;
                   
   let activityLog = document.getElementById("activity-log"); 
   let newParagraph=document.createElement("p");
   newParagraph.textContent="you have completed a task at"+new Date().toLocaleTimeString();

   newParagraph.style.color="green";
   activityLog.appendChild(newParagraph) ;                       
                          
               
                      this.disabled=true;
                      this.style.opacity="0.5";
                     
                    })
                    document.getElementById("complete-btn-4").addEventListener("click",function(){
                        alert("Board Updated Successfully")
                        let taskCountElement=document.getElementById("task-count");
                        let completedCountElement=document.getElementById("completed-count");
                       
                        let currentTaskCount=parseInt(taskCountElement.innerText);
                        let currentCompletedCount=parseInt(completedCountElement.innerText);
                       
                        if(currentTaskCount>0){           
                            taskCountElement.innerText=currentTaskCount - 1;
                                    }
                           completedCountElement.innerText=currentCompletedCount + 1;
                           
   let activityLog = document.getElementById("activity-log"); 
   let newParagraph=document.createElement("p");
   newParagraph.textContent="you have completed a task at"+new Date().toLocaleTimeString();

   newParagraph.style.color="green";
   activityLog.appendChild(newParagraph) ;                       
                          
                       
                              this.disabled=true;
                              this.style.opacity="0.5";
                             
                            })
                            document.getElementById("complete-btn-5").addEventListener("click",function(){
                                alert("Board Updated Successfully")
                                let taskCountElement=document.getElementById("task-count");
                                let completedCountElement=document.getElementById("completed-count");
                               
                                let currentTaskCount=parseInt(taskCountElement.innerText);
                                let currentCompletedCount=parseInt(completedCountElement.innerText);
                               
                                if(currentTaskCount>0){           
                                    taskCountElement.innerText=currentTaskCount - 1;
                                            }
                                   completedCountElement.innerText=currentCompletedCount + 1;
                                   
   let activityLog = document.getElementById("activity-log"); 
   let newParagraph=document.createElement("p");
   newParagraph.textContent="you have completed a task at"+new Date().toLocaleTimeString();

   newParagraph.style.color="green";
   activityLog.appendChild(newParagraph) ;                       
                          
                               
                                      this.disabled=true;
                                      this.style.opacity="0.5";
                                     
                                    })

                                    document.getElementById("complete-btn-6").addEventListener("click",function(){
                                        alert("Board Updated Successfully")
                                        let taskCountElement=document.getElementById("task-count");
                                        let completedCountElement=document.getElementById("completed-count");

                       
                                        let currentTaskCount=parseInt(taskCountElement.innerText);
                                        let currentCompletedCount=parseInt(completedCountElement.innerText);
                                       
                                        if(currentTaskCount>0){           
                                            taskCountElement.innerText=currentTaskCount - 1;
                                                    }
                          
                                           completedCountElement.innerText=currentCompletedCount + 1;

                                           if ( currentTaskCount=== 0) {
                                            alert(" Congratulations! You have completed all your tasks.")
                                            
                                          }
        
                

   let activityLog = document.getElementById("activity-log"); 
   let newParagraph=document.createElement("p");
   newParagraph.textContent="you have completed a task at"+new Date().toLocaleTimeString();

   newParagraph.style.color="green";
   activityLog.appendChild(newParagraph) ;                       
                                   
                                           this.disabled=true;
                                           this.style.opacity="0.5";
                                        })

                                        

    document.getElementById("clear-history").addEventListener("click",function () {
        activityLog.textContent = ""
        // alert("hi")
     });




     
document.getElementById("blog-btn").addEventListener("click",function(){
    window.location.href="blog.html"
})


document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  });


  const today = new Date().toDateString();
document.getElementById("date").innerText = today;


if (task-count === 0) {
    alert(" Congratulations! You have completed all your tasks.")
    
  }

                                       
    
                                             


           
// document.addEventListener("DOMContentLoaded",function(){

// let taskCountElement=document.getElementById("task-count");
// let completedCountElement=document.getElementById("completed-count");

// let buttons=document.querySelectorAll(".btn btn-sm btn-primary");
 
//     let currentTaskCount=parseInt(taskCountElement.innerText);
//     let currentCompletedCount=parseInt(completedCountElement.innerText);

//     for(let i=0;i<buttons.length;i++){
//         buttons[i].addEventListener("click",function(){
           
//         if(currentTaskCount>0){
//         taskCountElement.innerText=currentTaskCount - 1;
//         }
//         completedCountElement.innerText=currentCompletedCount + 1;
//         buttons[i].disabled=true;
//         buttons[i].style.opacity="0.5";

//     });

