// Function to send data
async function sendPostData(data) {
    try {
      const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log('Data sent successfully');
        // Redirect to the index page upon successful submission
        window.location.href = './index.html';
      } else {
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Find the form
  const form = document.querySelector('.form');
  
  // When the form is submitted
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get data from the form
    const title = form.querySelector('input[type="text"]').value.trim();
    const image = form.querySelectorAll('input[type="text"]')[1].value.trim();
    const tag = form.querySelectorAll('input[type="text"]')[2].value.trim();
    const description = form.querySelector('.description').value.trim();
  
    // Validate data
    if (!title || !image || !tag || !description) {
      console.error('Please fill in all fields');
      return;
    }
  
    // Prepare data object for submission
    const postData = {
      title,
      image,
      tag,
      description
    };
  
    // Call function to send data
    sendPostData(postData);
  });
  