function sendEmail() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = "miguelrodfher@gmail.com";
        var idea = document.querySelector("#idea").value;
        var subject = "New Idea Submission";
        var body = "A user has submitted the following idea: " + idea;
        window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    });
  }