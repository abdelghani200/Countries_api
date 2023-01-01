const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");
//console.log(region);

async function getCountry()
{
    const url= await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);
    });
}

getCountry()

function showCountry(data)
{
    const country=document.createElement("div")
    country.classList.add("country")
    country.innerHTML=` <div class="country-img">
    <img src="${data.flag}" alt="">
    </div>
    <div class="country-info">
    <h5 class="countryName">${data.name}</h5>
    <p><strong>Population:</strong>${data.population}</p>
    <p class="regionName"><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
    </div>`;
    
    countriesElem.appendChild(country)
}

dropDown.addEventListener("click",()=>{
    
    dropElem.classList.toggle("showDropDown")
    //console.log("hello");
    
})

const regionName = document.getElementsByClassName("regionName");

region.forEach(element => {
    element.addEventListener("click",()=>{
        // console.log(element.innerText);
        console.log(element);
        Array.from(regionName).forEach(ele =>{
            //console.log(ele.innerText);
            if(ele.innerText.includes(element.innerText) || element.innerText == "All"){
                ele.parentElement.parentElement.style.display = "grid";
            }
            else{
                ele.parentElement.parentElement.style.display = "none";
            }
        });
    })
});

const countryName = document.getElementsByClassName("countryName");
search.addEventListener("input",()=>{
    Array.from(countryName).forEach(ele =>{
    console.log(search.value);
    if(ele.innerText.includes(search.value)){
        ele.parentElement.parentElement.style.display = "grid";
    }
    else{
        ele.parentElement.parentElement.style.display = "none";
    }
   });
})

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})