import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InfoBlock } from '../Component/components';
import { SubPageLayout } from '../Component/subSection/subSection';
import sggroupImage from '../Static/images/about/sggroup.jpg';
import sguBannerImage from '../Static/images/banner/banner1.jpg';
import menus from '../Component/navbar/menu';
import AboutBlock from '../Component/aboutBlock/aboutBlock';

export default function About() {

    const aboutSGU = [
        "Sanjay Ghodawat University was established as a State Private University in the year 2017. Previously it was Sanjay Ghodawat Insitutes formed in the year 2009 by the Chairman of SG Group, Sanjay Ghodawat. The Institute had received NAAC A grade and also its programs were accredited by NBA and after this the natural progression was the evolvement of Sanjay Ghodawat University.",
        "The University was formed to accomodate more students and give them a variety of choices for their career path. The University offers UG, PG and PhD programs in Technology, Management, Commerce, Science, Liberal Arts, Architecture, Pharmacy and Computer Applications.",
        "The USP of the University is its curriculum in tandem with the requirements of the Industry plus choice based credit system that allows students to choose major as well minor in the subjects of their choice. It encourages multi - disciplinary approach that helps students’ creativity and productivity. The University also offers hand on experience with establishment of Tata Technology Centre, Mechatronics Lab Car, BOSCH Collaboration Centre, Centre of Space and Atmospheric Science etc.",
        "The University campus is a state of art facility provided to students to help them study in a pristine environment. The 165 acres campus is replete with facilities like spacious classrooms, smart classrooms, well equipped labs, food court, amphitheatre, stadium with flood lights, swimming pool, horse riding, tennis court etc.",
        "The School of Commerce and Management, SGU was recognized as Top Emerging B School by Times B School Survey 2020. School of Technology, SGU Ranked 4th in Top Emerging Engineering Institutes of the Nation, 9th in Placement Category and 2nd in Research Capabilities by Times Ranking 2020.",
    ]

    const aboutSGG = [
        "Sanjay Ghodawat Group is a popular conglomerate that spans its products and services from Salt to Airlines in various sectors. It was commenced in the decade of 90s by the Chairman of the Group, Hon. Sanjay Ghodawat who himself is a Mechanical Engineer, Trained and certified pilot, Educational Entrepreneur and Industrialist. The Group today boasts of a strength of more than 10,000 employees under its aegis. Consumer Goods, Real Estate, Floriculture, Wind Turbines, Energy, Education, Airlines, Marble Mining, Textiles, Beverages, Softech etc are some of its verticals that the Group has forayed into. Enhancing Lives Globally is its maxim and true to its philosophy the Group is focussed on bettering and enhancement of human lives through its products and services.",
        "For more information visit  <a target='_blank' href='https://www.ghodawat.com'>www.ghodawat.com</a>"
    ]

    const aboutLogo = [
        "Sanjay Ghodawat University has a remarkable logo with a shield like shape bearing five stars and the symbol of the Sun.The logo has an aura of excellence and richness in its presentation.The shield stands for the defense of great moral force that Nature contains in it.The five stars that are on the top of the logo stand for five great values of commitment, excellence, innovation, dynamism and morality.In the middle the acronym SGU stands for the name of the University.The symbol of the Sun portrays the supremacy of the institution in educational field as the sun in our planetary system.The red color expresses the commitment that the institution has towards the society in providing the best education for the betterment of the society.In the logo, the white background suggests the spiritual strength on which the institution stands.",
    ]

    const subMenuData = {
        // "About": <url>
        "About SGU": menus['About Us']["About SGU"]['nested_links']['SGU'],
        "About Logo": menus['About Us']['About SGU']['nested_links']['SGU Logo'],
        "Sanjay Ghodawat Universtiy": menus['About Us']['About SGU']['nested_links']['Sanjay Ghodawat Group'],
        "Vision Mission": menus['About Us']['Vision Mission']['url'],
        "Accreditation & Ranking": menus['About Us']['Accreditation and Ranking']['url'],
        "Awards": menus['About Us']['Awards and Achievements']['url'],
        "Organisational Structure": menus['About Us']['Organisational Structure']['url'],
    }

    return (
        <Routes>
            <Route path="/sgu" element={
                <SubPageLayout title="About" subTitle="SGU" navigationInformation={subMenuData}>
                    <InfoBlock title="About SGU" description={aboutSGU} image={sguBannerImage} />
                </SubPageLayout>
            } />
            <Route path="/logo" element={
                <SubPageLayout title="About" subTitle="Logo" navigationInformation={subMenuData}>
                    <InfoBlock title="About Logo" description={aboutLogo} />
                </SubPageLayout>
            } />
            <Route path="/sgg" element={
                <SubPageLayout title="SGG" subTitle="SGG" navigationInformation={subMenuData}>
                    <InfoBlock title="About SGG" description={aboutSGG} image={sggroupImage} />
                </SubPageLayout>
            } />
            <Route path="/vision" element={
                <SubPageLayout title="About" subTitle='Vision' navigationInformation={subMenuData} >
                    <AboutBlock title="Vision" displayData='Internationally recognized university of excellence in creating and disseminating knowledge through value-based quality education leading to betterment of mankind.' />
                    <AboutBlock title="Mission"
                        rotation='0deg'
                        displayData={[
                            "To prepare students for life-long learning and leadership in a global academic culture",
                            "To create intellectual manpower relevant to the industry and society at large",
                            "To collaborate with institutions of international repute for academic excellence",
                            "To promote research and development through conducive environment",
                            "To encourage entrepreneurship and skill development programs",
                        ]} />
                </SubPageLayout>
            } />
            <Route path="/accreditation" element={
                <SubPageLayout title="Accreditation" navigationInformation={subMenuData} >
                    <h2>Content Under Progress!!</h2>
                </SubPageLayout>
            } />
            <Route path="/awards" element={
                <SubPageLayout title="Awards" navigationInformation={subMenuData} >
                    <h2>Content Under Progress!!</h2>
                </SubPageLayout>
            } />
            <Route path="/Structure" element={
                <SubPageLayout title="Structure" navigationInformation={subMenuData} >
                    <h2>Content Under Progress!!</h2>
                </SubPageLayout>
            } />
            <Route path="/*" element={
                <SubPageLayout title="" navigationInformation={subMenuData} >
                    <h2>Page Under Construction!!</h2>
                </SubPageLayout>
            } />
        </Routes>
    )
}