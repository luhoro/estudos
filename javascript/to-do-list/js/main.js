
const Main = {

   tasks: [],

   init: function (){
      this.cacheSelectors()
      this.bindEvents()
      this.getStoraged()
      this.buildTasks()
   },

   cacheSelectors: function (){
      this.$checkButtons = document.querySelectorAll('.check')
      this.$inputTask = document.querySelector('#inputTask')
      this.$list = document.querySelector('#list')
      this.$removeButtons = document.querySelectorAll('.remove')
   },

   bindEvents: function (){
      const self = this

      this.$checkButtons.forEach(function(button) {
         button.onclick = self.Events.checkButton_click
      })

      this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

      this.$removeButtons.forEach (function(button){
         button.onclick = self.Events.removeButton_click
      })
   },

   getStoraged: function () {
      const tasks = localStorage.getItem('tasks')

      this.tasks = JSON.parse(tasks)
   },

   buildTasks: function () {
      let html = ''
      this.tasks.forEach( item => {
         html += `
            <li >
               <div class="check"></div>
               <label for="" class="task">
                  ${item.task}
               </label>
               <button class="remove"></button>
            </li>
         `
      })

      this.$list.innerHTML = html
   },



   Events: {
      checkButton_click: e => {
         const li = e.target.parentElement
         const isDone = li.classList.contains('done')

         if (!isDone) {
            return li.classList.add('done')
         }
         
         li.classList.remove('done')
      },

      inputTask_keypress: e => {
         const key = e.key
         const value = e.target.value

         if (key === 'Enter') {
            this.$list.innerHTML += `
               <li >
                  <div class="check"></div>
                  <label for="" class="task">
                     ${value}
                  </label>
                  <button class="remove"></button>
               </li>
            `

            e.target.value = ''

            this.cacheSelectors()
            this.bindEvents()

            const savedTasks = localStorage.getItem('tasks')

            const object = [{
               task: value
            }]

            localStorage.setItem('tasks', JSON.stringify(object))
         }
      },

      removeButton_click: e => {
         let li = e.target.parentElement

         li.classList.add('removed')

         setTimeout(function(){
            li.classList.add('hidden')
         }, 300)
      }
   }


}

Main.init()