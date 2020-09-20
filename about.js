Vue.component('about', {
    data: function () {
      return {
        
      }
    },
    template: `
    <div>
        <div class = "content">
            <div class = "about_header">
                <h1 class="v2">ABOUT US</h1>
            </div>
            <div class="about_box">
                <h3 class="v3">{Website name} is all about raising awareness, whether it’s a longtime 
                issue or a newly emerging problem in our society. Through this website, we 
                can inform people about all the social issues that they may not know about. 
                We hope to use this opportunity to connect people with problems that they 
                are interested in, thus helping our users become socially responsible citizens. </h3>
            </div>
            <div class = "pic_box"></div>
        </div>
    </div>
    `
})
vm = new Vue({ el: '#about_container' })