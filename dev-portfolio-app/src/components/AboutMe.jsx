import React, { Component } from 'react'
class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id= "container">

               

                <div  id = "image">
                    <img src="https://attachment.outlook.live.net/owa/MSA%3Amorehouse472%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATY3ZmYAZS04NmNkLTZhYzItMDACLTAwCgBGAAADKUan772VA0SEHNYYkL67TgcAxUIBg0sLUUOvyS98xHn9TAAAAgEiAAAAxUIBg0sLUUOvyS98xHn9TAADaueSkgAAAAABEgAQAAnTNGTclnVMmp68xasAzNI%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020032301.14&isc=1&X-OWA-CANARY=5fWE1UjdKUquT4nYe4to5dBRoJx11tcYnVGsaTmSg2y4c2XdfYIGueaKZ8pnoD4wagl8eTr9YTo.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDI1OTgyLTIyNjE2MDkxNTRcIixcInB1aWRcIjpcIjE4Mjk1ODEwMjAyOTM4MjZcIixcIm9pZFwiOlwiMDAwNjdmZmUtODZjZC02YWMyLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1ODU3NzAyNTMsImV4cCI6MTU4NTc3MDg1MywiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIiwiaGFwcCI6Im93YSJ9.Dkrx3gzT73wNOczAkYvcZfm1Kvn9qr2goXZqR-uvrqKC3up8mY_vK062VHrsgekYyP_Wy2WLbyFw1gNvoni4s-C8Mvtnv5raSxJvqHN53Sx_rtAZuclfosGd7MYSRi4cnXKO4yHP_kfVh8TTXhRAxghnJtvwP0cNmJDTpDN8hcqB98PQK0IRA8rywN5tzq5O9OVUa24rWeZogcUDEY3zouMQgdEVwP9vVjKGZ7-nSDd_EtZRddT1zetUqekxQKOfgwzb0vbcgq2vbufpvv6tW4hmEkKL1RarfSXit6QL78Qhyn179cGbnCjoHsYMohCSgawSedHa0GULY52Uf2tQqQ&animation=true" height = "300" width ="175" alt=""/>
                </div>

                <div id = "headerQuote">

                <p class="quote">"First Solve the Problem.....Then Write the Code"</p>
                <p class="quote">---John Johnson</p>
                </div>

                <div id = "aboutMe">
                    <h1>About Me</h1>

                    <p> I am a self taught full-stack web developer. but that is only the tip of the iceberg. I am also, a
                    problem solver, team builder, motivator, planner, teacher, trainer, compliance specialist and seasoned
                professional. I am certain that all of these skills will add value to any organization</p>
                    <p>We all can imagine how planning and problem solving are required attributes of a developer. But how can
                teaching, training, team building, and compliance add value to the developer role? Let's explore!</p>
                </div>

                <div id= "footerQuote">
                    <p>

                    “If your ship doesn’t come in, swim out to meet it!” – Jonathan Winters
                </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;