export default eventHandler((event) => {
  return `
  <html>
    <head>
      <title>My Page</title>
      <!--<script src="https://unpkg.com/petite-vue"></script>-->
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script type="module">
        import { createApp } from 'https://unpkg.com/petite-vue?module'

        createApp({
          // exposed to all expressions
          fetchedData: {},
          fetchURL() {
            axios
			        .get("/get-query", {
                params: {
                  locale: 'en',
                  url: '/second-page',
                  cacheKey: 'page-second-page'
                }
              })
			        .then(({ data }) => (this.fetchedData = data));
          }
        }).mount()
      </script>
    </head>
    <body>
      <h1>VERCEL - NITRO - getQuery</h1>
      <div v-scope>
        <div style="cursor: pointer; text-decoration: underline; margin-bottom: 20px;" @click="fetchURL">GET with query params</div>
        <div>
          {{ fetchedData }}
        </div>
      </div>
    </body>
  </html>
`;
});
