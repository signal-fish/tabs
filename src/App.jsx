import {useState, useEffect} from "react";
import styled from "styled-components";
import Loading from "./components/Loading";
import Company from "./components/Company";
import {mobile, tablet, tabletPro} from './responsive'

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs)
    setLoading(false)
  };

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
    <Container>
      <Wrapper>
        <Title>Experience</Title>
        <Company jobs={jobs} value={value} setValue={setValue} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    height: "auto",
  })}
`;

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${tabletPro({
    width: "80%",
  })}

  ${tablet({
    width: "90%",
  })}

  ${mobile({
    width: "95%",
  })}
`;

const Title = styled.h1`
${mobile({
  fontSize: "28px"
})}
`;

export default App;
