

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

/** Mendapatkan API dari localhost:3000 yg sudha dibuat */
const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPosts(data);
    })
   
}

const buildPosts = (blogPosts) => {
    /** Mendapatkan semua object di API */
    let blogPostContent = "";
    for (blogPost of blogPosts) {
        blogPostContent += `
        
        
        
        
        
        `
    }
}