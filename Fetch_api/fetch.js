const api_ulr="https://api.github.com/users/krishnaratnala"

async function fetch_github_user_data(){
    const data =await fetch(api_ulr)
    const json_data = await data.json()
    console.log(json_data);
}
fetch_github_user_data();
