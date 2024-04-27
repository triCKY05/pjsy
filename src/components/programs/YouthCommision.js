import React from 'react';
import { Container, Row } from 'react-bootstrap';
import prog3 from '../images/Prog/prog3.png';
import { Footer } from '../resuable/footer';
import '../../index.css';

const YouthCommision = () => {
    return (
        <div className='justify-text'>
            <div style={{ backgroundColor: '#F6ECDA' }}>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row className='mt-5'>
                        <h1 className='mt-5'>~ YOUTH COMMISSION REPORT MAGIS 2022 ~</h1>
                    </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <img alt="youth comision img" src={prog3} className="mt-5 mb-3" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-5 h-1'>
                        <strong><h3> Great minds discuss ideas, average minds discuss events and small minds discuss people. - Eleanor Roosevelt
                            Indeed, the wordings of Roosevelt came alive when the idea to call for MAGIS 2022 became a reality on 23 October, 2022. It was for the first time that the youth of Bihar came under one platform organized by Patna Jesuit Youth Commission. After all the preparations, planning and arrangements, the D-Day arrived when almost 220 vibrant youth gathered at St. Michael’s School campus, Patna, to celebrate, deliberate and rejoice in the company of each other. The theme of the Magis was, “TO SEE EVERYTHING NEW IN CHRIST”. The youth from 4 dioceses of Bihar, namely, Patna, Muzaffarpur, Bettiah and Buxar and the Diocese of Varanasi (Nagwa parish) came together. It was such a joy to see the vibrancy and enthusiasm of these youngsters. The session began with an introductory note by Fr. Anthony Prakash, the chairperson of the Youth Commission. Fr. Jose Thayil, Socius to the Patna Jesuit Provincial, offered the inaugural Holy Eucharist. The Message of Fr. Donald Miranda, Provincial, Patna Jesuit Province, was telecasted for the youth. After the Holy Mass, Fr. Norbert Menezes gave the inaugural address. Soon they had the ice-breaking session in their groups. On the second day various speakers highlighted the theme of Magis 2022. In the afternoon, there was an Ignatian Immersion with 100 slum children. The youth presented programs for them and conducted various games. The feast of Deepawali was celebrated with a candle light procession and bonfire. A short cultural program was staged by various groups. On the third day His Grace Archbishop Emeritus William D’Souza, Apostolic Administrator of Buxar Diocese, offered the Holy Eucharist and emphasized the importance of the youth in the Church. The Ignatian immersion was held at Taru-Mitra, a bio reserve of Patna Jesuit Province. The second and third days were guided by the 5 Pillars of MAGIS namely, Prayer, Eucharist, Experience, Magis circle and Examen. Various speakers elaborated these pillars. Through these pillars, Page 11 Ganga Lahar, November 2022 Page 12 Ganga Lahar, November 2022 the youth got a taste of Ignatian Spirituality and Jesuit heritage to find God in all things. The presence of Pre-Novices doubled the joy of the whole program as they were of great help. On the final day, each diocese prepared an action plan in their group and presented it before the whole assembly. The Magis 2022 came to an end with the Holy Eucharist. It was indeed a moment of grace for all of us that we could come together to share one vision and mission. we are filled with hope and optimism that the Church of Bihar and Uttar Pradesh will grow and become a huge tree where birds of various kinds will find their shelter. We will continue to ignite the fire which was lit during these days in each one of us. We sincerely thank all the Rev. Bishops, Youth Coordinators of various Dioceses, religious sisters, animators and benefactors, who helped us to make Magis 2022 a grand success. Our sincere and special thanks to ‘St. Michael’s Jesuit Community’, very specially Frs. Norbert, Mathew and Johnson for their cooperation and generosity. A heartfelt gratitude and appreciation to the Patna Jesuit Youth commission members for their hard work and team spirit. (Manish Osta).
                        </h3></strong>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default YouthCommision;