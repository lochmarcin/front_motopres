import React from "react";
import QRCode from "qrcode";
import "./oneTodo.css"

const QrcodeGenerator = (props) => {
    
    const [imageqrcode, setImageQrcode] = React.useState("")

    React.useEffect(()=>{
        QRCode.toDataURL(props.src).then((setImageQrcode))
    })

    return (
        <>
            <img id="qrcode" src={imageqrcode}/>
        </>
    )
}
export default QrcodeGenerator
