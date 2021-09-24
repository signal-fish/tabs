import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";
import { mobile } from "../../responsive";

const Company = ({ jobs, value, setValue }) => {
  const { company, dates, duties, title } = jobs[value];

  return (
    <Container>
      <Wrapper>
        <ButtonGroup>
          {jobs.map((item, index) => {
            return (
              <Button
                key={item.id}
                onClick={() => setValue(index)}
                self={index}
                currentValue={value}
              >
                {item.company}
              </Button>
            );
          })}
        </ButtonGroup>
        <Info>
          <JobTitle>{title}</JobTitle>
          <CompanyName>{company}</CompanyName>
          <Date>{dates}</Date>
          <Duties>
            {duties.map((duty, i) => {
              return (
                <Duty key={i}>
                  <ArrowWrapper>
                    <ArrowRight></ArrowRight>
                  </ArrowWrapper>
                  <Text>{duty}</Text>
                </Duty>
              );
            })}
          </Duties>
        </Info>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500px;

  ${mobile({
    height: "auto"
  })}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  ${mobile({
    flexDirection: "column",
  })}
`;

const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${mobile({
    flexDirection: "row",
  })}
`;

const Button = styled.button`
  margin: 15px 0;
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  padding: 5px 0;
  width: 80%;

  background: ${(props) => props.self === props.currentValue && "lightblue"};
  box-shadow: ${(props) =>
    props.self === props.currentValue && "0 2px 5px rgba(0, 0, 0, .6)"};
`;

const Info = styled.div`
  margin-left: 20px;
  flex: 5;

  ${mobile({
    marginTop: "30px",
  })}
`;

const JobTitle = styled.h2`
margin: 0;
`;

const CompanyName = styled.h5`
width: 100px;
  background: lightblue;
  padding: 3px;
  border-radius: 5px;
  text-align: center;
`;

const Date = styled.p`
  color: lightcoral;
`;

const Duties = styled.div``;

const Duty = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ArrowWrapper = styled.div`
display: flex;
`

const ArrowRight = styled(FaAngleDoubleRight)`
  color: lightskyblue;
`;

const Text = styled.p`
  margin-left: 20px;
`;

export default Company;
