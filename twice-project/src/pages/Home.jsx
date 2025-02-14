import { useState } from "react";
import Card from "../components/Card";
import nayeonImg from "../assets/nayeon.jpg";
import jeongyeonImg from "../assets/jeongyeon.jpg";
import momoImg from "../assets/momo.jpg";
import sanaImg from "../assets/sana.jpg";
import jihyoImg from "../assets/jihyo.jpg";
import minaImg from "../assets/mina.jpg";
import dahyunImg from "../assets/dahyun.jpg";
import chaeyongImg from "../assets/chaeyoung.jpg";
import tzuyuImg from "../assets/tzuyu.jpg";
import "../css/Home.css";
import TopBar from "../components/TopBar";

function Home() {
    const [selectedMember, setSelectedMember] = useState(null);

    const members = [
        { id: 1, name: "Nayeon", real_name: "Im Na-yeon", img: nayeonImg, 
            position: "Lead Vocalist, Lead Dancer, Center",
            birthdate: "September 22, 1995", 
            nationality: "Korean 🇰🇷",
            ig: "@nayeonyny",
            ig_link: "https://www.instagram.com/nayeonyny?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            color: "#80CAF1", emoji: "🐰"

        },
        { id: 2, name: "Jeongyeon", real_name: "Yoo Jeong-yeon", img: jeongyeonImg,
            position: "Lead Vocalist",
            birthdate: "November 1, 1996", 
            nationality: "Korean 🇰🇷",
            ig: "@jy_piece",
            ig_link: "https://www.instagram.com/jy_piece?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            color: "#BCD776", emoji: "🐶",   

        },
        { id: 3, name: "Momo", real_name: "Hirai Momo", img: momoImg, 
            position: "Main Dancer, Sub-Vocalist, Sub-Rapper",
            birthdate: "November 9, 1996", 
            nationality: "Japanese 🇯🇵",
            ig: "@momo",
            ig_link: "https://www.instagram.com/momo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            color: "#F8CFD7", emoji: "🍑",   
        },
        { id: 4, name: "Sana", real_name: "Minatozaki Sana", img: sanaImg,
            position: "Sub-Vocalist",
            birthdate: "December 29, 1996", 
            nationality: "Japanese 🇯🇵",
            ig: "@m.by_sana",
            ig_link: "https://www.instagram.com/m.by__sana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",    
            color: "#9C9ECF", emoji: "🐹",
        },
        { id: 5, name: "Jihyo", real_name: "Park Ji-hyo", img: jihyoImg,
            position: "Leader, Main Vocalist",
            birthdate: "February 1, 1997", 
            nationality: "Korean 🇰🇷",
            ig: "@_zyozyo",
            ig_link: "https://www.instagram.com/_zyozyo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",    
            color: "#FAC857", emoji: "🦄",
        },
        { id: 6, name: "Mina", real_name: "Myoui Mina", img: minaImg,
            position: "Main Dancer, Sub-Vocalist",
            birthdate: "March 24, 1997", 
            nationality: "Japanese 🇯🇵",
            ig: "@mina_sr_my",
            ig_link: "https://www.instagram.com/mina_sr_my?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            color: "#6FC5C2", emoji: "🐧",   

        },
        { id: 7, name: "Dahyun", real_name: "Kim Da-hyun", img: dahyunImg,
            position: "Lead Rapper, Sub-Vocalist",
            birthdate: "May 28, 1998", 
            nationality: "Korean 🇰🇷",
            ig: "@dahhyunee",
            ig_link: "https://www.instagram.com/dahhyunee/?utm_source=ig_web_button_share_sheet",
            color: "#FFFFFF", emoji: "🤍",  

        },
        { id: 8, name: "Chaeyoung", real_name: "Son Chae-young", img: chaeyongImg,
            position: "Main-Rapper, Sub-Vocalist",
            birthdate: "April 23, 1999", 
            nationality: "Korean 🇰🇷",
            ig: "@chaeyo.0",
            ig_link: "https://www.instagram.com/chaeyo.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            color: "#E81933", emoji: "🍓",

        },
        { id: 9, name: "Tzuyu", real_name: "Chou Tzuyu", img: tzuyuImg,
            position: "Lead-Dancer, Sub-Vocalist, Visual",
            birthdate: "June, 14, 1999", 
            nationality: "Taiwanese",
            ig: "@thinkaboutzu", 
            ig_link: "https://www.instagram.com/thinkaboutzu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            color: "#016CBA", emoji: "🦌",

        }
    ];

    return (
        <div className="home">
            <TopBar />
            <div className="members-grid">
                {members.map(member => (
                    <Card member={member} key={member.id} onInfoClick={() => setSelectedMember(member)} />
                ))}
            </div>

            {/* Popup Overlay */}
            {selectedMember && (
                <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
                    <button className="close-btn" onClick={() => setSelectedMember(null)}>✖</button>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        
                        <h2 style={{ color: selectedMember.color}}>{selectedMember.name}{selectedMember.emoji}</h2>
                        <p style={{ color: selectedMember.color}}>{selectedMember.real_name}</p>
                        <br></br>
                        <img src={selectedMember.img} alt={selectedMember.name} />
                        <br></br>
                        <p><b>Position:</b> {selectedMember.position}</p>
                        <p><b>Birthdate:</b> {selectedMember.birthdate}</p>
                        <p><b>Nationality:</b> {selectedMember.nationality}</p>
                        <p><b>Instagram Account:</b> <a href = {selectedMember.ig_link}>{selectedMember.ig}</a></p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
