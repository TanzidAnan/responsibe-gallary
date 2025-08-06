 function hendleOnClick(){
            const handlerStatus =document.getElementById('handler-status');
            handlerStatus.innerText='handled by function attached on onclick attribute'
        }

        document.getElementById('event-lisenter').addEventListener('click',function(){
            const  handlerStatus =document.getElementById('handler-status');
            handlerStatus.innerText ='ami button ar text change korte parchi';
        })