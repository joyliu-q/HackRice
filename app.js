Vue.component('card-overlay', {
    data: function () {
      return {
        hidecards: true,
        email_list_input: "",
        // Later extract from JSON
        title: "Detailed Explanation",
        explanation: "Wow more detailed explanation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat nisl arcu, sit amet efficitur est pellentesque nec. Nam vehicula nisi risus, vel tempus quam vehicula a. Aenean a convallis orci. Quisque pharetra orci et elit aliquam commodo.\nProin viverra ante quis turpis malesuada, eu egestas diam sodales. Fusce maximus turpis vel sem egestas dignissim. Aenean mattis ligula mi, eu aliquam velit pulvinar mollis. Nulla placerat ultricies purus, sit amet  maximus nisl vehicula quis. Duis a scelerisque mauris, mattis gravida nisi. Nam sagittis id ipsum ut pretium. Phasellus in  sapien sollicitudin, vehicula metus sit amet, scelerisque ante.   Nulla luctus blandit porta.",
        links: [
            {
                title: "thirst project",
                url: "https://www.thirstproject.org/"
            },
            {
                title: "UNICEF",
                url: "https://www.unicef.org/"
            }
        ]
        }
    },
    template: `
    <div>
        <div id = "overlay_box" v-if="hidecards == false">
            <h3>{{ title.toLocaleUpperCase() }}</h3>
            <p>
                {{ explanation }}
            </p>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZMbzsJS6Lj0Fn1aFVybj3neSLNrY4Wmw1Pg&usqp=CAU">
            <ul>
                <li v-for="link in links">
                    <a :href = "link.url" target="_blank">{{link.title}}</a> 
                </li>
            </ul>
            <button class = "overlay_back_button" v-on:click="hidecards = true">Back to Cards</button>
        </div>
        <div class = "card" v-if="hidecards == true">
            <h2>Social Justice Issue Title</h2>
            <img src = "blah.png">
            <p>
                Blurb summarizing what the issue is. Maybe add photo.
            </p>
            <div id = "button_container">
                <button class="no_button">X</button>
                <button class="yes_button" v-on:click="hidecards = false">Y</button>
            </div>
        </div>
        <input v-model = "email_list_input" type = "text" placeholder = "Join Our Email List For More Info!">
    </div>
    `
})
vm = new Vue({ el: '#overlay_container' })

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