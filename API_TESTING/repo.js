async function Repo(){
    let name=document.getElementById(`repoName`).value
    let repoDesc=document.getElementById(`description`).value
    let visibility=document.getElementById(`Visibility`).value

    let cnd=false
    if(visibility=="private"){
        cnd=true
    }
    
    let bodyObject={
        "name":name,
        "description":repoDesc,
        "private":cnd
    }
    const url=`https://api.github.com/user/repos`;
    const options={
        method:'POST',
        headers:{
            "Authorization":"Bearer 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",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(bodyObject)
    }
    try {
        const response=await fetch(url,options)
        const result=await response.json()
        console.log(result);

        const data=document.getElementsByClassName(`container`)
        data.innerHTML=`<h1>New Repository is Successfully Created</h1>`
    } catch (error) {
        console.log("Undefined Error",error);
        
    }
}