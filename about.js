Vue.component('faq', {
    data: function () {
      return {
        // Later extract from JSON
        links: [
            {
                question: "How do you recommend users about social issues?",
                answer: "We will add a feature to allow members to create an account and select areas and topics they may be interested in, and use these data to recommend our users social issues."
            },
            {
                question: "How do you add new cards?",
                answer: "We will add a feature to allow organizations to register and create new cards."
            },
            {
                question:"How will you make sure all the cards are introducing social issues, rather than fake news or propaganda?",
                answer: "We will have a committee to approve every single new card submissions from organizations. We will also check the organization’s previous records to ensure they are using our website appropriately."
            }
        ]
      }
    },
    template: `
    <div>
        <div class = "content">
            <h1>FAQ:</h1>
            <div class = "faq_box">
                <ul>
                    <li v-for="link in links">{{link.question}} - {{link.answer}}</li>
                </ul>
            </div>
            <div class = "faq_box">
            </div>
            <div class = "faq_box">
            </div>
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