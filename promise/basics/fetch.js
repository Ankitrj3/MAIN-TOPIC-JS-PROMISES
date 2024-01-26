function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = Math.random() > 0.5 ? "Success data" : null;
        if (data) {
          resolve(data);
        } else {
          reject("Error: Unable to fetch data");
        }
      }, 2000);
    });
  }
  
  fetchData()
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  