Vue.component('faq', {
    data: function () {
      return {
        
      }
    },
    template: `
    <div>
        <div class = "content_faq">
            <div class = "about_header">
                <h1 class="v2">FAQs:</h1>
            </div>
            <div class = "faq_box">
                <h4>How do you recommend users about social issues?</h4>
                <h5>We will add a feature to allow members to create an account and select areas and topics they may be interested in, and use these data to recommend our users social issues.</h5>
            </div>
            <div class = "faq_box">
                <h4>How do you determine what constitutes an important social issue?</h4>
                <h5>While there is no one-size-fits-all formula, factors we look for include the number of people affected, the presence of inequality or discrimination, the importance of spreading awareness, as well as other factors. Ultimately, if it’s something that hurts people and needs to be improved, we will likely consider it a relevant social issue. </h5>
            </div>
            <div class = "faq_box">
                <h4>How will you make sure all the cards are introducing social issues, rather than fake news or propaganda?</h4>
                <h5>We will have a committee to approve every single new card submissions from organizations. We will also check the organization’s previous records to ensure they are using our website appropriately.</h5>
            </div>
            <div class = "faq_box">
                <h4>How do you use Involvopedia?</h4>
                <h5>Involvopedia is a platform that educates its users about important social issues. The interested and not interested buttons below every social issue allow us to identify the types of social issues you’re interested in, so that we can improve your experience by not showing you issues that you do not want to learn further about. </h5>
            </div>
            <div class = "faq_box">
                <h4>Why should I use Involvopedia?</h4>
                <h5>Most people are unaware of a lot of social issues, and that’s perfectly OK! The best way to become a more active member of your community is to learn about the issues facing your peers, and a great way to do that is Involvopedia, which will allow you to learn about issues facing your hometown, your country, or the entire world. You can also learn about issues that don’t directly affect you or your local community, but still affect a lot of people around the world. </h5>
            </div>
            <div class = "faq_box">
                <h4>How do you add new cards?</h4>
                <h5>We will add a feature to allow organizations to register and create new cards.</h5>
        </div>
        </div>
    </div>
    `
})
vm = new Vue({ el: '#faq_container' })