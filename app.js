const data = [
    {
        "title": "Asylum-seeking Refugees",
        "tags": ["local tag", "Houston"],
        "blurb": "Refugees fleeing war, persecution, gang violence, and human rights violations arrive at the US hoping for a better life. However, many are being turned away and deported back to unsafe situations as their case stalls in the courts.",
        "description": "In the last few years, the number of refugees to whom asylum is granted has decreased dramatically. Many are being deported back to their original countries. This is extremely dangerous especially for those who are fleeing political persecution, and whose lives are in danger from their own government.\nOne way to help is to provide forensic evaluation for asylum seekers. They’re clinical evaluations for asylum seekers who might have medical conditions that will support their case for seeking asylum in the US' immigration court. You can also reach out to your state representative and senator. Finally, you can donate to the International Rescue Committee, which is dedicated to helping refugees all over the US.",
        "img": "https://blogcritics.org/wp-content/uploads/2018/06/new-colusus-1050x525.jpg",
        "links": [
            {
                "link_title": "Physicians for Human Rights",
                "link_url": "https://phr.org/"
            },
            {
                "link_title": "International Rescue Committee",
                "link_url": "https://www.rescue.org/"
            }
        ]
    },
    {
        "title": "Gentrification",
        "tags": ["local tag", "Houston"],
        "blurb": "Gentrification - as an area becomes more developed, the initial poorer inhabitants are forced out as rent prices increase, which has a devastating effect on the community as well as the small businesses that serve them.",
        "description": "Among all the major cities in Texas and the South, gentrification is occurring most rapidly in Houston. As the city expands, low-income groups, especially minorities are pushed out of down-town as rents and mortgages rise and home values soar. This also has a negative impact on small businesses, which often have thriving relationships with the community, as they are outcompeted by larger chains.\nIn order to fight gentrification, we can change zoning ordinances, building fewer luxury single-family homes (which drive prices up) and building denser forms of housing such as apartments. The higher the supply of housing, the less likely that current inhabitants will be forced out by rising prices.",
        "img": "https://tinyurl.com/y3p42w6x",
        "links": [
            {
                "link_title": "Row House Community Development Corporation",
                "link_url": "https://www.rowhousecdc.org/"
            },
            {
                "link_title": "Affordable Housing Operations Center",
                "link_url": "https://ccppi.org/site/index.php/initiatives/initiatives-2"
            }
        ]
    }
]




Vue.component('card-overlay', {
    data: function () {
      return {
        hidecards: true,
        email_list_input: "",
        emails: [],
        current_index: 0,
        title: data[0]['title'],
        blurb: data[0]['blurb'],
        description: data[0]['description'],
        links: data[0]['links']
        }
    },
    methods: {
        next_card: function () {
            this.current_index ++;
            this.title = data[this.current_index]['title'];
            this.blurb = data[this.current_index]['blurb'];
            this.description = data[this.current_index]['description'];
            this.links = data[this.current_index]['links'];
        }
    },
    template: `
    <div>
        <div id = "overlay_box" v-if="hidecards == false">
            <h3>{{ title.toLocaleUpperCase() }}</h3>
            <p>
                {{ description }}
            </p>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZMbzsJS6Lj0Fn1aFVybj3neSLNrY4Wmw1Pg&usqp=CAU">
            <ul>
                <li v-for="link in links">
                    <a :href = "link.link_url" target="_blank">{{link.link_title}}</a> 
                </li>
            </ul>
            <button class = "overlay_back_button" v-on:click="hidecards = true">Back to Cards</button>
        </div>
        <div class = "card" v-if="hidecards == true">
            <h2>{{title}}</h2>
            <img id = "card_img" src = "img1.png">
            <p>
                {{blurb}}
            </p>
            <div id = "button_container">
                <button class="no_button" @click = "next_card"></button>
                <button class="yes_button" @click = "hidecards = false"></button>
            </div>
        </div>
        <input v-model = "email_list_input" type = "text" placeholder = "Join Our Email List!" @keyup.enter = "emails.push(email_list_input)">
    </div>
    `
})
new Vue({ 
    el: '#overlay_container'
})
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