import express from "express"

const app= express()

app.get('/api/jokes', (req, res)=>{
    const jokes=[
        {
          "id": 1,
          "title": "Why don't scientists trust atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 2,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 3,
          "title": "Why don't skeletons fight each other?",
          "content": "They don't have the guts."
        },
        {
          "id": 4,
          "title": "What do you get when you cross a snowman and a vampire?",
          "content": "Frostbite."
        },
        {
          "id": 5,
          "title": "Why was the math book sad?",
          "content": "Because it had too many problems."
        },
        {
          "id": 6,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta."
        },
        {
          "id": 7,
          "title": "Why don't programmers like nature?",
          "content": "It has too many bugs."
        },
        {
          "id": 8,
          "title": "How does a penguin build its house?",
          "content": "Igloos it together."
        },
        {
          "id": 9,
          "title": "Why did the bicycle fall over?",
          "content": "Because it was two-tired."
        },
        {
          "id": 10,
          "title": "Why was the computer cold?",
          "content": "Because it left its Windows open."
        }
      ]
      res.send(jokes)
      
})

const PORT = process.env.PORT || 2800

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
})