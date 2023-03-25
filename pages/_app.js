import "../styles/globals.css";
// 用来加载全局样式的
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
