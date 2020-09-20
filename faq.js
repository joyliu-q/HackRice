Vue.component('faq', {
    data: function () {
      return {
        
      }
    },
    template: `
    <div>
        <div class = "content">
            <h2 class="v2">FAQ</h2>
            <div class = "faq_box">
                <h2>How do you recommend users about social issues?</h2>
                <p>We will add a feature to allow members to create an account and select areas and topics they may be interested in, and use these data to recommend our users social issues.</p>
            </div>
            <div class = "faq_box">
                <h2>How do you add new cards?</h2>
                <p>We will add a feature to allow organizations to register and create new cards.</p>
            </div>
            <div class = "faq_box">
                <h2>How will you make sure all the cards are introducing social issues, rather than fake news or propaganda?</h2>
                <p>We will have a committee to approve every single new card submissions from organizations. We will also check the organization’s previous records to ensure they are using our website appropriately.</p>
            </div>
        </div>
    </div>
    `
})
vm = new Vue({ el: '#faq_container' })