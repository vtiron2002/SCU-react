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
