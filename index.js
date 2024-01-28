require('dotenv').config()
const express = require('express')
const app = express();
const githubdata = {
  "login": "ShreeshHunnur",
  "id": 131763615,
  "node_id": "U_kgDOB9qNnw",
  "avatar_url": "https://avatars.githubusercontent.com/u/131763615?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ShreeshHunnur",
  "html_url": "https://github.com/ShreeshHunnur",
  "followers_url": "https://api.github.com/users/ShreeshHunnur/followers",
  "following_url": "https://api.github.com/users/ShreeshHunnur/following{/other_user}",
  "gists_url": "https://api.github.com/users/ShreeshHunnur/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ShreeshHunnur/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ShreeshHunnur/subscriptions",
  "organizations_url": "https://api.github.com/users/ShreeshHunnur/orgs",
  "repos_url": "https://api.github.com/users/ShreeshHunnur/repos",
  "events_url": "https://api.github.com/users/ShreeshHunnur/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ShreeshHunnur/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shreesh Hunnur",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "CSE Undergrad and a sophomore at Vellore Institute of Technology Chennai",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-04-25T09:58:08Z",
  "updated_at": "2024-01-28T08:25:39Z"
}

app.get("/",(req , res) => {
  res.send("<h1>SHreesh Hunnur</h1>")
})

app.get('/github',(req,res)=>{
  res.json(githubdata);
})

app.listen(process.env.PORT, () =>{
  console.log(`Program started and listening to port ${process.env.PORT}`)
})


