import { Route, Routes } from "react-router-dom";
import VideoCall from "./routes/VideoCall/VideoCall.component";
import Home from "./routes/Home/Home.component";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoCall />} />
      </Routes>
    </div>
  )
}

export default App
