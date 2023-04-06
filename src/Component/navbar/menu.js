// import team1 from '../../Static/Images/team1.jpg';
import team1 from '../../Static/images/team1.jpg';
import team2 from '../../Static/images/team2.jpg';
import team3 from '../../Static/images/team3.jpg';
import banner7 from '../../Static/images/banner/banner7.JPG';



import uni_top_view from '../../Static/images/menus/university_top_view.jpeg';


const menus = {
    "About Us": {
        "About SGU": {
            url: "",
            nested_links:
            {
                "SGU": "/about/sgu",
                "SGU Logo": "/about/logo",
                "Sanjay Ghodawat Group": "/about/sgg"
            }
            ,
            image: uni_top_view,
        },
        "Vision Mission": {
            url: "/about/vision",
            nested_links: {},
            image: ""
        },
        "Leadership": {
            url: "",
            nested_links: {
                "About Trust": "http://www.sanjayghodawatuniversity.ac.in/about-trust",
                "Trust Board of Directors": "http://www.sanjayghodawatuniversity.ac.in/trust-management",
                "President": "http://www.sanjayghodawatuniversity.ac.in/message-president",
                "Secretary": "http://www.sanjayghodawatuniversity.ac.in/message-secretary",
                "Trustee": "http://www.sanjayghodawatuniversity.ac.in/message-trustee",
                "Vice Chancellor": "http://www.sanjayghodawatuniversity.ac.in/message-vc",
                "Officers of University": "http://www.sanjayghodawatuniversity.ac.in/officers-university",
            },
            image: ""
        },
        "Infrastructure": {
            url: "",
            nested_links: {
                "About Campus": "http://www.sanjayghodawatuniversity.ac.in/about-campus",
                "Campus Images": "http://www.sanjayghodawatuniversity.ac.in/campus-images",
                "Faculties": "http://www.sanjayghodawatuniversity.ac.in/facilities",
            },
            image: ""
        },
        "Location": {
            url: "http://www.sanjayghodawatuniversity.ac.in/contact-location",
            nested_links: {},
            image: ""
        },
        "Accreditation and Ranking": {
            url: "/about/accreditation",
            nested_links: {},
            image: ""
        },
        "Awards and Achievements": {
            url: "/about/awards",
            nested_links: {},
            image: ""
        },
        "Organisational Structure": {
            url: "/about/structure",
            nested_links: {},
            image: ""
        }
    },
    "school": {

        "School of Computer Science": {
            url: "/faculty/computer-science",
            nested_links: {},
            image: banner7,
        },

        "FACULTY OF TECHNOLOGY": {
            url: "/school/computer-science",
            nested_links: { "Aerospace Engineering": "/faculty/Aerospace", "Mechanical Engineering": "/faculty/Mechanical", "Civil Engineering": "/faculty/Civil", "Electrical and Electronics Engineering": "/faculty/EEE" },
            image: "",
        },
        "FACULTY OF ARCHITECTURE": {
            url: "/school/computer-science",
            nested_links: { "Architecture": "/faculty/Architecture", "Design": "/faculty/Design" },
            image: "",
        },
        "FACULTY OF COMPUTER SCIENCE AND APPLICATIONS": {
            url: "/school/computer-science",
            nested_links: { "School of Computer Science & Engineering": "/faculty/computerscience", "BCA": "/faculty/BCA", "MCA": "/faculty/MCA" },
            image: "",
        },
        "FACULTY OF COMMERCE AND MANAGEMENT": {
            url: "/school/computer-science",
            nested_links: { "School Of Commerce": "/faculty/Commerce", "School of Management": "/faculty/Management" },
            image: "",
        },
        "FACULTY OF PHARMACEUTICAL & ALLIED HEALTH SCIENCES": {
            url: "/school/computer-science",
            nested_links: { "School of Pharmacy": "/faculty/pharmacy", "School of Allied Health Sciences": "/faculty/foodscience" },
            image: "",
        },
        "FACULTY OF SCIENCE": {
            url: "/school/computer-science",
            nested_links: { "School of Chemical Sciences": "/faculty/chemical", "School of Physical Sciences": "/faculty/physical", "School of Interdisciplinary Sciences": "/faculty/interdisciplinary", "Department of Mathematics": "/faculty/mathematics" },
            image: "",
        },
        "FACULTY OF LIBERAL ARTS": {
            url: "/school/computer-science",
            nested_links: { "Department of Foreign language": "/faculty/foreign", "Department of Humanities and Social Sciences": "/faculty/hunabities", "Department of journalism and mass Communication": "/faculty/jmc" },
            image: "",
        },


    },

    "Admissions": {
        "Programs Offered & Intake": {
            url: "/admissions/overview", // programs offered and Intake
            nested_links: {},
            image: ""
        },
        "Fee Structure": {
            url: "", // Not Found
            nested_links: {},
            image: ""
        },
        "Ph.D Admission": {
            url: "http://www.sanjayghodawatuniversity.ac.in/admission-eligibility-criteria",
            nested_links: {},
            image: ""
        },
        "Scholarships": {
            url: "http://www.sanjayghodawatuniversity.ac.in/admission-apply", // How to apply
            nested_links: {},
            image: ""
        },
        "How to Apply": {
            url: "http://www.sanjayghodawatuniversity.ac.in/fee-structure",
            nested_links: {},
            image: ""
        },
        "Facilities Provided": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Online Admission Enquiry": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Admission Fee Bank Details": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Eligibility Criteria & Selection Process": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Documents Required": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Admission Policy": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Reservation Policy": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "SGU Entrance Test": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Contact Admission & Marketing Cell": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "Admission Cut Off 2022-2023": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },
        "FAQ's": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },



    },
    "Academic": {
        "Academic Schedule": {
            url: "/academics/faculty",
            nested_links:
            {
            },
            image: team2,
        },
        "Academic Calender": {
            url: "/academics/calender",
            nested_links:
                {}
            ,
            image: team1,
        },
        "Academic Brochure": {
            url: "/academics/brochure",
            nested_links: {},
            image: ""
        },
        "Foreign University Collaboration": {
            url: "/academics/foreignUni-collab",
            nested_links: {},
            image: ""
        },
        "University Library": {
            url: "/academics/library",
            nested_links: {},
            image: ""
        },
        "Grievance Redressal Mechanism": {
            url: "/academics/grievence-complaint-form",
            nested_links: {},
            image: ""
        },
        "Industry Collaborations": {
            url: "/academics/grievence-complaint-form",
            nested_links: {},
            image: ""
        },
        "Beyond Studies": {
            url: "/academics/grievence-complaint-form",
            nested_links: {},
            image: ""
        },
        "Caste Based Discrimination Complaint": {
            url: "/academics/grievence-complaint-form",
            nested_links: {},
            image: ""
        },
    },
    "Research & Development Cell": {
        "Research @ Sanjay Ghodawat University": {
            url: "",
            nested_links: {
                "Ph.D Scholar": ""
            },
            image: team1,
        },
        "Vision, Mission & Objetives": {
            url: "http://www.sanjayghodawatuniversity.ac.in/rnd-IPR-temp",
            nested_links: {},
            image: team1,
        },
        "Structure of Research & Development Cell": {
            url: "http://www.sanjayghodawatuniversity.ac.in/rnd-publications",
            nested_links: {},
            image: team1,
        },
        "Patents & Innovations Cell": {
            url: "", // Not Found
            nested_links: {},
            image: team1,
        },
        "IPR Cell": {
            url: "", // Not Found
            nested_links: {},
            image: team1,
        },
    },
    "Campus Life": {
        "Photo Gallary": {
            url: "http://www.sanjayghodawatuniversity.ac.in/photogallery-academic",
            nested_links: { " Academic": "/photogallary/academic", "Events": "/photogallary/evenet", "Celebrations": "/photogallary/celebration", "National Festivals": "/photogallary/Festivals", "Social Gathering 'UMANG'": "photogallary/SocialGathering2023", "Celebrities": "photogallary/Celebrities" },
            image: banner7,
        },
        "Clubs and Associations": {
            url: "",
            nested_links: {
                "DSAC Club": "http://www.sanjayghodawatuniversity.ac.in/dsac"
            },
            image: team1,
        },
        "Sports": {
            url: "Sports",
            nested_links: {},
            image: team1,
        },
        "Campus Life": {
            url: "",  // Not Found
            nested_links: {},
            image: team1,
        },
        "Community Services": {
            url: "http://www.sanjayghodawatuniversity.ac.in/students-activities",
            nested_links: {},
            image: team1,
        },

    },
    "Contact Us": {
        "Location Map": {
            url: "http://www.sanjayghodawatuniversity.ac.in/photogallery-academic",
            nested_links: {},
            image: team1,
        },
        "Vice Chancellor": {
            url: "",
            nested_links: {
                "DSAC Club": "http://www.sanjayghodawatuniversity.ac.in/dsac"
            },
            image: team1,
        },
        "Registrar": {
            url: "Sports",
            nested_links: {},
            image: team1,
        },
        "Head of School": {
            url: "",  // Not Found
            nested_links: {},
            image: team1,
        },
        "Administrative Department": {
            url: "http://www.sanjayghodawatuniversity.ac.in/students-activities",
            nested_links: {},
            image: team1,
        },
        "Admission & Marketing Cell": {
            url: "http://www.sanjayghodawatuniversity.ac.in/students-activities",
            nested_links: {},
            image: team1,
        },
        "IT Cell": {
            url: "http://www.sanjayghodawatuniversity.ac.in/students-activities",
            nested_links: {},
            image: team1,
        },
        "Transport Department": {
            url: "http://www.sanjayghodawatuniversity.ac.in/students-activities",
            nested_links: {},
            image: team1,
        },

    },
    "Training & Placement": {
        "About Training & Placement": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-about",
            nested_links: {},
            image: team1,
        },
        "Our Team": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-statistics",
            nested_links: {},
            image: team1,
        },
        "Vision Mission": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-contact",
            nested_links: {},
            image: team1,
        },
        "Our Recruiters": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-photogallery",
            nested_links: { "Technology": "/trp/technology", "Commerce & Management": "/trp/commerce", "Science & Pharmacy": "/trp/science" },
            image: team1,
        },
        "Statistics": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-photogallery",
            nested_links: {},
            image: team1,
        },
        "Photo Gallery": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-photogallery",
            nested_links: {},
            image: team1,
        },
        "Media Coverage": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-photogallery",
            nested_links: {},
            image: team1,
        },
        "Aptitude & Soft Skill Syllabus": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-photogallery",
            nested_links: {},
            image: team1,
        },
        "Contact Us": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-photogallery",
            nested_links: {},
            image: team1,
        },
    },
}
const topNavMenus = {
    "My Modal": "http://117.239.47.179:82/School/",
    "Staff Portal": "http://sguonline.in/",
    "Student Login": "http://sguonline.in/",
    "Careers": "http://www.sanjayghodawatuniversity.ac.in/careers",
    "Alumni": "",
    "Contact Us": "http://www.sanjayghodawatuniversity.ac.in/tp-contact",
    "Media": "http://www.sanjayghodawatuniversity.ac.in/media-coverage",
    "Photo Gallery": "http://www.sanjayghodawatuniversity.ac.in/photogallery-academic",
}

export default menus;
export { topNavMenus }