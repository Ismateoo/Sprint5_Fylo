import "./stayProductive.css"

export default function StayProductive(){
    return(
        <section className="stayProductive" id="stayProductive">
            <div className="stayProductive__imagen">
                <img src="./images/illustration-stay-productive.png" alt="" className="stayProductive__imagen--mobile"/>
            </div>
            <div className="stayProductive__texto">
                <h1 className="stayProductive__titulo">Stay productive, <br />
                wherever you are</h1>
                <p className="stayProductive__parrafo1">Never let location be an issue when accessing your files. Fylo has you <br />
                covered for all your file storage needs</p>
                <p className="stayProductive__parrafo2">Securely share files and folders with friends, family and colleagues for live <br />
                collaboration. No email attachments required.</p>
                <span className="stayProductive__link">See how Fylo works <img src="./icons/icon-arrow.svg" alt="" /></span>
            </div>
        </section>
    )
}