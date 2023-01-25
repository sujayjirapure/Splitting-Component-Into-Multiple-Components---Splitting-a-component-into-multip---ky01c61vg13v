import React from "react"

function Footer(props){
    let {id ,content} = props;
    return (
        <div id="footer">
            <footer id={id}>{content}</footer>
        </div>
    );
}

export default Footer;
