// Reference: https://bun.sh/docs/api/http
// home router
function index(method:string) {
   if(method === "GET") {
      return new Response(Bun.file('./index.html'));
   }
    else if(method === "POST") {
      return new Response("Post Response!");
    } else {
      return new Response("Not implemented!");
    }
};

const server = Bun.serve({
  port: 8080,
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") return index(request.method);
    if (url.pathname === "/about") return new Response("kaka");
    if (url.pathname === "/clicked") return new Response("clicked");
    // Assuming 'index.html' is your file that includes HTMX
    return new Response("404");
  },
});

console.log(`Listening on ${server.url}`);


