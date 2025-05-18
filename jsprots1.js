const booker = [];


class Booketh{  
    constructor(title, pages, status){
        this.title = title;
        this.pages = pages;
        this.status = status;
    }
        
        togglestatus(){
            this.status = !this.status;
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
        <p>Read: ${booka.status ? "Yes" : "No"}</p>
        <button class="readst">read status</button>
        <button class="del">remove</button>`;

        displaya.appendChild(frame);
        frame.querySelector(".readst").addEventListener("click", () => {
            booker[index].togglestatus();
            showbook();
        });
        frame.querySelector(".del").addEventListener("click", () => {
            booker.splice(index, 1);
            showbook();
        });

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
    const status = document.getElementById("status").checked;

    const newBook = new Booketh(title, pages, status);
    addBookToLibrary(newBook)

    document.getElementById("book-form").reset();
    document.getElementById("book-form-dialog").close();
});