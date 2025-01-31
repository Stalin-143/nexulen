// Create the Forbidden page elements dynamically
function createForbiddenPage() {
    // Create body element for the page
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.backgroundColor = '#f4f4f4';

    // Create the container for the Forbidden message
    const forbiddenContainer = document.createElement('div');
    forbiddenContainer.style.backgroundColor = '#fff';
    forbiddenContainer.style.padding = '40px';
    forbiddenContainer.style.borderRadius = '10px';
    forbiddenContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    forbiddenContainer.style.textAlign = 'center';
    forbiddenContainer.style.width = '400px';
    forbiddenContainer.style.maxWidth = '90%';

    // Title element
    const title = document.createElement('h1');
    title.innerText = '403 Forbidden';
    title.style.fontSize = '36px';
    title.style.marginBottom = '20px';
    title.style.color = '#e74c3c'; // Red color for error

    // Message element
    const message = document.createElement('p');
    message.innerText = 'You are not able to access this page.';
    message.style.fontSize = '18px';
    message.style.color = '#555';
    message.style.marginBottom = '20px';

    // Button element
    const button = document.createElement('button');
    button.innerText = 'Contact Nexulean Customer Support';
    button.style.backgroundColor = '#3498db';
    button.style.color = '#fff';
    button.style.padding = '15px 30px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s ease';

    // Button hover effect
    button.onmouseover = function() {
        button.style.backgroundColor = '#2980b9';
    };

    button.onmouseout = function() {
        button.style.backgroundColor = '#3498db';
    };

    // Add button click event
    button.onclick = function() {
        contactSupport();
    };

    // Append all elements to the container
    forbiddenContainer.appendChild(title);
    forbiddenContainer.appendChild(message);
    forbiddenContainer.appendChild(button);

    // Append the container to the body
    document.body.appendChild(forbiddenContainer);
}

// Function to handle contact support button click
function contactSupport() {
    // Redirect to Nexulean support email using mailto
    alert('Redirecting to Nexulean customer support...');
    window.location.href = 'mailto:nexulean@gmail.com';  // Opens the default email client
}

// Call the function to create the Forbidden page
createForbiddenPage();
