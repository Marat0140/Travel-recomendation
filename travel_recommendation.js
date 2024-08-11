function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json')
      .then(response => response.json())  
      .then((data)=> {
              const country = data.countries.find(item => item.name.toLowerCase() === input);
              if (country) {
                  country.cities.forEach((city) =>{
                      const cityDiv = document.createElement('div');
                      cityDiv.setAttribute("id", city.name);
                      cityDiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
                      cityDiv.innerHTML += `<h3>${city.name}</h3>`;
                      cityDiv.innerHTML += `<p><strong>Description:</strong> ${city.description}</p>`;
                      resultDiv.append(cityDiv)
                  })
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
