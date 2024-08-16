document.querySelector('#add').onclick= function 
() {
    if (document.querySelector('input').value.length == 0) {
        alert("Enter your task");        
    }
    else{
        document.querySelector('#task').innerHTML
        +=`
        <div class="task"><span id="taskname"> 
        ${document.querySelector("input").value}
        </span>
        <button class="delete" style = "position : relative; align-item:center; justify-content:space-between;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
        </svg></button>
        </div>`;
        var ctask = document.querySelectorAll(".delete");
        for(var i=0;i<ctask.length;i++){
            ctask[i].onclick = function(){
                this.parentNode.remove();
            }
        }
         var tasks = document.querySelectorAll(".task");
         for(var i=0;i<tasks.length;i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
         }

         document.querySelector("input").value="";
    }
}