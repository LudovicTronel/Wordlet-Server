import React from "react";

const Community = () => {
    return(
        <>
            <div className="discord">
                    <iframe src="https://discord.com/widget?id=817218229377957938&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="discord" className="card"/>
            </div>
            <ul id="contacts">
                <li className="card"><a href="mailto:wordletthewordwallet@gmail.com" >mail</a></li>
                <li className="card"><a href="https://discord.gg/zmRRJcVJzM">Discord</a></li>
                <li className="card"><a href="https://www.linkedin.com/company/wordlet/">LinkedIn</a></li>
                <li className="card"><a href="https://www.facebook.com/WordletTheWordWallet">Facebook</a></li>
            </ul>
        </>
    )
}

export default Community