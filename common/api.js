import axios from 'axios'

export async function asyncGetProducts() {
  try {
    const response = await axios.get('http://localhost:3001/products')
    const {data} = response
    return data
  } catch (err) {
    console.error('o no')
    return []
  }
}
