import { ComponentProps } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Subject } from "rxjs";
import "./main.css";

import Home from "./pages/Home.tsx";
import Users from "./pages/User.tsx";
import NotFound from "./pages/NotFound.tsx";
import PhotoGallery from "./pages/PhotoGallery.jsx";
import Posts from "./pages/Posts.jsx";

const s = new Subject();
s.subscribe((value) => console.log(value));

const App = (props: ComponentProps<"main">) => (
  <main onClick={() => s.next(42)}>
    <nav class="flex justify-around bg-red-400">
      <a href="/">Home</a>
      <a href="/user">User</a>
      <a href="/post">Posts</a>
      <a href="/gallery">Gallery</a>
    </nav>
    <h1>My Site with lots of pages</h1>
    {props.children}
  </main>
);

render(() => (
  <Router root={App}>
    <Route path="/gallery" component={PhotoGallery} />
    <Route path="/post" component={Posts} />
    <Route path="/user" component={Users} />
    <Route path="/" component={Home} />
    <Route path="*404" component={NotFound} />
  </Router>
), document.getElementById("main") as HTMLElement);
