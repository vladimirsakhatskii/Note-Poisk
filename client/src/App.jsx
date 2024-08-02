import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./Futter/Footer";
import Info from "./Info/Info";

export default function App() {
  const [tab, setTab] = useState("news");

  return (
    <>
      {tab === "news" && (
        <>
          <Header active={tab} onChange={(currentTab) => setTab(currentTab)}/>
          <Info />
          <Footer />
        </>
      )}
      {tab === "sport" && (
        <>
          <Header active={tab} onChange={(currentTab) => setTab(currentTab)}/>
          <Info />
          <Footer />
        </>
      )}
      {tab === "contact" && (
        <>
          <Header active={tab} onChange={(currentTab) => setTab(currentTab)}/>
          <Info />
          <Footer />
        </>
      )}
      {tab === "event" && (
        <>
          <Header active={tab} onChange={(currentTab) => setTab(currentTab)}/>
          <Info />
          <Footer />
        </>
      )}
      {tab === "interview" && (
        <>
          <Header active={tab} onChange={(currentTab) => setTab(currentTab)}/>
          <Info />
          <Footer />
        </>
      )}
      {tab === "education" && (
        <>
          <Header active={tab} onChange={(currentTab) => setTab(currentTab)}/>
          <Info />
          <Footer />
        </>
      )}
    </>
  );
}
