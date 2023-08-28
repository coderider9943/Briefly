document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copy-link-button-id").addEventListener("click", function() {
      var url = localStorage.getItem("meetingurl"); // Get current meeting URL
      var tempInput = document.createElement("input"); // Create a temporary input element
      tempInput.value = url; // Assign the URL to the input element
      document.body.appendChild(tempInput); // Append the input element to the body
      tempInput.select(); // Select the text in the input element
      document.execCommand("copy"); // Copy the text to the clipboard
      document.body.removeChild(tempInput); // Remove the temporary element
      alert('URL copied to clipboard'); // Optional: Show a message that URL is copied.
    });
  });
  