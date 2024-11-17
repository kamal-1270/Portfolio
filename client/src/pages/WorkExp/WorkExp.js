import React from 'react'
import './WorkExp.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { FaBuilding } from "react-icons/fa";
  import { HiOutlineBuildingLibrary } from "react-icons/hi2";
  import { MdWork } from "react-icons/md";
const WorkExp = () => {
  return (
    <>
      <div className='work'>
        <div className='container work-exp' id='workexp'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                Work Experience
            </h2>
            <hr/>
            <VerticalTimeline lineColor='#1e1e2c'>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2022 - 2023"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdWork/>}
          >
            <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bharat Intern pvt ltd
            </h4>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2023 - 2023 (1 Month )"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<HiOutlineBuildingLibrary/>}
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Code Clause pvt ltd
            </h4>
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2023 - 2023 (1 Month)"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<FaBuilding/>}
          >
            <h3 className="vertical-timeline-element-title">Java Development Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">
              OctaNet SW.Services pvt ltd
            </h4>
          </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
