// for image api 

export const getImageUrl = async image =>{
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`
    
    const formData = new FormData()
    formData.append('image', image)

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    })
    const data = await response.json();
    return data.data.display_url
}