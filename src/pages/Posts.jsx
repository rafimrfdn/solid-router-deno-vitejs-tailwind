 import { createSignal, createResource, For } from 'solid-js';

    // const fetchPosts = async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   return response.json();
    // };
 //
    const fetchPosts = async () => (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

    const Posts = () => {
      const [posts, setPosts] = createSignal();
      const [post] = createResource(posts, fetchPosts);

      // return (
      //   <div>
      //     <button onClick={() => setPosts(true)}>Fetch Posts</button>
      //     <ul>
      //       {post.loading
      //         ? <li>Loading...</li>
      //         : post()?.map(p => (
      //             <li key={p.id}>{p.title}</li>
      //           ))
      //       }
      //     </ul>
      //   </div>
      // );
     
      return (
        <div class="text-center">
          <button onClick={() => setPosts(true)}>Fetch Posts</button>
          <ol>
            <For each={post()}>{(post) => <li>{post.title}</li>}</For>
          </ol>
        </div>
      );

    };

 export default Posts
