import "./style.css"
import img from "../../assets/4.png"
const index = ({img , title ,text ,titleBtn,active}) => {
  return (
    <div className="card">
      <div className="img">
        <div className="img"><img src={img} alt="as" /></div>
      </div>
        <div className="content-card">
            <p className="title">{title}</p>
            <p className="text">{text}</p>
            <button className={active?"activeBtn":""}>{titleBtn}</button>
        </div>
    </div>
  )
}

export default index