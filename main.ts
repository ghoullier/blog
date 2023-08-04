import blog from "https://deno.land/x/blog@0.7.0/blog.tsx";

blog({
  title: "Grégory Houllier",
  author: "Grégory Houllier",
  avatar: "./ghoullier.jpeg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:gregory.houllier@gmail.com" },
    { title: "GitHub", url: "https://github.com/ghoullier" },
    { title: "Twitter", url: "https://twitter.com/ghoullier" },
  ],
  middlewares: [],
});
