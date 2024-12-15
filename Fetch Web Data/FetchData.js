console.log("Script loaded");
function getSiteData(){

    const url = 'https://jsonplaceholder.typicode.com/users/';

    fetch(url)
    .then((response)=> {
        return response.json();
    })
    
    .then((data)=>{
        console.log(data);
        let list = document.getElementById('listing');
        let listing = data;

        data.map(function(item){
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let phone = document.createElement('h4');
            let website = document.createElement('a');
            let company = document.createElement('p');
            let email = document.createElement('h4');
           
            name.innerHTML = item.name;
            email.innerHTML = item.email;
            address.innerHTML = `${item.address.street}<br> ${item.address.suite} <br>${item.address.city}<br>${item.address.zipcode}`;
            phone.innerHTML = item.phone;
            website.href = `http://${item.website}`;
            website.textContent = item.website;
            website.target=`_blank`;
            company.innerHTML = `${item.company.name}<br> ${item.company.catchPhrase} <br>${item.company.bs}`;

            li.appendChild(name);
            li.appendChild(address);
            li.appendChild(company);
            li.appendChild(website);
            li.appendChild(email);
            li.appendChild(phone);
            list.appendChild(li);
            

        });
    
    })





}
