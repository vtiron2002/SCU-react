import React from 'react'
import { FaHeadset, FaFlask, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'

const TeamMember = ({ name, title, img }) => {
    return (
        <div className="col-md-3 container">
            <img src={img} alt="Avatar" className="image" style={{ width: "100%" }} />
            <div className="middle">
                <div className="text"><strong>{name}</strong></div>
                <div className="text1">{title}</div>
                <div className="d-flex justify-content-between">
                    <FaFacebook color="#ffffff" size={15} className="mr-2" />
                    <FaYoutube color="#ffffff" size={15} className="mr-2" />
                    <FaTwitter color="#ffffff" size={15} />
                </div>
            </div>
        </div>
    )
}

export default TeamMember

/**
 *             <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px', backgroundColor: '#fffff' }}>
                <h1 className="mb-2 text-center" style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}> <strong>MEET OUR TEAM</strong></h1>
                <span className="mb-4">- WE ARE STRONGER -</span>
                <div className="d-flex flex-wrap">
                    <TeamMember
                        name="John Doe"
                        title="Software Engineer"
                        img={scu}
                    />
                    <TeamMember
                        name="Chris Rivee"
                        title="Social Media Manager"
                        img={scu}
                    />
                    <TeamMember
                        name="Hari Skae"
                        title="Director"
                        img={scu}
                    />
                    <TeamMember
                        name="Garry Gile"
                        title="Moderator"
                        img={scu}
                    />
                </div>
            </Row>
 *
 */