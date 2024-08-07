function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);
        if (country) {
          const description = country.description;
          resultDiv.innerHTML += `<img src="${country.imageURL}" alt="hjh">`;
          resultDiv.innerHTML += `<h3>${country.name}</h3>`;
          resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);
