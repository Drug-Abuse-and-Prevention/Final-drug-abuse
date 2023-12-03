
import newsItemCss from '../Styles/Global.css'

import React, { Component } from 'react'



export default class NewsItem extends Component {


    render() {
        let { imgUrl, title, description, date, author, source, newsUrl } = this.props;
        let no_img = "/images/no_image.png"

        function checkuser() {
            if (author == null) {
                return source;
            } else {
                return author;
            }
        }

        function checkImg() {
            if (imgUrl == null) {
                return no_img;
            } else {
                return imgUrl;
            }
        }
        return (
            <div style={newsItemCss}>



                {
                    <div className="card">
                        <div className="user_info">
                            <div className="user_img">
                                <img src="/images/user.svg" alt="" />
                            </div>
                            <div className="user_name">
                                <p className='name'>
                                    {checkuser()}

                                </p>
                                <p>
                                    {date}
                                </p>


                            </div>
                            <div className="visit">

                                <a href={newsUrl}>

                                    <button>
                                        {/* <img src="/images/go_btn.svg"></img> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                        </svg>
                                    </button>

                                </a>

                            </div>
                        </div>


                        <hr />


                        <div className="image_con">

                            <img className="news_img" src={checkImg()} alt="Loading" />
                            {/* <img id="avatar1" src="images/result-management-system.png"></img>  */}
                        </div>

                        <div id="decs">
                            <p id="title">{title}</p>
                            {/* <p id="description">{description}</p> */}



                        </div>



                    </div>


                }


            </div>
        )
    }
}
