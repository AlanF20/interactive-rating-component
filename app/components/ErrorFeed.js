const ErrorFeed =()=>{
    const $ErrorFeed = document.createElement("div");
    $ErrorFeed.textContent = "Please select a number to add your feedback";
    $ErrorFeed.style.color = "red";
    $ErrorFeed.style.background = "#313a48";
    $ErrorFeed.style.padding = "10px";
    $ErrorFeed.style.borderRadius = "10px";
    $ErrorFeed.style.textAlign = "center";
    return $ErrorFeed;
}
export default ErrorFeed;