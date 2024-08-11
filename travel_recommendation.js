function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json')
      .then(response => {
          response.json().then((data)=> {
              //console.log(r)
              const country = data.countries.find(item => item.name.toLowerCase() === input);
              console.log(country)
              if (country) {
                  country.cities.forEach((city) =>{
                      resultDiv.innerHTML += `<img src="${city.imageURL}" alt="hjh">`;
                      resultDiv.innerHTML += `<h3>${city.name}</h3>`;
                      resultDiv.innerHTML += `<p><strong>Description:</strong> ${city.description}</p>`;
                  })
              } else {
                  resultDiv.innerHTML = 'Condition not found.';
              }
          })
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);
