let tbl=document.querySelector('.amend')

let info=[
    {
        name:"Jake",
        price:5000,
        image:"https://i.postimg.cc/ZYVWW23R/th-1250071778.jpg",
        

    },
    {
        name:"Jade",
        price:15000,
        image:"https://i.postimg.cc/RVtnTbQ9/th-282130672.jpg",
        
    },
    {
        name:"Jode",
        price:115000,
        image:"https://i.postimg.cc/908gMXjK/K.png",
        
    }
]

info.forEach(item => {
    tbl.innerHTML += 
    `
    <tr>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td><img src=${item.image}></td>
    <td><button>Add </button></td>
    <td><button>Delete </button></td>
</tr>
    `
})
