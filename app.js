document
  .getElementById('newsletterForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

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

      document.getElementById('successMessage').style.display = 'block';

      document.getElementById('newsletterForm').reset();
    }
  });
