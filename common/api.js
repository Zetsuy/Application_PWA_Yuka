import axios from 'axios'

export async function asyncGetProducts() {
  try {
    const storedProducts = localStorage.getItem('storedProducts')
    if(storedProducts){
      console.log('stored version found')

      return JSON.parse(storedProducts)
    }
    const response = await axios.get('http://localhost:3001/products')
    const {data} = response
    
    localStorage.setItem('storedProduct',data)
    return data
  } catch (err) {
    console.error('o no')
    return []
  }
}
