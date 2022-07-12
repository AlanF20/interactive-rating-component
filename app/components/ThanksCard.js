const ThanksCard = (rating) =>{
    const $thanksContainer = document.createElement('article');
    $thanksContainer.innerHTML = `
        <img class="main__article-thankyou" src="./app/assets/public/illustration-thank-you.svg" alt="Thank you for your feedback!">
        <div class="main__article-feedback">
            You selected ${rating} out of 5
        </div>
        <div class="main__article-question">
         <h2 class="main__article-title">Thank you!</h2>
         <p class="main__article-paragraph">
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!.
         </p>
        </div>
    `;
    $thanksContainer.className = "main__article"
    return $thanksContainer;
}

export default ThanksCard;