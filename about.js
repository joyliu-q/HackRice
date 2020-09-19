Vue.component('about', {
    data: function () {
      return {
        
      }
    },
    template: `
    <div>
        <div class = "content">
            <h1>ABOUT US:</h1>
            <div class="about_box">
                <p>"{Website name} is all about raising awareness, whether it’s a longtime 
                issue or a newly emerging problem in our society. Through this website, we 
                can inform people about all the social issues that they may not know about. 
                We hope to use this opportunity to connect people with problems that they 
                are interested in, thus helping our users become socially responsible citizens." </p>
            </div>
        </div>
    </div>
    `
})
vm = new Vue({ el: '#about_container' })

/**
new Vue({
    // lol change name later
    el:'#hackrice_project',
    data: {
        username: '',
        greeting: ''
    },
    methods: {
        greet: function() {

            this.greeting = "Hi, "
            this.greeting = this.greeting.concat(this.username, "!")
            
        }
    }
});
*/