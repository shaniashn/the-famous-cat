<template>
  <div class="feeds">
    <h1>feeds</h1>
    <div class="feeds-page">
      <div class="feeds-type">
        <span>popular</span>
        <span>my posts</span>
      </div>
      
      <!-- new post -->
      <div class="newpost-container" v-show="hideNewPost">
        <div class="new-post">
          <div class="close-mark">
            <span @click="hideContainer"><font-awesome-icon icon="fa-solid fa-xmark" /></span>
          </div>
          <form @submit="addPost">
            <input type="text" placeholder="title" v-model="title" />
            <textarea name="" id="" rows="10" v-model="desc"></textarea>
            <button type="submit">post</button>
          </form>
        </div>
      </div>
      <!-- new post -->

      <!-- feeds showContainer -->
      <div class="post-preview" @click="showContainer">
        <span>what are your cats doing now?</span>
      </div>

      <div class="post" v-for="post in posts" :key="post">
        <div class="post-profile">
          <a href="">{{ post.username }}</a>
        </div>
        <div class="post-title">
          <p>{{ post.title }}</p>
        </div>
        <div class="post-desc">
          <p>{{ post.desc }}</p>
        </div>
        <div class="post-image"></div>
        <div class="post-reaction" @click="likePost(post.id)">
          <p v-show="liked"><font-awesome-icon icon="fa-solid fa-heart" /> 6</p>
          <p v-show="!liked">
            <font-awesome-icon icon="fa-regular fa-heart" /> 6
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsView",
  data() {
    return {
      hideNewPost: false,
      posts: [],
      username: "jegie",
      title: "",
      desc: "",
      likeCount: "",
      liked: false,
    };
  },
  methods: {
    hideContainer() {
      this.hideNewPost = false;
      document.body.style.position = "static";
    },
    showContainer() {
      this.hideNewPost = true;
      document.body.style.position = "fixed";
    },
    likePost(id) {
      console.log("post id", id);

      this.liked = !this.liked;

      let likedPost = this.posts.filter((post) => post.id == id);

      console.log(likedPost);
    },
    // addPost(){
    //   const username = this.username
    //   const title = this.title
    //   const desc = this.desc

    //   const newPost = {
    //     username: username,
    //     title: title,
    //     desc: desc
    //   }

    //   this.posts.push(newPost)
    //   console.log(this.posts);

    //   this.username = ''
    //   this.title = ''
    //   this.desc = ''
    //   this.hideContainer()
    // },
    addPost() {
      const username = this.username;
      const title = this.title;
      const desc = this.desc;

      const newPost = {
        username: username,
        title: title,
        desc: desc,
      };

      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      console.log("check new post?", this.posts);

      this.username = "";
      this.title = "";
      this.desc = "";
      this.hideContainer();

      this.getData();
    },
    async fetchData() {
      try {
        const URL = "http://localhost:3000/posts";
        let fetchedData = await fetch(URL);

        fetch(URL)
          .then((res) => res.json())
          .then((data) => console.log(data));

        if (fetchedData.status != 200) {
          throw new Error("Data fetching error.");
        }

        // this.posts = fetchedData.json();

        return fetchedData.json();
      } catch (err) {
        console.error();
      }
    },
    async getData() {
      const data = await this.fetchData();
      console.log("fetched from getData", data);

      for (let index = 0; index < data.length; index++) {
        this.posts.unshift(data[index]);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.feeds {
  width: 100%;
  margin: 25px 50px 0 50px;

  h1 {
    text-align: start;
  }
}

.feeds-type {
  margin-bottom: 25px;
  justify-self: center;

  span {
    margin: 20px;
    font-weight: 600;
  }
}

.newpost-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(242, 242, 242, 0.8);

  &.hidden {
    display: none;
  }
}

.new-post {
  height: auto;
  max-width: 90%;
  width: 50%;
  display: grid;
  justify-self: center;
  border: 0.5px solid #898989;
  padding: 25px;
  gap: 10px;
  position: fixed;
  background-color: #ffffff;
  border-radius: 5px;
  position: relative;
  top: 25vh;

  form {
    display: grid;
  }

  input {
    padding: 10px;
    margin-top: 15px;
    border: 0.5px solid #898989;
    border-radius: 5px;
  }

  textarea {
    padding: 10px;
    margin: 15px 0;
    border: 0.5px solid #898989;
    border-radius: 5px;
    resize: none;
  }

  button {
    height: 40px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;

    &:active {
      background-color: #e4e3e3;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.close-mark {
  margin: 10px;
  display: flex;
  justify-content: end;
  grid-auto-rows: 1fr;

  span {
    padding: 10px;
    background-color: #e4e4e4;
    border-radius: 75pt;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      background-color: #d9d9d9;
    }
  }
}

.post-preview {
  @include border-style-small;
  padding: 25px;
  display: flex;

  &:active {
    background-color: #e4e4e4;
  }
}

.post {
  padding: 25px;
  border: 0.5px solid #898989;
  border-radius: 5px;
  display: grid;
  text-align: start;
  gap: 10px;
  margin: 20px 0;

  a {
    text-decoration: none;
    font-weight: 600;
  }

  .post-reaction {
    padding: 4px 8px;
    border: 0.5px solid #a2a2a2;
    width: fit-content;
    border-radius: 75pt;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
