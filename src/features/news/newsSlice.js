import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = 'https://www.reddit.com/api/v1/authorize?client_id=KYyLRwJk0iXEBAk5Ef7vCQ&response_type=token&state=12345&redirect_uri=http://localhost:5173/news&scope=read'
// const url1 ='http://google.com'

// export const fetchToken = createAsyncThunk(
//   'news/fetchToken',
//   async () => {
//     document.location = url;
//     // window.open(url,"" , "width=500,height=500" );

//     alert(token)

//     return token;
//   }
// )


export const loadPreviews = createAsyncThunk(
    'news/loadPreviews',
    async () => {
        console.log('fetching')
        const data = await fetch('http://localhost:5173/news.json')
        const json = await data.json()
        console.log(data)
        console.log(json)
        return json 
    }
);

export const newsSlice = createSlice({
    name:'news',
    initialState: {
        articles: {},
        isLoadingArticlePreviews: false,
        hasError: false,
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
            state.hasError = false;
          })
          .addCase(loadPreviews.fulfilled, (state, action) => {
            state.isLoadingArticlePreviews = false;
            state.articles = action.payload;
          })
          .addCase(loadPreviews.rejected, (state, action) => {
            state.isLoadingArticlePreviews = false;
            state.hasError = true;
            state.articles = {};
          })
      },

})



export default newsSlice.reducer;
export const { setToken } = newsSlice.actions
export const selectAllPreviews = (state) => state.news.articles;
export const isLoading = (state) => state.news.isLoading;
export const getToken = (state) => state.news.token