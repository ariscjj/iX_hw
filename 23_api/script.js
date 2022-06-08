const fact_url =  "https://cat-fact.herokuapp.com/facts";  
const base_url="https://cataas.com"
const img_url =  "https://cataas.com/cat?json=true"; 


async function getFacts() {
  const response = await fetch(fact_url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.json();
}


async function getImage() {
  const response = await fetch(img_url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.json();
}



async function init() {
  try {
    const facts = await getFacts();
    rand = Math.floor(Math.random() * facts.length);
    
    var fact = document.getElementById("fact");
    fact.innerHTML = facts[rand].text; 

    const cat_img = await getImage();
    console.log(cat_img)
    const cat_img_url = base_url + cat_img.url 
    console.log(cat_img_url); 

    var cat = document.getElementById("cat"); 
    cat.setAttribute("src", cat_img_url); 
    console.log(cat.getAttribute("src")); 
    console.log("hello")

  } 
    catch (err) {
  }
}

init();
