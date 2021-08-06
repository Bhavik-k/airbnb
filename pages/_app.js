import 'tailwindcss/tailwind.css'
import ProgressBar from "@badrap/bar-of-progress";
import router from "next/router";



const progress = new ProgressBar({
  size: 5,
  color: "#fe595e",
  className: "z-50",
  delay: 100
});

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

