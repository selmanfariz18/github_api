
async function getData(){
    const res=await fetch('https://api.github.com/users/selmanfariz18')
    const data=await res.json()

    const card =document.querySelector('.a')
    const name =document.createElement('h3')
    name.textContent=data.name

    card.appendChild(name)

    const repo=await fetch('https://api.github.com/users/selmanfariz18')
    const data1=await repo.json()


    const card1 =document.querySelector('.a')
    const repo_name =document.createElement('h3')
    repo_name.textContent='repo count='+ data1.public_repos
    //location.reload();

    card.appendChild(repo_name)

    const folo=await fetch('https://api.github.com/users/selmanfariz18')
    const data2=await folo.json()

    const card2 =document.querySelector('.card')
    const folo_name =document.createElement('h3')
    folo_name.textContent='folowers='+ data2.followers

    card.appendChild(folo_name)

    const folow=await fetch('https://api.github.com/users/selmanfariz18')
    const data3=await folow.json()

    const card3 =document.querySelector('.card')
    const folow_name =document.createElement('h3')
    folow_name.textContent='folowing='+ data3.following

    card.appendChild(folow_name)

    const org=await fetch('https://api.github.com/users/selmanfariz18/orgs')
    const data4=await org.json()

    const card4 =document.querySelector('.card')
    const org_name =document.createElement('h3')
    org_name.textContent='organisations='+ data4.length

    card.appendChild(org_name)

}
getData();    
