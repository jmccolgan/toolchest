const authUrl = 'https://www.reddit.com/api/v1/authorize?client_id=KYyLRwJk0iXEBAk5Ef7vCQ&response_type=token&state=1337&redirect_uri=http://localhost:5173/news&scope=identity,edit,flair,history,modconfig,modflair,modlog,modposts,modwiki,mysubreddits,privatemessages,read,report,save,submit,subscribe,vote,wikiedit,wikiread'


export const redditAuthorized =  () => {
    let haveTokenCheck = JSON.parse(sessionStorage.getItem("reddit_token"))
    const params = new URLSearchParams(window.location.hash);

    if(haveTokenCheck != null && haveTokenCheck.accessToken != null){
        // console.log(`token found in storage ${haveTokenCheck}`)
        // console.log(haveTokenCheck)
        
    } else if(params.get("#access_token")){

        let accessDetails = {
            accessToken:params.get("#access_token"),
            tokenType: params.get('token_type'),
            state: params.get("state"),
            expiresIn: params.get("expires_in"),
            scope: params.get("scope"),
        
        }
        // console.log(`token found in URL ${accessDetails}`)

        sessionStorage.setItem("reddit_token", JSON.stringify(accessDetails));

    }
    else{

        document.location = authUrl;

    }

}



