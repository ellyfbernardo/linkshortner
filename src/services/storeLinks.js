//Buscar os links salvos.
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves

}


// Salvar um link no LocalStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //se já tiver um link salvo com algum ID eu não vou deixar duplicar

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        alert('Esse link já existe na sua lista')
        return;
    }
    //Adicionar esse novo link na lista

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso');


}



//Deletar algum link salvo

export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('Link deletado com sucesso!')

    return myLinks;
}