import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title icon={school}  title={"Educational"} span={"Qualifications"} />
      <InnerLayout>
       
        <div className="resume-content ">
          <ResumeItem
            year={"June, 2021 - Jan, 2022"}
            title={"Full Stack Web Developer"}
            subTitle={"Masai School, Banglore"}
            text={
              "Certified Full Stack Developement / MERN stack Developement"
            }
          />
          <ResumeItem
            year={"2013 - 2017"}
            title={"Mechanical Engineering"}
            subTitle={"Sant Gadge Baba Amravati University, Maharashtra"}
            text={
              "Got 7.8 CGPA. Always active in Extra cirriculum."
            }
          />
          <ResumeItem
            year={"2011 - 2013"}
            title={"HSC"}
            subTitle={"S.P.M Highschool Wani, Maharashtra"}
            text={
              "Got 67% in 12th. Always active in Extra cirriculum activities."
            }
            />
            <ResumeItem
              year={"2011"}
              title={"SSC"}
              subTitle={"S.P.M Highschool Wani, Maharashtra"}
              text={
                "Got 72% in 10th."
              }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  
  .resume-content {

    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
