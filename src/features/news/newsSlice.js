import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadUserDetails = createAsyncThunk(
  'news/loadUserDetails', 
  async () => {
    // console.log(`here!`)
    let accessToken = await JSON.parse(sessionStorage.getItem("reddit_token")).accessToken
    
    // console.log(accessToken)
    let UserDetailUrl = new URL("https://oauth.reddit.com/api/v1/me")

    const UserDetailResponse = await fetch(UserDetailUrl, {
        method:"GET",
        headers: {
            Authorization: 'bearer ' + accessToken
        },
    });


    const userDetail = await UserDetailResponse.json();
    // console.log(UserDetailResponse)
    // console.log(userDetail)

    return userDetail

  }
)

export const loadPreviews = createAsyncThunk(
    'news/loadPreviews',
    async () =>  {
        // console.log(`here!`)
    let accessToken = await JSON.parse(sessionStorage.getItem("reddit_token")).accessToken
    
    // console.log(accessToken)
    let requestUrl = new URL('https://oauth.reddit.com/best/?show=all')
    console.log(requestUrl)
    const response = await fetch(requestUrl, {
        method:"GET",
        headers: {
            Authorization: 'bearer ' + accessToken
        },
    });
    console.log(response)
    const json = await response.json();
  
    console.log(json)

    return json

  }
);

// export const loadPreviews = createAsyncThunk(
//     'news/loadPreviews',
//     async () => {
//         // console.log('fetching')
//         const data = await fetch('http://localhost:5173/news.json')
//         const json = await data.json()
//         console.log(data)
//         console.log(json)
//         return json 
//     }
// );

export const newsSlice = createSlice({
    name:'news',
    initialState: {
        articles: {},
        userInfo: {},
        isLoadingArticlePreviews: false,
        loadingArticlePreviewsError: false,
        isLoadingUserInfo: false,
        LoadingUserInfoError: false,
        token: 0,
    },
    reducers:{
        setToken: (state, action) =>{
          state.token = action.payload;
          console.log(state.token)
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(loadPreviews.pending, (state) => {
            state.isLoadingArticlePreviews = true;
            state.loadingArticlePreviewsError = false;
          })
          .addCase(loadPreviews.fulfilled, (state, action) => {
            state.isLoadingArticlePreviews = false;
            state.loadingArticlePreviewsError = false
            state.articles = action.payload;
          })
          .addCase(loadPreviews.rejected, (state, action) => {
            state.isLoadingArticlePreviews = false;
            state.loadingArticlePreviewsError = true;
            console.log(action)
            state.articles = {};
          })
          .addCase(loadUserDetails.pending, (state) => {
            state.isLoadingUserInfo = true;
            state.LoadingUserInfoError = false;
          })
          .addCase(loadUserDetails.fulfilled, (state, action) => {
            state.isLoadingUserInfo = false;
            state.LoadingUserInfoError = false;
            state.userInfo = action.payload;
          })
          .addCase(loadUserDetails.rejected, (state, action) => {
            state.isLoadingUserInfo = false;
            state.LoadingUserInfoError = true;
            state.userInfo = {};
          })
      }

})



export default newsSlice.reducer;
export const { setToken } = newsSlice.actions
export const selectAllPreviews = (state) => state.news.articles;
export const isLoading = (state) => state.news.isLoading;
export const getToken = (state) => state.news.token