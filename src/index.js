const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID").value;
  
      fetch(`http://localhost:3000/movies/${input}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  