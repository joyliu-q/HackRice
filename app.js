
Vue.component('card-overlay', {
    data: function () {
      return {
        hidecards: false
      }
    },
    template: `
    <div class="blog-post" v-if="hidecards == false">
        <h3>Detailed Explanation</h3>
        <p>
            Wow more detailed explanation. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Mauris feugiat nisl arcu, sit amet 
            efficitur est pellentesque nec. Nam vehicula nisi risus, vel 
            tempus quam vehicula a. Aenean a convallis orci. Quisque pharetra
             orci et elit aliquam commodo. 
             
             Proin viverra ante quis turpis
            malesuada, eu egestas diam sodales. Fusce maximus turpis vel sem
            egestas dignissim. Aenean mattis ligula mi, eu aliquam velit
            pulvinar mollis. Nulla placerat ultricies purus, sit amet
             maximus nisl vehicula quis. Duis a scelerisque mauris, mattis
             gravida nisi. Nam sagittis id ipsum ut pretium. Phasellus in 
             sapien sollicitudin, vehicula metus sit amet, scelerisque ante. 
             Nulla luctus blandit porta.
        <p>
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZMbzsJS6Lj0Fn1aFVybj3neSLNrY4Wmw1Pg&usqp=CAU">
        <ul>
            <li>Link</li>
        </ul>
        <button v-on:click="hidecards = true">Back to Cards {{ hidecards }}</button>
    </div>
    `
})
vm = new Vue({ el: '#meme' })

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