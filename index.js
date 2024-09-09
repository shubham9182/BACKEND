require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData={
  "login": "shubham9182",
  "id": 100182227,
  "node_id": "U_kgDOBfio0w",
  "avatar_url": "https://avatars.githubusercontent.com/u/100182227?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shubham9182",
  "html_url": "https://github.com/shubham9182",
  "followers_url": "https://api.github.com/users/shubham9182/followers",
  "following_url": "https://api.github.com/users/shubham9182/following{/other_user}",
  "gists_url": "https://api.github.com/users/shubham9182/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shubham9182/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shubham9182/subscriptions",
  "organizations_url": "https://api.github.com/users/shubham9182/orgs",
  "repos_url": "https://api.github.com/users/shubham9182/repos",
  "events_url": "https://api.github.com/users/shubham9182/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shubham9182/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shubham Mishra",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Software Developer",
  "twitter_username": "Shubham48637237",
  "public_repos": 14,
  "public_gists": 0,
  "followers": 3,
  "following": 1,
  "created_at": "2022-02-22T04:28:41Z",
  "updated_at": "2024-09-09T09:12:46Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.get('/twitter',(req,res)=>{
  res.send('Shubhamdotcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login at tango</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>tango is name</h2>")
})

app.get("/github",(req,res)=>{
  res.json(githubData)

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
