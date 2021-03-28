import React from 'react';

const ShowList = ({ showList = [] }) => {
    const linkStyle = {
        color: "#4895ef"
    }

    return (
        <div>
            <dl className="library">
                {showList.map((data, index) => {
                    if (data) {
                        return (
                            <div className="term" key={data.id}>
                                <dt>
                                    <img className="img" src={data.image.medium} alt="Smile"></img>
                                    <p>{data.name}</p>
                                </dt>
                                <dd>
                                    <p>{data.genres[0] + ", " + data.genres[1] + ", " + data.genres[2]}</p>
                                    <a href={data.officialSite} style={linkStyle} >Official Site</a>
                                </dd>
                            </div>

                        )
                    }
                    return null
                })}
            </dl>
        </div>

    );
}

export default ShowList;