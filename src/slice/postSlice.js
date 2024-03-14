import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = {

  posts: [
    {
      id: "1",
      name: "bheem",
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: "9",
      image: "/assets/post/post1.jpg",
      // Date: "12 minutes ago",
      Date: sub(new Date(), { minutes: 34 }).toISOString(),
      profileImage: "/assets/image/360.jpg",
      comments: [],
      likeCount: 24,

      tags: ["history", "american", "crime"],
      reactions: 2
    },
    {
      id: "2",
      name: "chutki",
      title: "He was an expert but not in a discipline",
      body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      userId: "6",
      image: "/assets/post/post2.jpg",
      // Date: "36 minutes ago",
      Date: sub(new Date(), { minutes: 26 }).toISOString(),
      profileImage: "/assets/image/101.jpg",
      comments: [],
      likeCount: 27,
      tags: ["french", "fiction", "english"],
      reactions: 2
    },
    {
      id: "3",
      name: "dharmik",
      title: "Dave watched as the forest burned up on the hill.",
      body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      userId: "5",
      image: "/assets/post/post3.jpg",
      // Date: "52 minutes ago",
      Date: sub(new Date(), { minutes: 52 }).toISOString(),
      profileImage: "/assets/image/dharmik.jpg",
      comments: [],
      likeCount: 99,
      tags: ["magical", "history", "french"],
      reactions: 5
    },
    {
      id: "4",
      name: "gowri",
      title: "All he wanted was a candy bar.",
      body: "All he wanted was a candy bar. It didn't seem likeCount a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
      userId: "1",
      image: "/assets/post/post4.jpg",
      // Date: "6 hours ago",
      Date: sub(new Date(), { minutes: 12 }).toISOString(),
      profileImage: "/assets/image/free.jpg",
      comments: [],
      likeCount: 0,
      tags: ["mystery", "english", "american"],
      reactions: 1
    },
    {
      id: "5",
      name: "jeason",
      title: "Hopes and dreams were dashed that day.",
      body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      userId: "8",
      image: "/assets/post/post5.jpg",
      // Date: "1 hour ago",
      Date: sub(new Date(), { minutes: 22 }).toISOString(),
      profileImage: "/assets/image/raj.jpg",
      comments: [],
      likeCount: 3,
      tags: ["crime", "mystery", "love"],
      reactions: 2
    },
    {
      id: "6",
      name: "ayyanar",
      title: "Dave wasn't exactly sure how he had ended up",
      body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      userId: "7",
      image: "/assets/post/post6.jpg",
      // Date: "10 minutes ago",
      Date: sub(new Date(), { minutes: 54 }).toISOString(),
      profileImage: "./assets/image/flowers.jpg",
      comments: [],
      likeCount: 15,
      tags: ["english", "classic", "american"],
      reactions: 3
    },
    {
      id: "7",
      name: "gowsigaraj",
      title: "This is important to remember.",
      body: "This is important to remember. Love isn't likeCount pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
      userId: "2",
      image: "/assets/post/post7.jpg",
      // Date: "3 hours ago",
      Date: sub(new Date(), { minutes: 25 }).toISOString(),
      profileImage: "./assets/image/free.jpg",
      comments: [],
      likeCount: 4,
      tags: ["magical", "crime"],
      reactions: 0
    },
    {
      id: "8",
      name: "susmitha",
      title: "One can cook on and with an open fire.",
      body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
      userId: "10",
      image: "/assets/post/post8.jpg",
      // Date: "6 hours ago",
      Date: sub(new Date(), { minutes: 16 }).toISOString(),
      profileImage: "./assets/image/IMG.jpg",
      comments: [],
      likeCount: 6,
      tags: ["american", "english"],
      reactions: 9
    },
    {
      id: '9',
      name: "sindhu",
      title: "There are different types of secrets.",
      body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
      userId: "3",
      image: "/assets/post/post9.webp",
      // Date: "08 hours ago",
      Date: sub(new Date(), { minutes: 20 }).toISOString(),
      profileImage: "./assets/image/kirti.jpg",
      comments: [],
      likeCount: 19,
      tags: ["american", "history", "magical"],
      reactions: 2
    },
    {
      id: "10",
      name: "murali",
      title: "They rushed out the door.",
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: "4",
      image: "/assets/post/post10.webp",
      // Date: "10 hours ago",
      Date: sub(new Date(), { minutes: 5 }).toISOString(),
      profileImage: "./assets/image/101.jpg",
      comments: [],
      likeCount: 22,
      tags: ["fiction", "magical", "history"],
      reactions: 4,
    }
  ],


}



const postSlice = createSlice({

  name: "posts",
  initialState,
  reducers: {


    addPost: (state, action) => {
      const { id, title, image, name, profileImage } = action.payload;
      state.posts.push({
        id,
        title,
        image,
        Date: new Date().toISOString(),
        likeCount: 0,
        name,
        profileImage,

      });

    },

    //  removePost (state, action) {
    //   const postIdToRemove = action.payload;
    //   return state.posts.filter(post => post.id !== postIdToRemove);
    // },


    addPostComment: (state, action) => {
      const { postId, comment, } = action.payload;
      const postIndex = state.posts.findIndex((post) => post.id === postId);

      if (postIndex !== -1) {
        // Check if comments array exists, if not, initialize it
        if (!state.posts[postIndex].comments) {
          state.posts[postIndex].comments = [];

        }
        state.posts[postIndex].comments.push(comment);




      }

      console.log(action.payload)
    },

    toggleLikePost: (state, action) => {
      const { postId, liked } = action.payload;
      const postIndex = state.posts.findIndex((post) => (post.id === postId));

      if (postIndex !== -1) {

        { liked === false ? state.posts[postIndex].likeCount += 1 : state.posts[postIndex].likeCount -= 1 }


      }


      console.log(action.payload)
    }




  }



})


export const { addPost, removePost, addPostComment, toggleLikePost } = postSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;

export default postSlice.reducer