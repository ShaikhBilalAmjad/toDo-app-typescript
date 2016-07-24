var ToDo = (function () {
    function ToDo() {
        this.newTaskId = 100;
    }
    ToDo.prototype.dummy = function () {
        // this.passListItem.style.display = '';
        // this.searchValue = '';
        var listItem = document.getElementsByClassName('task');
        for (var listLength = 0; listLength < listItem.length; listLength++) {
            listItem[listLength].style.display = 'block';
            document.getElementById('searchEngine').value = '';
            //  this.searchElement = '';
            //  console.log('searchElement | dummy: ', this.searchElement);
            console.log(this.activeId);
        }
    };
    ToDo.prototype.changeClass = function ($event) {
        var el = document.getElementById($event.target.id);
        if (document.getElementById('update-task').hasAttribute('hidden') == true) {
            this.activeId = el.id;
            if (this.prevEle === undefined) {
                el.classList.add('active');
                this.prevEle = el;
                this.prevId = this.prevEle.id;
            }
            else if (this.prevId === this.activeId) {
                el.classList.toggle('active');
                this.activeId = null;
            }
            else if (this.prevId != this.activeId && this.prevEle != undefined) {
                // console.log('this.active|3rd|before : ', this.activeId)
                // console.log('this.previous : ', this.prevId) 
                this.prevEle.classList.remove('active');
                el.classList.add('active');
                this.prevEle = el;
                this.prevId = this.prevEle.id;
            }
        }
        else if (document.getElementById('update-task').hasAttribute('hidden') === false) {
            var falseActiveId = this.activeId;
            if (falseActiveId == this.prevId) {
                document.getElementById('update-task').setAttribute('hidden', '');
                this.prevEle.classList.remove('active');
                this.activeId = null;
            }
            else if (this.prevId != falseActiveId && this.prevEle != undefined) {
                this.prevEle.classList.remove('active');
                el.classList.add('active');
                this.prevEle = el;
                this.prevId = this.prevEle.id;
            }
        }
    };
    ToDo.prototype.addItem = function () {
        document.getElementById('add-task').removeAttribute('hidden');
        document.getElementById('add-task-form').firstElementChild.value = '';
        //  let form = document.getElementById('add-task-form');
        //  let newTask = form.firstElementChild;
        //  newTask.value = 'Add New task';
        //  console.log(newTask.id);
        //   this.addNewTask(newTask); 
    };
    ToDo.prototype.addNewTask = function () {
        var form = document.getElementById('add-task-form');
        var newTask = form.firstElementChild;
        //Getting error TS2339: Property does not exist on type for a valid ES6 class #6373
        //Yes. As I mentioned the generated JS is a valid JS file. The issue here is developer experience. 
        //The error shows up in IDEs and also in the build output through GruntJS/GulpJS.
        // This error breaks the notion of TypeScript being a superset of Javascript and any valid JS is a valid TS.
        // let _div = document.createElement('div');
        // _div.className = 'list-group';
        var _a = document.createElement('a');
        _a.className = 'list-group-item task';
        _a.id = this.newTaskId;
        _a.setAttribute('href', '#');
        _a.setAttribute('onclick', 'toDo.changeClass(event)');
        _a.innerHTML = newTask.value;
        document.getElementById('todoListItems').appendChild(_a);
        this.newTaskId += 1;
        document.getElementById('add-task').setAttribute('hidden', '');
        console.log(_a);
    };
    ToDo.prototype.removeItem = function ($event1) {
        var removeElement = document.getElementById(this.activeId);
        removeElement.style.display = 'none';
        removeElement.className = 'remove';
    };
    ToDo.prototype.editItem = function ($event3) {
        console.log('before: ', this.activeId);
        var contentValue = document.getElementById(this.activeId);
        console.log('content: ', contentValue);
        console.log('element: ', contentValue.innerHTML.trim());
        // console.log('inputfield|before: ', inputField.value);
        var activeElementInnerText = contentValue.innerHTML.trim();
        var form = document.getElementById('update-task-form');
        var inputField = form.firstElementChild;
        console.log('inputField.value: ', inputField.value);
        console.log('activeElementinnerText: ', contentValue.innerHTML.trim());
        // document.getElementById('update-task-input').setAttribute('value', activeElementInnerText)
        //  inputField.setAttribute('value', activeElementInnerText);
        inputField.value = activeElementInnerText;
        document.getElementById('update-task').removeAttribute('hidden');
        console.log('input value: ', inputField.value);
    };
    ToDo.prototype.updateTaskEdit = function () {
        var contentValue = document.getElementById(this.activeId);
        var activeElementInnerText = contentValue.innerHTML.trim();
        var form = document.getElementById('update-task-form');
        var inputField2 = form.firstElementChild;
        // console.log('input field ' , inputField.value)
        // console.log(this.activeId);
        // console.log(inputField);
        var activeElement = document.getElementById(this.activeId);
        // console.log('Input field value: ', inputField.value);
        // console.log(activeElement)
        // console.log('innertext2: ', inputField.value )
        activeElement.innerHTML = (inputField2.value);
        document.getElementById('update-task').setAttribute('hidden', '');
        inputField2.setAttribute('value', activeElementInnerText);
        // console.log('active: ',activeElement); 
        // console.log('inputField: ',inputField); 
    };
    ToDo.prototype.searchItems = function (event) {
        // console.log('EVENT ', event.target.value);
        this.searchElement = event.target.value.trim();
        console.log('searchElement', this.searchElement);
        var listItem = document.getElementsByClassName('task');
        for (var listLength = 0; listLength < listItem.length; listLength++) {
            //    console.log(listItem[listLength].innerHTML)
            var forElement = listItem[listLength].innerHTML.trim();
            // console.log('for',forElement)
            for (var wordlength = 0; wordlength < this.searchElement.length; wordlength++) {
                if (forElement[wordlength] !== this.searchElement[wordlength]) {
                    // listItem[listLength].setAttribute('hidden','')
                    //  console.log(listItem[listLength]);
                    // console.log('forElement[wordlength]',forElement[wordlength])
                    // console.log('this.searchElement[wordlength]',this.searchElement[wordlength])
                    listItem[listLength].style.display = 'none';
                }
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
    };
    return ToDo;
}());
var toDo = new ToDo();
