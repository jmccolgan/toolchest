const authUrl = 'https://www.reddit.com/api/v1/authorize?client_id=KYyLRwJk0iXEBAk5Ef7vCQ&response_type=token&state=12345&redirect_uri=http://localhost:5173/news&scope=read'

export const redditAuthorized = () => {
    let haveTokenCheck = JSON.parse(sessionStorage.getItem("reddit_token"))
    console.log(haveTokenCheck)
    if(haveTokenCheck){
        console.log('token found')
    }else{
        console.log('token not found')
        document.location = authUrl;
        const params = new URLSearchParams(window.location.hash);

        let accessDetails = {
            accessToken:params.get("#access_token"),
            tokenType: params.get('token_type'),
            state: params.get("state"),
            expiresIn: params.get("expires_in"),
            scope: params.get("scope"),
        }
    
        sessionStorage.setItem("reddit_token", JSON.stringify(accessDetails));
    }

}
