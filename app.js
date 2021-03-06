var chosen = [];

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
        ],
        "interest": false
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
        ],
        "interest": false
    },
    {
        "title": "Support Houston Local Businesses",
        "tags": ["local tag", "Houston"],
        "blurb": "COVID-19 has drastically affected Houston’s small businesses, the backbone of its economy. Your support of local businesses could be the difference between them staying open and shutting down.",
        "description": "When COVID-19 hit, economies worldwide screeched to a halt. Many stores were forced to close or go completely online, and their revenues fell. Small businesses often have extremely thin profit margins and low reserves of cash, making them ill-equipped to survive in these times. Many were forced to lay off employees, while others shut down all-together.\nAs a consumer, the best way to support your local small businesses is simple: buy local. While their prices may be slightly higher as they can’t compete with huge chains, your patronage is a huge factor in them staying afloat. The next time you go out to eat, or need to buy groceries, considering giving your business to a local small business instead. If you are a small business owner, there are several organizations designed to help you stay afloat in these times, which you may find below.",
        "img": "https://assets.entrepreneur.com/content/3x2/2000/20200414070728-cb.jpeg?width=700&crop=2:1",
        "links": [
            {
                "link_title": "SCORE Houston",
                "link_url": "https://houston.score.org/"
            },
            {
                "link_title": "University of Houston Texas Gulf Coast Small Business Development Center Network",
                "link_url": "https://www.sbdc.uh.edu/sbdc/default.asp"
            },
            {
                "link_title": "Women’s Business Center",
                "link_url": "http://www.wbea-texas.org/womens-business-center"
            }
        ],
        "interest": false
    },
    {
        "title": "DACA",
        "tags": ["national tag", "America"],
        "blurb": "Hundreds of thousands of Americans, brought to the US when they were just kids and who can remember no other home, are at danger of deportation if DACA is ever repealed, which is one of the goals of the current administration.",
        "description": "The Dreamers, a group of undocumented Americans brought illegally to the US by their parents when they were kids, were at danger of being deported back to a “home” country that they barely remembered until Pres. Obama signed the DREAM Act, allowing them to stay in the country if they had not committed crime. However, this respite is far from complete, and the current administration is trying hard to overturn it.\nThere are multiple organizations which are working to prevent the dreamers from being deported, to ensure that the rights of the people dependent on DACA are upheld, and to give financial support to those who need it. Supporting these organizations, such as the ACLU, United We Dream, and the Immigrant Legal Resource Center, does a lot to ensure that all Americans can live without fear.",
        "img": "https://tinyurl.com/yxdqblmb",
        "links": [
            {
                "link_title": "American Civil Liberties Union",
                "link_url": "https://www.aclu.org/"
            },
            {
                "link_title": "United We Dream",
                "link_url": "https://unitedwedream.org/"
            },
            {
                "link_title": "Immigrant Legal Resource Center",
                "link_url": "https://www.ilrc.org/"
            }
        ],
        "interest": false
    },
    {
        "title": "Black Lives Matter",
        "tags": ["national tag", "America"],
        "blurb": "Black Lives Matter is an American movement protesting against racial inequality and police brutality. African Americans face disproportional violence at the hands of police officers, and the movement’s goal is to bring notice to this and other forms of systematic discrimination.",
        "description": "While slavery ended in the mid 1800s in the US, African Americans have faced systemic discrimination that has lasted well beyond the ending of slavery - redlining, being kept out of higher education, harsher prison sentences, Jim Crow laws, and police brutality. The rate of police violence against African Americans is disproportionally high, and the Black Lives Matter movement began to gain traction after multiple unarmed African Americans were shot dead. It aims to bring notice to this violence, invest in the Black community, and lower rates of police violence.\nThe biggest way in which you can help Black Lives Matter is to listen - listen to protesters and understand the issues that they are protesting. You can support minority-owned businesses, help families who have lost loved ones to police brutality, and volunteer with organizations that aim to reduce systemic discrimination.",
        "img": "https://www.nelsonmandela.org/uploads/_imager/uploads/files/160517/Black-Lives-Matter-2_W1024_H341_upscale_CZ1_I1_Q80_P50-50.jpg",
        "links": [
            {
                "link_title": "Equal Justice Initiative",
                "link_url": "https://eji.org/"
            },
            {
                "link_title": "Black Lives Matter",
                "link_url": "https://blacklivesmatter.com"
            }
        ],
        "interest": false
    },
    {
        "title": "Access and Equality in Healthcare",
        "tags": ["national tag", "America", "international tag"],
        "blurb": "Unlike the vast majority of developed countries, the United States does not have a universal healthcare system. This leads to healthcare being unreasonably expensive, causing many to accrue medical debt and others going without neccessary treatment due to inaffordability.",
        "description": "The lack of universal healthcare causes many problems in the US. Average life expectancy lags behind other developed countries, and the rates of obesity, heart disease, and infant mortality, among others, are all extremely high in the US compared to its counterparts. The American healthcare system does not even save money - as American taxpayers pay more for their healthcare than do taxpayers in countries with universal healthcare. The large fees associated with American healthcare leaves many unable or unwilling to get necessary medical treatment.\nUnfortunately, there is nothing that can be directly done as an American about that problem, but you can vote and campaign for candidates who back Universal Healthcare. You can also donate to advocacy groups that raise awareness and campaign for healthcare reform in America.",
        "img": "https://www.healthcareitnews.com/sites/hitn/files/TEKsystems-Blog-Image-1200x672.jpg",
        "links": [
            {
                "link_title": "Universal Health Care Action Network",
                "link_url": "https://uhcan.org/"
            },
            {
                "link_title": "Healthcare-Now",
                "link_url": "https://www.healthcare-now.org/"
            }
        ],
        "interest": false
    },
]

