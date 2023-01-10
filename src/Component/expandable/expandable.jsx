import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useComponentList } from '../../PageBuilder/pageBuilder';

export default function ExpandableLayouter({ expandableInnerData }) {


    const navigate = useNavigate();
    const navigation = (path) => {
        alert("hello")
    }

    const [ComponentList, LayouterList] = useComponentList();

    const time = new Date().getTime().toString()
    return (
        <div className="accordion accordion-flush" id={`accordionFlush-${time}`}>
            {
                expandableInnerData.map(
                    (innerData, index) => {
                        return (
                            <div className="accordion-item" key={index}>
                                <h1 className='accordion-header' id={`flush-heading${index}-${time}`}>
                                    <button className={`accordion-button ${index === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}-${time}`} aria-expanded="false" aria-controls={`flush-collapse${index}-${time}`} >
                                        {Object.keys(innerData)[0]}
                                    </button>
                                </h1>
                                <div id={`flush-collapse${index}-${time}`} className={`accordion-collapse ${index === 0 ? "show" : "collapse"}`} aria-labelledby={`flush-heading${index}-${time}`} data-bs-parent={`#accordionFlush-${time}`} >
                                    <div className="accordion-body">
                                        <ol>
                                            {
                                                Object.values(innerData)[0].length === 0 ?
                                                    <p><strong>Section Under Construction</strong> (Please Comply, We are Contantly updating our Site)</p>
                                                    :
                                                    Object.values(innerData)[0].map(
                                                        (listView, index) => {

                                                            if (typeof listView === 'object') {
                                                                const componentName = Object.keys(listView)[0]

                                                                if (listView[componentName].hasOwnProperty("component")) {
                                                                    return (
                                                                        <React.Fragment>
                                                                            <br></br>
                                                                            <br></br>
                                                                            {
                                                                                LayouterList[componentName](listView[componentName])
                                                                            }
                                                                        </React.Fragment>
                                                                    )
                                                                }
                                                                return (
                                                                    <React.Fragment key={index}>
                                                                        <br></br>
                                                                        <br></br>
                                                                        {ComponentList[componentName](...Object.values(listView[componentName]), index)}
                                                                    </React.Fragment>
                                                                )
                                                            }

                                                            return (
                                                                <li key={index} dangerouslySetInnerHTML={{ __html: listView }} ></li>
                                                            )
                                                        }
                                                    )
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}