const urlParams = new URLSearchParams(window.location.search);
        const success = urlParams.get('success');
        const confirmationDiv = document.getElementById('confirmation');

        if (success === 'true') {
            confirmationDiv.textContent = "Email sent successfully!";
            confirmationDiv.style.display = "block";
        } else if (success === 'false') {
            confirmationDiv.textContent = "Failed to send email. Please try again.";
            confirmationDiv.style.color = "red";
            confirmationDiv.style.display = "block";
		}