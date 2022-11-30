// import team1 from '../../Static/Images/team1.jpg';
import team1 from '../../Static/images/team1.jpg';
import team2 from '../../Static/images/team2.jpg';
import team3 from '../../Static/images/team3.jpg';


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
            url: "http://www.sanjayghodawatuniversity.ac.in/vision",
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
            url: "", // not found
            nested_links: {},
            image: ""
        },
        "Awards and Achievements": {
            url: "http://www.sanjayghodawatuniversity.ac.in/awards.php",
            nested_links: {},
            image: ""
        },
        "Organisational Structure": {
            url: "", // not found
            nested_links: {},
            image: ""
        }
    },
    "Admissions": {
        "Overview": {
            url: "http://www.sanjayghodawatuniversity.ac.in/programme-ST", // programs offered and Intake
            nested_links: {},
            image: ""
        },
        "Why SGU?": {
            url: "", // Not Found
            nested_links: {},
            image: ""
        },
        "Eligibility": {
            url: "http://www.sanjayghodawatuniversity.ac.in/admission-eligibility-criteria",
            nested_links: {},
            image: ""
        },
        "Application Procedure": {
            url: "http://www.sanjayghodawatuniversity.ac.in/admission-apply", // How to apply
            nested_links: {},
            image: ""
        },
        "Fee Structure": {
            url: "http://www.sanjayghodawatuniversity.ac.in/fee-structure",
            nested_links: {},
            image: ""
        },
        "Scholarship": {
            url: "http://www.sanjayghodawatuniversity.ac.in/scholarships",
            nested_links: {},
            image: ""
        },

    },
    "Academic": {
        "Schools & Departments": {
            url: "/faculty",
            nested_links:
            {
            },
            image: team2,
        },
        "Academic Calender": {
            url: "http://www.sanjayghodawatuniversity.ac.in/academic-calendar",
            nested_links:
                {}
            ,
            image: team1,
        },
        "Academic Brochure": {
            url: "http://www.sanjayghodawatuniversity.ac.in/academic-brochure",
            nested_links: {},
            image: ""
        },
        "Foreign University Collaboration": {
            url: "http://www.sanjayghodawatuniversity.ac.in/collaboration-foreignUni",
            nested_links: {},
            image: ""
        },
        "University Library": {
            url: "http://www.sanjayghodawatuniversity.ac.in/library-about",
            nested_links: {},
            image: ""
        },
        "Grievance Redressal Mechanism": {
            url: "http://www.sanjayghodawatuniversity.ac.in/grievence-complaint-form",
            nested_links: {},
            image: ""
        },
    },
    "Research": {
        "PH.D Program": {
            url: "",
            nested_links: {
                "Ph.D Scholar": ""
            },
            image: team1,
        },
        "IPR Cell": {
            url: "http://www.sanjayghodawatuniversity.ac.in/rnd-IPR-temp",
            nested_links: {},
            image: team1,
        },
        "Research & Publications": {
            url: "http://www.sanjayghodawatuniversity.ac.in/rnd-publications",
            nested_links: {},
            image: team1,
        },
        "Center of Excellence": {
            url: "", // Not Found
            nested_links: {},
            image: team1,
        },
    },
    "Campus Life": {
        "Gallary": {
            url: "http://www.sanjayghodawatuniversity.ac.in/photogallery-academic",
            nested_links: {},
            image: team1,
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
    "Placement": {
        "Overview": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-about",
            nested_links: {},
            image: team1,
        },
        "Placement Details & Statistics": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-statistics",
            nested_links: {},
            image: team1,
        },
        "Contact Us": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-contact",
            nested_links: {},
            image: team1,
        },
        "Photo Gallary": {
            url: "http://www.sanjayghodawatuniversity.ac.in/tp-photogallery",
            nested_links: {},
            image: team1,
        },
    }
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