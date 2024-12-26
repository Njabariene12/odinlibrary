const booker = [];


function Booketh(title, pages, status){  
        this.title = title;
        this.pages = pages;
        this.status = status;
        console.log(title, pages, status);
        this.statuschange = function(){
            this.status == !this.status;
        }
}




function addBookToLibrary(booka){  
   booker.push(booka);
   showbook()
}

function showbook(){
    const displaya = document.getElementById("textb");
    displaya.innerHTML = "";

    booker.forEach((booka, index) => {
        const frame = document.createElement("div");
        frame.classList.add("bookframe");
        frame.setAttribute("data-index", index);

        frame.innerHTML = `
        <p>Title: ${booka.title}</p>
        <p>Pages: ${booka.pages}</p>
        <p>Read: ${booka.status === "read" ? "Yes" : "No"}</p>
        <button class="readst">read status</button>
        <button class="del">remove</button>`;

        frame.querySelector(".readst").addEventListener("click", () => {
            booker[index].statuschange();
            showbook();
        });

        frame.querySelector(".del").addEventListener("click", () => {
            booker.splice(index, 1);
            showbook();
        })

        displaya.appendChild(frame);
    })
}
document.getElementById("showlib").addEventListener("click", () => {
    const bform = document.getElementById("book-form-dialog");
    bform.showModal();
})

document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
   
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

    const newBook = new Booketh(title, pages, status);
    addBookToLibrary(newBook)

    document.getElementById("book-form").reset();
    document.getElementById("book-form-dialog").close();
});






/*
function Booketh(name, pages, status){
    this.name = name;
    this.pages = pages;
    this.status = status;
    this.booka = function(){
        console.log(name, pages, status);
    };
}


function addBookToLibrary(booka){  
    nearr = []
    const hobs = new Booketh(arra.value, page.value, state);   
    nearr.push(hobs);
}




function showbook(){
    for(let i = 0; i < booker.length; i++){
        states += i;        
    }
    console.log(states);
}

addtolibs.addEventListener("click", () => {  
    const hobs = new Booketh(arra.value, page.value, state);
    addBookToLibrary(hobs);
    booker.push(nearr);
    console.log(booker);
    result = hobs.booka();
    display.addEventListener("click", () => {       
        document.getElementById('result').innerHTML = result;  
        return result
    })
})



showlib.addEventListener("click", () => {
    const hobs = new Booketh(arra.value, page.value, state);
    document.getElementById('textb').innerHTML = booki;  
    booki += hobs.booka();
    return booki 
})




'The Hobbit by J.R.R. Tolkien', '295 pages', 'not read'


Booketh.prototype.details = function(){
    console.log(`${this.name}, Was read`)
}


const hobs = new Booketh('The Hobbit by J.R.R. Tolkien', '295 pages', 'not read');
const ngut = new Booketh("River Between by Ngugi Wa Thiong'o", '300 pages', 'read');
const biko = new Booketh('Thursdays by Biko', '180 pages', 'read');
const ngozi = new Booketh('African sun by Chimamanda Ngozi', '250 pages', 'not read');

lib = booker.push(hobs.book(), ngut.book(), biko.book(), ngozi.book());

console.log(Object.getPrototypeOf(hobs));


const buttons = document.querySelectorAll('button');
function Isread(rechoice){
    let result = " ";
    if(rechoice == 'read'){
        result = "We read that one";
        document.getElementById('result').innerHTML =  result;
        return result;
    };
    if(rechoice == 'unread'){
        result = "We haven't read that one";
        document.getElementById('result').innerHTML =  result;
        return result;
    };

}buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        Isread(btn.value);
    })
}) 




const addtolibs = document.getElementById("addtolib");
const display = document.getElementById("display");
const showlib = document.getElementById("showlib");
const arra = document.getElementById('authorinfo');
const page = document.getElementById('pages');
const state = document.getElementById("status");
let states = "";
let result = "";
let booki = "";
*/