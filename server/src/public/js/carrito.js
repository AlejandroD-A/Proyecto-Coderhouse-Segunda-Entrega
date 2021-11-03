document.addEventListener('DOMContentLoaded', () => {

    const addToCart = document.getElementById('addToCart')
    
    addToCart.addEventListener('submit',async (e)=>{
        try{
            e.preventDefault()
            const quantity = document.getElementById('quantity').value
            const URI = addToCart.target

            const res = await fetch(`${URI}?quantity=${quantity}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }            
            })
            const jsonData = await res.json()
            console.log(jsonData)

            if(res.ok){
                alert('Se ha agregado el elemento al carrito')
            }
           
        }catch(err){
            console.log(err)
        }
    })
})