Vue.component('card-overlay', {
    data: function () {
        return {
            json: data,
            hidecards: true,
            current_index: 0,
            title: data[0]['title'],
            blurb: data[0]['blurb'],
            description: data[0]['description'],
            links: data[0]['links'],
            img: data[0]['img'],
        }
    },
    methods: {
        next_card: function () {
            if (this.current_index < this.json.length - 1) {
                this.current_index ++;
            } else {
                this.current_index = 0;
            }
            this.title = this.json[this.current_index]['title'];
            this.blurb = this.json[this.current_index]['blurb'];
            this.description = this.json[this.current_index]['description'];
            this.links = this.json[this.current_index]['links'];
            this.img = this.json[this.current_index]['img'];
            this.img2 = this.json[this.current_index+1]['img'];
            this.img3 = this.json[this.current_index-1]['img'];
        }
    },
    template: `
    <div>
        <div id = "overlay_box" v-if="hidecards == false">
            <h3>{{ title.toLocaleUpperCase() }}</h3>
            <p>
                {{ description }}
            </p>
            <img :src = "img" class = "desc_img">
            <ul>
                <h3>Want to get involved? Get started with those websites:</h3>
                <li v-for="link in links">
                    <a :href = "link.link_url" target="_blank">{{link.link_title}}</a> 
                </li>
            </ul>
            <button class = "overlay_back_button" @click="hidecards = true">Back</button>
        </div>
        <div class = "content_main" v-if="hidecards == true">
        <!-- Main card -->
            <div class = "card" style = "position: fixed;">
                <h2>{{this.json[this.current_index]["title"]}}</h2>
                <p>
                    {{this.json[this.current_index]["blurb"]}}
                </p>
                <img :src = "img" class = "card_img">
                <div id = "button_container">
                    <button class="no_button" @click = "next_card"></button>
                    <button class="learn_more_button" @click = "hidecards = false">LEARN MORE</button>
                    <button class="yes_button" @click = "next_card" @click = "data[this.current_index]['interest'] = true" @click = "chosen.push(this.current_index)"></button>    
                </div>
            </div>
            <!-- Right card -->
            <div class = "card" v-if = "this.current_index != this.json.length - 1" style = "float: right; margin-top: 9%; margin-right: 0%;  filter: blur(8px); -webkit-filter: blur(8px);">
                <h2>{{this.json[this.current_index + 1]["title"]}}</h2>
                <p>
                    {{this.json[this.current_index + 1]["blurb"]}}
                </p>
                <img :src = "img2" class = "card_img">
            </div>
            <!-- Left card -->
            <div class = "card" v-if = "this.current_index != 0" style = "float: left; margin-top: 9%; margin-left: 10%;  filter: blur(8px); -webkit-filter: blur(8px);">
                <h2>{{this.json[this.current_index]["title"]}}</h2>
                <p>
                    {{this.json[this.current_index - 1]["blurb"]}}
                </p>
                <img :src = "img3" class = "card_img">
            </div>
        </div>
    </div>
    `
})
new Vue({ 
    el: '#overlay_container'
})