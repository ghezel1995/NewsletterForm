// Select the form with id='newsletterForm'
document
  .getElementById('newsletterForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the email value entered by the user
    let email = document.getElementById('email').value;
    if (!email) {
      alert('Please enter your email');
      return;
    } else {
      console.log(email);

      //Store the data in the localStorage
      let subscriber = { email: email };
      let subscribers = localStorage.getItem('subscribers');
      if (subscribers) {
        subscribers = JSON.parse(subscribers);
        subscribers.push(subscriber);
      } else {
        subscribers = [subscriber];
      }
      localStorage.setItem('subscribers', JSON.stringify(subscribers));

      // Display the success message for about 3 second
      document.getElementById('successMessage').style.display = 'block';

      setTimeout(function () {
        document.getElementById('successMessage').style.display = 'none';
      }, 3000);

      document.getElementById('newsletterForm').reset();
    }
  });
