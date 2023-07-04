// Select the form with id='newsletterForm'
document
  .getElementById('newsletterForm')
  .addEventListener('submit', function (event) {
    // Prevents the form from submitting and refreshing the page
    event.preventDefault();
    // Get the email value entered by the user
    let email = document.getElementById('email').value;
    if (!email) {
      alert('Please enter your email');
      return;
    } else {
      console.log(email);

      let subscriber = { email: email };
      let subscribers = localStorage.getItem('subscribers');
      if (subscribers) {
        subscribers = JSON.parse(subscribers);
        subscribers.push(subscriber);
      } else {
        subscribers = [subscriber];
      }
      localStorage.setItem('subscribers', JSON.stringify(subscribers));

      // Display the success message
      document.getElementById('successMessage').style.display = 'block';

      // Optionally, you can reset the form after submission
      document.getElementById('newsletterForm').reset();
    }
  });
