class ToDo { 
      prevEle;
      prevId;
      activeId;
      newTaskId = 100;
      passElement;   
      searchElement;
         
      dummy(){
            // this.passListItem.style.display = '';
            // this.searchValue = '';
            let listItem = document.getElementsByClassName('task');
            for (var listLength = 0; listLength < listItem.length; listLength++) {
             listItem[listLength].style.display = 'block';
            document.getElementById('searchEngine').value = '';
            //  this.searchElement = '';
            //  console.log('searchElement | dummy: ', this.searchElement);
             console.log(this.activeId);
             
            }
        }
        
     changeClass($event){
           
        let el = document.getElementById( $event.target.id );
        
        if(document.getElementById('update-task').hasAttribute('hidden') == true){
         this.activeId = el.id;
           
          if(this.prevEle === undefined){
         
            el.classList.add('active');
            this.prevEle=el;
            this.prevId= this.prevEle.id;  
            // console.log('this.active|1st : ', this.activeId)
            // console.log('this.previous : ', this.prevId)     
        }
          else if(this.prevId===this.activeId  ){
           
            el.classList.toggle('active');
            this.activeId = null;
            // this.activeId = null;
            // console.log('this.active|2nd : ', this.activeId)
            // console.log('this.previous : ', this.prevId)  
             
           }
        else if(this.prevId != this.activeId && this.prevEle != undefined ){
            // console.log('this.active|3rd|before : ', this.activeId)
            // console.log('this.previous : ', this.prevId) 
             this.prevEle.classList.remove('active');
             el.classList.add('active');
            this.prevEle=el;
            this.prevId= this.prevEle.id;
            // console.log('this.active|3rd : ', this.activeId)
            // console.log('this.previous : ', this.prevId)  
        }
        
      
     }
     
     else if(document.getElementById('update-task').hasAttribute('hidden') === false){
         let falseActiveId = this.activeId;
         if(falseActiveId == this.prevId){
             document.getElementById('update-task').setAttribute('hidden', '');
             this.prevEle.classList.remove('active');
             this.activeId = null;
            //  console.log('this.active|1st|false : ', this.activeId)
            // console.log('this.previous : ', this.prevId)
         }
        else if(this.prevId != falseActiveId && this.prevEle != undefined ){
             this.prevEle.classList.remove('active');
             el.classList.add('active');
            this.prevEle=el;
            this.prevId= this.prevEle.id;
            
        }
       
     }
     }
     
     addItem(){
         document.getElementById('add-task').removeAttribute('hidden');
        document.getElementById('add-task-form').firstElementChild.value = '';
        //  let form = document.getElementById('add-task-form');
        //  let newTask = form.firstElementChild;
        //  newTask.value = 'Add New task';
        //  console.log(newTask.id);
        //   this.addNewTask(newTask); 
     }
     
     addNewTask(){
        let form = document.getElementById('add-task-form');
        let newTask = form.firstElementChild;
        //Getting error TS2339: Property does not exist on type for a valid ES6 class #6373
        //Yes. As I mentioned the generated JS is a valid JS file. The issue here is developer experience. 
        //The error shows up in IDEs and also in the build output through GruntJS/GulpJS.
        // This error breaks the notion of TypeScript being a superset of Javascript and any valid JS is a valid TS.
        // let _div = document.createElement('div');
        // _div.className = 'list-group';
        let _a = document.createElement('a');
        _a.className = 'list-group-item task';
        _a.id = this.newTaskId as any;
        _a.setAttribute('href','#');
        _a.setAttribute('onclick','toDo.changeClass(event)');
        _a.innerHTML = newTask.value;
        document.getElementById('todoListItems').appendChild(_a);
        this.newTaskId += 1;
        document.getElementById('add-task').setAttribute('hidden','');
        console.log(_a);
        
        
        
     }
     
     removeItem($event1){
    
       
        let removeElement = document.getElementById(this.activeId);
        removeElement.style.display = 'none';
        removeElement.className = 'remove';
        
    }
    
    editItem($event3){
         console.log('before: ',this.activeId)        
        let contentValue = document.getElementById(this.activeId);
        console.log('content: ', contentValue);
        console.log('element: ', contentValue.innerHTML.trim());
        // console.log('inputfield|before: ', inputField.value);
        let activeElementInnerText =  contentValue.innerHTML.trim();
         let form = document.getElementById('update-task-form');
         let inputField  =  form.firstElementChild;
         console.log('inputField.value: ',inputField.value);
         console.log('activeElementinnerText: ',contentValue.innerHTML.trim());
        // document.getElementById('update-task-input').setAttribute('value', activeElementInnerText)
        //  inputField.setAttribute('value', activeElementInnerText);
         inputField.value = activeElementInnerText;
         document.getElementById('update-task').removeAttribute('hidden');
        console.log('input value: ',inputField.value);
         
}
    
    
    
    updateTaskEdit(){
        let contentValue = document.getElementById(this.activeId);        
        let activeElementInnerText =  contentValue.innerHTML.trim();
        let form = document.getElementById('update-task-form');
        let inputField2  =  form.firstElementChild;
        // console.log('input field ' , inputField.value)
        // console.log(this.activeId);
        // console.log(inputField);
        let activeElement = document.getElementById(this.activeId);
        // console.log('Input field value: ', inputField.value);
        // console.log(activeElement)
        // console.log('innertext2: ', inputField.value )
        activeElement.innerHTML = (inputField2.value);
        document.getElementById('update-task').setAttribute('hidden','');
        inputField2.setAttribute('value',activeElementInnerText)
        // console.log('active: ',activeElement); 
        // console.log('inputField: ',inputField); 
}
     
     searchItems(event){
        // console.log('EVENT ', event.target.value);
         this.searchElement = event.target.value.trim();
        console.log('searchElement',this.searchElement);        
        let listItem = document.getElementsByClassName('task');
        for (var listLength = 0; listLength < listItem.length; listLength++) {
        //    console.log(listItem[listLength].innerHTML)
            let forElement = listItem[listLength].innerHTML.trim();
            // console.log('for',forElement)
            
            for (var wordlength = 0; wordlength < this.searchElement.length; wordlength++) {
                if (forElement[wordlength] !== this.searchElement[wordlength]) {
                // listItem[listLength].setAttribute('hidden','')
                //  console.log(listItem[listLength]);
                    // console.log('forElement[wordlength]',forElement[wordlength])
                    // console.log('this.searchElement[wordlength]',this.searchElement[wordlength])
                    listItem[listLength].style.display = 'none';
                    // this.passElement += listItem[listLength].innerHTML.trim() 
                    // console.log(listItem[listLength]); 
                       
               }
                // else{
                //     listItem[listLength].style.display = '';
                //     console.log(listItem[listLength]);
                //     console.log('forElement[wordlength]',forElement[wordlength])
                //     console.log('searchElement[wordlength]',searchElement[wordlength])
                
                //  } 
            }
        }
        // console.log(searchElement);
        // console.log(listItem.length)
        // searchElement.show().filter().hide;
        // if(listItem !== searchElement){
        //     let removeElement = document.getElementsByClassName('task');
        //      removeElement.setattribute
        // }
        // listItem.do
     }
     
     
        
}

let toDo: ToDo= new ToDo();
